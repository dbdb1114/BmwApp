import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';


const chartHeight = Dimensions.get("screen").height
const chartWidth = Dimensions.get("screen").width

export default ({timerSetting,timerInputValue}) => {
    return (
        <View style={styles.timeOutViewContainer}>
            <View style={styles.timeOutView}>
                <Text style={{marginBottom:20, fontWeight:"bold"}}>타이머 시간을 입력해주세요!</Text>
                <View style={{flexDirection:"row",justifyContent:"center"}}>
                    <TextInput 
                        keyboardType="number-pad"
                        style={styles.timeInput}
                        onChangeText={(text)=>  timerInputValue = text}
                    />
                    <TouchableOpacity onPress={()=>timerSetting(timerInputValue)} style={styles.studyStartBtn} >
                        <Text style={{fontWeight:"bold"}}>완료</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    timeOutViewContainer : {
        position:"absolute",
        justifyContent:"center", 
        alignItems:"center", 
        height:chartHeight*0.8, 
        width:chartWidth, 
        backgroundColor:"white"
    },
    timeOutView : { 
        width: chartWidth*0.7,
        height: chartHeight*0.3, 
        opacity:0.7, 
        borderWidth:1, 
        borderRadius:25,
        borderColor:"rgb(26, 188, 156)",
        justifyContent:"center",
        alignItems:"center" 
    },
    timeInput : {  
        backgroundColor:"grey",
        width:150, 
        height:40, 
        fontSize:25, 
        backgroundColor:"white",
        borderRadius:20,
        paddingLeft:20, 
        fontSize:18 },
    studyStartBtn :{
        position:"absolute",
        width:50,
        height:40,
        justifyContent:"center",
        alignItems:"center",
        right:0, 
        borderTopRightRadius:20, 
        borderBottomRightRadius:20, 
        backgroundColor:"rgb(26, 188, 156)"},
})