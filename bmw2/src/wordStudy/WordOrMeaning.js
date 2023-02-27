import { Text, View,Dimensions,TouchableOpacity,StyleSheet } from "react-native";

const chartWidth = Dimensions.get("screen").width;
const chartHeight = Dimensions.get("screen").height;

export default ({selecWordOrMean,wordOrMean}) => {
    return (
        <View style={{marginTop: 10, width:"100%", paddingHorizontal:chartWidth*0.025}}>
            <Text style={{fontWeight:"bold",fontSize:14.5 }}>무엇을 먼저 보여드릴까요? ( 왼쪽 메뉴만 해당 )</Text>
            <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
                <TouchableOpacity style={styles.wordOrmeanBtn} onPress={()=>selecWordOrMean("meaning")}>
                    <Text style={wordOrMean == "meaning" ? styles.wordOrMeanTextselec : styles.wordOrMeanTextUnselec}>뜻</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.wordOrmeanBtn} onPress={()=>selecWordOrMean("word")}>
                    <Text style={wordOrMean == "word" ? styles.wordOrMeanTextselec : styles.wordOrMeanTextUnselec}>단어</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    wordOrmeanBtn : {
        marginTop:12,
        width: "30%",
        height: chartHeight*0.07,
        borderColor:"black",
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:10,
    },
    wordOrMeanTextUnselec : {
        color:"rgba(51, 51, 51, 0.96)",
        fontSize:23, 
    },
    wordOrMeanTextselec : {
        fontSize:28,
        color : "black" , 
        fontWeight:"bold",
        backgroundColor:"rgb(26, 188, 156,80)",
    }
})