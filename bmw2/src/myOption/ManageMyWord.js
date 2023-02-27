
import { Text, TextInput, StyleSheet } from 'react-native';
import { Dimension } from 'react-native';

const chartWidth = Dimension.get("screen").width;
const chartHeight = Dimension.get("screen").height;

export default () => {
    return (
        <View style={styles.nameChangeContainer}>
            <Text style={styles.nameChangeTitle}>변경하고싶은 이름을 입력해주세요~!</Text>
            <TextInput style={styles.nameChageInput}/>
        </View>
    )
}

const styles = StyleSheet.create({
    nameChangeContainer:{
        width:chartWidth,
        height:chartHeight,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderColor:"black"
    },
    nameChangeTitle : {
        fontSize:25
    },
    nameChageInput : {
        width:150,
        height:20,
    }
})