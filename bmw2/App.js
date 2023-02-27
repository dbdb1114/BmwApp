import { React, useState, useEffect } from "react";
import SwipeableTabs from "react-native-swipe-tabs";
import WordAddSuggestion from "./src/dashBoard/WordAddSuggestion";
import MyOptionPage from "./src/myOption/myOptionPage/MyOptionPage";
import { SafeAreaView } from "react-native-safe-area-context";
import WordStudyContainer from "./src/wordStudy/WordStudyContainer";
import MyWordPage from "./src/myWordPage/MyWordPage";
import CloseAppBackHandler from "./src/public/CloseAppBackHandler";
import LoadingScreen from "./src/LoadingScreen";

export default () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    

    useEffect(() => {
        return CloseAppBackHandler({
            question1: "HoldOn!",
            question2: "앱을 종료하시겠습니까?"
        });
    }, []);
    const LoadingScreen = setTimeout(()=>{
            return <LoadingScreen/>
            },3000)
    
    return (
        <SafeAreaView>
            {/* **** 해당 컴포넌트 내부 뜯어고쳐서 사용하려면 다시 손 봐야함. **** 
            SwipeableTabs 안에 defaultTab 내부에 탭버튼 생성하는 로직을 아예 바꿈,*/}
            <SwipeableTabs
                onSwipe={(x) => setSelectedIndex(x)}
                selectedIndex={selectedIndex}
                labels={["Favourites", "Playlists", "Tracks", "Folders"]}
            >
                <WordStudyContainer />
                <MyWordPage />
                {/* <WordAddSuggestion />
                <MyOptionPage /> */}
            </SwipeableTabs>
        </SafeAreaView>
    );
};
