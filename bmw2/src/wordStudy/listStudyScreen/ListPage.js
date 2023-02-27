import { FlatList, Text,View,Dimensions } from "react-native";
import MarginVertical from "../../public/MarginVertical";
import { medicalWord } from "../../Data/medicalWord";
import { useState } from 'react';
import { TouchableHighlight } from "react-native-gesture-handler";
import { All } from './ListDetail';
import { Word } from './ListDetail';
import { Meanning } from './ListDetail';

const chartWidth = Dimensions.get("screen").width;

export default ({ navigation, route}) => {

    const [ onlyBtn, setOnlyBtn ] = useState("");

    const [ selecChapter ] = [
        route.params.selecChapter
    ] 

    const studyChapter = medicalWord[selecChapter];

    c

    console.log(studyChapter);
    console.log(typeof studyChapter);

    return (
        <View style={{ width:chartWidth, alignItems:"center"}}>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:20}}>
                <TouchableHighlight 
                    style={{marginRight:20}}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={()=>setOnlyBtn("onlyWord")} >
                    <Text style={[{ fontSize:25},onlyBtn == "onlyWord"?{fontSize:30, fontWeight:"bold"}:""]}>단어만</Text>
                </TouchableHighlight>
                <TouchableHighlight 
                    style={{marginRight:20}}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={()=>setOnlyBtn("onlyMeaning")} >
                    <Text style={[{ fontSize:25  },onlyBtn == "onlyMeaning"?{fontSize:30, fontWeight:"bold"}:""]}>뜻만</Text>
                </TouchableHighlight>
                <TouchableHighlight  
                    style={{marginRight:20}}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={()=>setOnlyBtn("")} >
                    <Text style={[{ fontSize:25 },onlyBtn == ""?{fontSize:30, fontWeight:"bold"}:""]}>둘 다</Text>
                </TouchableHighlight>
            </View>
            <FlatList
                data={studyChapter}
                keyExtractor={(_, index) => index}
                renderItem={onlyBtn == "onlyWord" ? Word : onlyBtn == "onlyMeaning" ? Meanning : All}
                showsVerticalScrollIndicator={false}
                StickyHeaderComponent={false}
                ListFooterComponent = {<MarginVertical height={100}/>}
            />
            
        </View>
    );
};
