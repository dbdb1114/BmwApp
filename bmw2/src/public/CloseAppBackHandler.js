import { Alert,BackHandler } from "react-native";

export default ({question1,question2, agreeAction = () => BackHandler.exitApp() }) => {

    const backAction = () => {
        Alert.alert(question1, question2, [
            {
                text: "취소",
                onPress: () => null,
            },
            { text: "확인", onPress: agreeAction }
        ]);
        return true;
    };
    
    // const agreeAction = () => {
    //     BackHandler.exitApp();
    // };
    const backHandler = BackHandler.addEventListener(
        
        "hardwareBackPress",
        backAction
    );

    return () => backHandler.remove();
}