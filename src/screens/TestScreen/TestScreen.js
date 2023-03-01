import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { socketDisconnect } from "../../redux/Actions/socketActions";

export default function TestScreen(props) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.dispatch(socketDisconnect());
        }}
      >
        <Text>disconnect</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text>reconnect</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
