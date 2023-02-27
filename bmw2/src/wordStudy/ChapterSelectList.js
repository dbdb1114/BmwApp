import { FlatList,StyleSheet,Text,View,Dimensions,TouchableOpacity,Pressable } from "react-native";
import { medicalWord } from '../Data/medicalWord';
import { listHeader } from "../public/listHeader";
import { chapterName } from "../Data/medicalWord";
import MarginVertical from "../public/MarginVertical";

const chartWidth = Dimensions.get("screen").width;
const chartHeight = Dimensions.get("screen").height;

const medicalWordKey = Object.keys(medicalWord);

export default ({showFlat,setShowFlat,setSelecChapter}) => {
    

    // FlatList RenderItem 함수
    const renderItem = ({item, index}) => {
        // 현재는 앱에 저장된 단어의 챕터만 있지만, 내가 저장한단어 챕터단위로 쪼개서 저장해둬야함. 
        // 일단 지금 드는 생각은 저장 단어가 150개 이상 ==>  단어를 두 그룹으로 나눈다. ==> 특정 챕터에 몰려있다면 ==> 챕터단위로 나눠준다 
        //                                    ==>  단어가 여기저기 산재해있으면 ==> 전체로 묶어둔다. 
        return (
            <TouchableOpacity 
            style={{height:90, marginTop:14, paddingLeft:10,borderColor:"rgba(26, 188, 156, 0.51)", borderWidth:1,justifyContent:"center",borderTopLeftRadius:10 ,borderTopRightRadius:10, borderBottomLeftRadius:25,borderBottomRightRadius:25, flexDirection:"row",justifyContent:"space-between",backgroundColor:"white"}}
            onPress={()=>{
                setShowFlat(!showFlat)
                setSelecChapter(item)
            }}
            activeOpacity={0.9}>
                <Text style={{color:"rgba(51, 51, 51, 0.96)",fontSize:18, fontWeight:"bold",marginBottom:50,marginTop:15}}>{chapterName[item]}</Text>
                <View style={{width:"30%", height:90, backgroundColor:"rgba(26, 188, 156, 0.40)",borderTopRightRadius:10,borderBottomRightRadius:25}}>
                    <Text style={{color:"white", padding:10,fontSize:21}}>{medicalWord[item].length}</Text>
                    <Text style={{ color:"white", marginBottom:15,marginRight:15, fontSize:18, alignSelf:"flex-end"}}>WORD</Text>
                </View>
            </TouchableOpacity>
        );
    }
    
    return(
        <>
            <Pressable style={{position:"absolute", width: chartWidth, height:chartHeight, backgroundColor:"rgba(33, 33, 33, 0.5)"}} onPress={()=>setShowFlat(false)} />
            <View style={styles.chapterFlatList}>
                <FlatList
                        data={medicalWordKey} //=> 내 DB에서 가져와야함
                        keyExtractor={(_, index) => index}
                        renderItem={renderItem}
                        ListHeaderComponent={listHeader({ title: "챕터를 선택하세요", style:styles.flatListHeader })}
                        stickyHeaderIndices={[0]}
                        nestedScrollEnabled={true}
                        ItemSeparatorComponent={<MarginVertical height={8}/>}
                />
            </View>
        </>
    );
}



const styles = StyleSheet.create({
    chapterFlatList: {
        position: "absolute",
        width: chartWidth*0.8,
        left: chartWidth*0.1,
        top: chartHeight*0.05,
        height:chartHeight*0.8,
        backgroundColor: "none",
    },
    flatListHeader : {
        paddingLeft: 10,
        borderBottomColor:"rgba(26, 188, 156, 0.51)",
        borderBottomWidth:2,
        paddingBottom: 20,
        marginBottom:0,
        backgroundColor:"white",   
        // borderRadius:20
    }
})