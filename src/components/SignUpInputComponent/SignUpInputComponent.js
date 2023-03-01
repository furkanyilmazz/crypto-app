import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Color } from "../../config/color";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Happy from "../../assets/icons/happy";
import Lock from "../../assets/icons/lock";
import Eye from "../../assets/icons/eye";
import EyeOff from "../../assets/icons/eyeoff";
import Person from "../../assets/icons/person";
import Phone from "../../assets/icons/phone";
import Date from "../../assets/icons/date";

export default function SignUpInputComponent(props) {
  const [focused, setFocused] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <View style={{}}>
      <View style={styles.inputBackground}>
        {props.icon === "happy-outline" ? (
          <Happy
            width={wp("7%")}
            height={wp("7%")}
            style={styles.SignUpInputIcon}
            fill={focused ? Color.textShadowWhite : Color.inputPlaceholder}
          />
        ) : props.icon === "lock" ? (
          <Lock
            width={wp("7%")}
            height={wp("7%")}
            style={styles.SignUpInputIcon}
            fill={focused ? Color.textShadowWhite : Color.inputPlaceholder}
          />
        ) : props.icon === "person" ? (
          <Person
            width={wp("7%")}
            height={wp("7%")}
            style={styles.SignUpInputIcon}
            fill={focused ? Color.textShadowWhite : Color.inputPlaceholder}
          />
        ) : props.icon === "phone" ? (
          <Phone
            width={wp("7%")}
            height={wp("7%")}
            style={styles.SignUpInputIcon}
            fill={focused ? Color.textShadowWhite : Color.inputPlaceholder}
          />
        ) : props.icon === "calendar" ? (
          <Date
            width={wp("7%")}
            height={wp("7%")}
            style={styles.SignUpInputIcon}
            fill={focused ? Color.textShadowWhite : Color.inputPlaceholder}
          />
        ) : null}

        {props.input ? (
          <TextInput
            autoCapitalize={props.autoCapitalize}
            autoCompleteType={"off"}
            autoCorrect={false}
            importantForAutofill={"no"}
            ref={props.ref}
            style={styles.SignUpInputComponent}
            onChangeText={props.onChangeText}
            placeholder={props.placeHolder}
            keyboardAppearance="dark"
            error={props.error}
            keyboardType={props.keyboardType}
            disableFullscreenUI={true}
            placeholderTextColor={Color.inputPlaceholder}
            value={props.value}
            maxLength={props.maxLength}
            onFocus={() => {
              setFocused(true), props.onFocus;
            }}
            onEndEditing={() => {
              setFocused(false);
              props.onEndEditing;
            }}
            onPressOut={props.onPressOut}
            onTouchEnd={props.onTouchEnd}
            onSubmitEditing={props.onSubmitEditing}
            secureTextEntry={
              props.isPassword === true ? (showPassword ? false : true) : false
            }
          />
        ) : null}

        {props.datePicker ? null : null}
        {props.isPassword === true ? (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.EyeIcon}
          >
            {showPassword ? (
              <Eye
                width={wp("7%")}
                height={wp("7%")}
                style={styles.SignUpInputIcon}
                fill={focused ? Color.textShadowWhite : Color.inputPlaceholder}
              />
            ) : (
              <EyeOff
                width={wp("7%")}
                height={wp("7%")}
                style={styles.SignUpInputIcon}
                fill={focused ? Color.textShadowWhite : Color.inputPlaceholder}
              />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
      {props.error && (
        <Text style={styles.errorText}>{props.error ? props.error : null}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputBackground: {
    backgroundColor: Color.inputBackground,
    alignSelf: "center",
    paddingLeft: wp("2%"),
    flexDirection: "row",
    borderRadius: 10,
    marginVertical: hp("1%"),
    height: hp("6%"),
    width: "80%",
  },
  SignUpInputComponent: {
    paddingLeft: wp("2%"),
    height: hp("6%"),
    color: Color.textShadowWhite,
    flex: 1,
  },
  SignUpInputIcon: {
    alignSelf: "center",
  },
  EyeIcon: {
    alignSelf: "center",
    marginRight: wp("3%"),
  },
  errorText: {
    color: Color.error,
    marginLeft: wp("10%"),
    marginTop: hp("-1%"),
  },
});
