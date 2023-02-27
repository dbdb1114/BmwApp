import { Text, View } from "react-native";

export default ({wordOrMean,studyChapter,wordIdx, style}) => {
    if(!!wordOrMean){
        return (
            <View style={style}>
                {wordOrMean == "단어"? <Text style={{fontSize:20, marginBottom:13, fontWeight:"bold"}}>{studyChapter.current[wordIdx][0]}</Text>:
                <Text style={{fontSize:20, fontWeight:"bold" }}>{studyChapter.current[wordIdx][1]}</Text>} 
            </View>
            )
    } else {
        return(
            <View style={style}>
                <Text style={{fontSize:20, marginBottom:13, fontWeight:"bold"}}>{studyChapter.current[wordIdx][0]}</Text>
                <Text style={{fontSize:20, fontWeight:"bold" }}>{studyChapter.current[wordIdx][1]}</Text>
            </View>
        );
    }
}