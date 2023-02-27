import { View, StyleSheet, Button, Alert } from "react-native";

export default () => {
    return Alert.alert(
        "챕터를 선택해주세요!",
        [
            {
                text: "OK",                           
                style: "cancel"
            },
        ],
        { cancelable: true }
    );
};
