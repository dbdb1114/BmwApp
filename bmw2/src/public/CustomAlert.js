
import { Alert } from 'react-native';

export default ({text1,text2,selectBtn1,selectBtn2}) => {
    Alert.alert(text1,text2,[
        selectBtn1,
        selectBtn2
    ]);
}
