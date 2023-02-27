import {
    KeyboardAvoidingView,
    Keyboard,
    Platform,
    Pressable,
    Dimensions,
    View
} from "react-native";
import SearchBar from "react-native-dynamic-search-bar";
import { styles } from "../public/styleSheet";
import MarginVertical from "../public/MarginVertical";
import BoardContentRender from "./BoardContentFlatList";
import ContentsInput from "./ContentsInput";
import MainHeaderComponent from "../public/MainHeaderComponent";

const chartWidth = Dimensions.get('screen').width;

export default () => {

    return (
        <Pressable style={{ backgroundColor:"white", width:chartWidth}} onPress={Keyboard.dismiss}>
            {/* <MainHeaderComponent title={"요청사항"} style={{backgroundColor:}}/> */}
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
                {/* 검색바 외부 모듈 사용 */}
                <View style={{backgroundColor:"rgba(26, 188, 156, 0.41)",paddingTop:5, height:150}}>
                    <SearchBar style={{ width:chartWidth*0.95, borderRadius:0}} placeholder="게시글을 검색하세요"/>
                {/* 글쓰기 input란 */}
                <ContentsInput/>
                </View>
                <MarginVertical height={20} />
                {/* 작성된 게시들  */}
                <BoardContentRender />
            </KeyboardAvoidingView>
        </Pressable>
    );
};
