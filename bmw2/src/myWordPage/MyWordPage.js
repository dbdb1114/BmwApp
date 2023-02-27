import { View, Text, TouchableOpacity, FlatList } from "react-native";
import MarginVertical from "../public/MarginVertical";
import MyWordRenderItem from "./MyWordRenderItem";
import MainHeaderComponent from "../public/MainHeaderComponent";
import { styles } from "../public/styleSheet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { chapterName } from "../Data/medicalWord";
import { useAsync } from 'react-async';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';

const myWordStorageKey = Object.keys(chapterName);



// 저장소에서 가져오는데 소요시간이 있어서 비동기처리 해야함.
const userSaveWord = async () => {
    let userWord = new Array();
    for (let i = 0; i < myWordStorageKey.length; i++) {
        try {
            await AsyncStorage.getItem(`${myWordStorageKey[i]}`,
            (err, result) =>{
                if( result ){
                userWord.push(JSON.parse(result));
                console.log("for문 안에서 : " + userWord)
            }
            });
        } catch(error){
            console.log(error)
        }
    }
    console.log("userWord : " + userWord)
    return userWord;
    }
export default () => {
    const [refresh, setRefresh] = useState(true);
    const {data, error, isPending} = useAsync({promiseFn: userSaveWord});

    if (!refresh) return;
    if( isPending ){
        return (
            <View style={[styles.body,{marginTop:0}]}>
                <MainHeaderComponent title={"내가 저장한단어"} style={{width:"100%",paddingLeft:0, paddiingTop:0}}/>
                <Text>Loading....</Text>
            </View>
        )}
    if( error ){
        return (
            <View style={[styles.body,{marginTop:0}]}>
                <MainHeaderComponent title={"내가 저장한단어"} style={{width:"100%",paddingLeft:0, paddiingTop:0}}/>
                <Text>다음에 다시 시도해주세요! </Text>
            </View>
        )}
    if( data ){
        return (
            <View style={[styles.body,{marginTop:0}]}>
                <MainHeaderComponent title={"내가 저장한단어"} style={{width:"100%",paddingLeft:0, paddiingTop:0}}/>
                    <TouchableOpacity onPress={()=>{
                        refreshSwitch();
                    }} style={{position:"absolute" , right:50, top:50}}>
                        <Feather name="refresh-ccw" size={24} color="black" />
                    </TouchableOpacity>
                <FlatList
                    data={data} 
                    keyExtractor={(_, index) => index}
                    renderItem={MyWordRenderItem}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={<MarginVertical height={20}/>}
                    StickyHeaderComponent={false}
                />
            </View>
        );
    }

};
