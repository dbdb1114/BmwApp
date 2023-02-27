import { TouchableOpacity, Text, Dimensions } from "react-native"

const chartWidth = Dimensions.get('screen').width;

export default ({title, showChangeName})=> {
    return (
        <TouchableOpacity 
        style={{paddingBottom:20 ,marginBottom:20, height:50, alignItems:"center", borderBottomColor:"rgb(26, 188, 156)", borderBottomWidth:1}} 
        onPress={showChangeName} >
            <Text style={{fontSize:20,width:chartWidth*0.8}} >{title}</Text>
        </TouchableOpacity>
    )
} 