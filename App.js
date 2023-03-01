import { StatusBar, LogBox } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import Router from "./src/Router";
import "./src/config/i18n/i18.config";

import store from "./src/redux/store";

import OneSignal from "react-native-onesignal";
import { WalletConnectProvider } from "react-native-walletconnect/dist/providers";

export default function App() {
  LogBox.ignoreAllLogs();

  OneSignal.setAppId("c315b5d7-b384-41db-a217-81127e403a13");
  OneSignal.promptForPushNotificationsWithUserResponse();
  OneSignal.setNotificationWillShowInForegroundHandler(
    (notificationReceivedEvent) => {
      let notification = notificationReceivedEvent.getNotification();
      const data = notification.additionalData;
      notificationReceivedEvent.complete(notification);
    }
  );
  OneSignal.setNotificationOpenedHandler((notification) => {});

  return (
    <WalletConnectProvider>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#1e1e1e" />
        <Router />
      </Provider>
    </WalletConnectProvider>
  );
}
