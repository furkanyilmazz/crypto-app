// import { useSelector } from "react-redux";
// import { API_URL } from "../../../config";

// const { auth } = useSelector((state) => state);
// const userToken = auth.user[0].token;

// import React from "react";
// import { View } from "react-native";

// export default function signalR({ startStreaming, start }) {
//   var signalR = require("@microsoft/signalr");
//   const connection = new signalR.HubConnectionBuilder()
//     .configureLogging(signalR.LogLevel.Information)
//     .withUrl(API_URL + "portfolio", {
//       accessTokenFactory: () => userToken,
//     })
//     .build();

//   async function start() {
//     try {
//       connection.start().then(() => {
//         console.log("SignalR Connected.");
//         startStreaming();
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   connection.onclose(async () => {
//     await start();
//   });

//   start();
// }
