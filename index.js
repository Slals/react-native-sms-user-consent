import { NativeModules, Platform } from "react-native";
const { RNReactNativeSMSUserConsent } = NativeModules;

export default class SMSUserConsent {
  static listenOTP(sender) {
    if (Platform.OS != "ios" && Platform.OS != "android") {
      return false;
    }
    return RNReactNativeSMSUserConsent.listenOTP(sender);

  }
  static removeOTPListener() {
    if (Platform.OS != "ios" && Platform.OS != "android") {
      return false;
    }
    return RNReactNativeSMSUserConsent.removeOTPListener();
  }
}
