import { TouchableOpacity, Text } from "react-native";
import TextInCard from "./TextInCard";


// 문제 상황
// 저장한 단어를 다시 보게 해주고 싶음. --> 처음에 view로 단어 목록을 쏴주는 형식의 설계를 해주면 됨. 
// 그러면 해당 인덱스의 단어를 전달하는 것이 아닌 인덱스와 단어목록을 전달해주고 여기서 단어목록에서 인덱싱을 하는 것을 해줘야하마. 

// 1. 요청사항 
//  - 1. 현재 단어의 인덱스 / 단어의 총 개수 
//  - 2. 누르면 인덱스 증가하는 함수 
//  - 3. 단어인지 뜻인지 알게 해주는 wordOrMean 

// 2. 구현 방법
//  해당 컴포넌트에서 medicalWord를 임

export default ({style, useTimer, wordIdx, nextWordIdx, wordOrMean, studyChapter}) => {
    return (
        <TouchableOpacity style={style} activeOpacity={0.7} onPress={()=>nextWordIdx()} disabled={useTimer?true:false}>
            <Text style={{position:"absolute",top:10}}>{wordIdx+1}/{studyChapter.current.length}</Text>
            <TextInCard wordOrMean={wordOrMean} studyChapter={studyChapter} wordIdx={wordIdx}/>
        </TouchableOpacity>
    );
}