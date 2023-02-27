import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomAlert from "../../public/CustomAlert";

export default ({navigation,selecChapter,studyChapter,setWordIdx,saveWord}) =>{
    const finish = "끝났습니다!";
            const choice1 =
                " 모든 단어를 학습하셨군요! 대단하십니다! \n순서를 바꿔서 다시 보시겠습니까? ";
            const choice2 = " 어려웠던 단어를 보시겠습니까? ";
            const selectBtn1 = {
                text: "아니오",
                onPress: () => {
                    navigation.goBack();
                    AsyncStorage.setItem(
                        `${selecChapter}`,
                        JSON.stringify(saveWord.current),
                        ()=>{
                            AsyncStorage.getItem(
                                `${selecChapter}`,(err,result)=>{
                                    const UserWOrd = JSON.parse(result);
                                    console.log("UserWord : " + UserWOrd)
                                }
                            )
                        }
                    )

                    AsyncStorage.getItem('key').then(value => {
                        console.log("vlaue : " + value);
                    });                   
                }
            };
            const selectBtn2 = {
                text: "네",
                onPress: () => {
                    // 단어 목록을 섞으면, 마지막 finish까지 섞이므로 그것을 생각하여 finish를 빼고
                    // 섞어주고, 다시 마지막에 넣어준다.
                    studyChapter.current.splice(
                        studyChapter.current.length - 1
                    );
                    studyChapter.current.sort(() => Math.random() - 0.5);
                    studyChapter.current.push(["finish", "finish"]);
                    setWordIdx(0);
                },
            };
            const selectBtn3 = {
                text: "네",
                onPress: () => {
                    // 여기서 현재 사용되는 단어 목록을 지워주고,
                    // 마지막까지 모른다고 눌렀던 단어들로 초기화시켜주고,
                    // 현재 모른다고 눌렀던 단어들을 빈 배열로 초기화 시켜줌.
                    studyChapter.current = [];
                    studyChapter.current = saveWord.current;
                    saveWord.current = [];
                    setWordIdx(0);
                },
            };
            saveWord.current.length < 1
                ? CustomAlert({
                        text1: finish,
                        text2: choice1,
                        selectBtn1: selectBtn1,
                        selectBtn2: selectBtn2,
                    })
                : CustomAlert({
                        text1: finish,
                        text2: choice2,
                        selectBtn1: selectBtn1,
                        selectBtn2: selectBtn3,
                    });
}