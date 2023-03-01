import {Alert} from 'react-native';

export const AlertEvent = (title, message) => {
  Alert.alert(title, message, [{text: 'Tamam'}]);
};
import {useTranslation} from 'react-i18next';

export const AlertEventAskMeLater = (
  title,
  message,
  askMeLater,
  cancel,
  ok,
  isCancelable,
) => {
  const {t} = useTranslation();
  Alert.alert(
    title,
    message,
    [
      {
        text: t('ASKMELATER'),
        onPress: () => askMeLater(),
      },
      {
        text: t('CANCEL'),
        onPress: () => cancel(),
        style: 'cancel',
      },
      {text: t('OK'), onPress: () => ok()},
    ],
    {cancelable: isCancelable},
  );
};
export const CustomAlert = (title, message, buttonArray, isCancelable) => {
  Alert.alert(title, message, buttonArray, {cancelable: isCancelable});
};
