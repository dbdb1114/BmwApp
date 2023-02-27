import { Text,Keyboard, TextInput, View, StyleSheet,Dimensions,KeyboardAvoidingView, Pressable,Platform, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useEffect , useRef } from 'react';

const chartWidth = Dimensions.get("screen").width;
const chartHeight = Dimensions.get("screen").height;


export default ({showChangeName, keyBoardUp,keyBoardUpDown}) => { 

    const nameInputStart = useRef(new Animated.Value(0)).current;
    const nameInputEndValue = keyBoardUp ? chartHeight*0.125 * (-1) : 0;
    const showDuration = 300;
    

    // 이름변경 창 키보드 나오면 올라가는 애니메이션 로직 
    useEffect(() => {
        Animated.timing(nameInputStart, {
        toValue: nameInputEndValue,
        duration: showDuration,
        useNativeDriver: true,
        }).start();
    }, [keyBoardUp]);

    // 이름변경 창에서 주변 터치시 키보드 내려가는 로직
    function cancelNameChange () {
        Keyboard.dismiss();
        showChangeName();
    }

    return (
        <>
            <Pressable style={styles.nameChangeContainer} 
            onPress={cancelNameChange}>
            </Pressable>        
            <Animated.View 
            style={[styles.inputContainer,{transform: [{translateY: nameInputStart},]}]}>
                <Text style={styles.nameChangeTitle}>변경하고싶은 이름을 입력해주세요.</Text>
                <TextInput style={styles.nameChageInput} onFocus={keyBoardUpDown} />
                <TouchableOpacity style={styles.saveBtn}>
                    <Text style={{fontSize:23, fontWeight:"bold"}}>저장</Text>
                </TouchableOpacity>
            </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({
    saveBtn:{
        width:100,
        height:80,
        marginTop:50,
        justifyContent:"center",
        alignItems:"center"
    },
    nameChangeContainer:{
        position:"absolute",
        width:chartWidth,
        height:chartHeight*0.9,
        borderWidth:1,
        borderColor:"black",
        backgroundColor:"rgba(33, 33, 33, 0.5)"
    },
    inputContainer : {
        position:"absolute",
        alignSelf:"center",
        padding:10,
        paddingTop:40,
        height:chartHeight*0.3,
        width:chartWidth*0.8,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        borderRadius:24,
        marginTop:chartHeight*0.3
    },  
    nameChangeTitle : {
        fontSize:20,
        marginBottom:50,
    },
    nameChageInput : {
        width:200,
        height:40,
        fontSize:40,
        borderBottomWidth:1,
        padding:5,
        borderBottomColor:"rgb(26, 188, 156)"
    }
})