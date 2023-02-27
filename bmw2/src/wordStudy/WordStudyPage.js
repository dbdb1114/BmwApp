import {
    Dimensions,
    View,
    ScrollView,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import { styles } from "../public/styleSheet";
import StudyMenuBtn from "./StudyMenuBtn";
import MainHeaderComponent from "../public/MainHeaderComponent";
import MarginVertical from "../public/MarginVertical";
import { onlyCard, andCard, timerCard, listType } from "./cardObj";
import ChapterSelectList from "./ChapterSelectList";
import ShowChapterBtn from "./ChapterShowBtn";
import { SafeAreaView } from "react-native-safe-area-context";
import CloseWindowBackHandler from "../public/CloseWindowBackHandler";

const chartHeight = Dimensions.get("screen").height;

export default ({ navigation }) => {
    const [
        [showFlat, setShowFlat],
        [selecChapter, setSelecChapter],
        [menuBtnType, setMenuBtnType],
        [wordOrMean, setWordOrMean],
        useTimer,
    ] = [
        useState(false),
        useState(0),
        useState(""),
        useState("단어"),
        useRef(false),
    ];

    const [touchShowFlat, selectWordOrMean, selectedMenuBtnType] = [
        () => {
            setShowFlat(!showFlat);
        },
        () => {
            let change = wordOrMean == "뜻" ? "단어" : "뜻";
            setWordOrMean(change);
        },
        (type) => {
            setMenuBtnType(type);
        },
    ];

    useEffect(() => {
        CloseWindowBackHandler({var1 : showFlat,setVar1 : touchShowFlat}); 
    });

    return (
        <SafeAreaView>
            <ScrollView nestedScrollEnabled={true}>
                <MainHeaderComponent title={"학습메뉴"} style={{}} />
                <View style={[styles.body, { marginTop: 0 }]}>
                {/* showFlat이라는 boolean 값에 따라서 챕터 선택 뷰가 보인다. */}
                    {showFlat ? (
                        ""
                    ) : (
                        <ShowChapterBtn
                            touchShowFlat={touchShowFlat}
                            selecText={selecChapter}
                        />
                    )}
                    <MarginVertical height={15} />
                    <StudyMenuBtn
                        selecChapter={selecChapter} // 내가 위에서 고른 챕터
                        icon={onlyCard.icon} // 메뉴에 들어가는 아이콘
                        content1={onlyCard.content1} // 메뉴에 들어가는 텍스트
                        content2={onlyCard.content2} // 메뉴에 들어가는 텍스트
                        selectWordOrMean={selectWordOrMean} // wordOrMean 변경함수
                        wordOrMean={wordOrMean}
                        menuBtnType={menuBtnType} // 내가 고른 버튼 ( 카드형태인지 타이머인지 리스트인지 )
                        selectedMenuBtnType={selectedMenuBtnType} // 내가 고른 버튼 ( 카드형태인지 타이머인지 리스트인지 )
                        typeOfThis={"WordOrMeaningCardType"} // 해당 버튼 식별할 수 있는 값
                        navigation={navigation}
                    />
                    <StudyMenuBtn
                        selecChapter={selecChapter}
                        icon={timerCard.icon}
                        content1={timerCard.content1}
                        content2={timerCard.content2}
                        selectWordOrMean={selectWordOrMean}
                        wordOrMean={wordOrMean}
                        useTimer={useTimer}
                        menuBtnType={menuBtnType}
                        selectedMenuBtnType={selectedMenuBtnType}
                        typeOfThis={"TimerType"}
                        navigation={navigation}
                    />
                    <StudyMenuBtn
                        selecChapter={selecChapter}
                        icon={andCard.icon}
                        content1={andCard.content1}
                        content2={andCard.content2}
                        menuBtnType={menuBtnType}
                        selectedMenuBtnType={selectedMenuBtnType}
                        typeOfThis={"CardAndMeaningType"}
                        navigation={navigation}
                    />
                    <StudyMenuBtn
                        selecChapter={selecChapter}
                        icon={listType.icon}
                        content1={listType.content1}
                        content2={listType.content2}
                        menuBtnType={menuBtnType}
                        selectedMenuBtnType={selectedMenuBtnType}
                        typeOfThis={"ListType"}
                        navigation={navigation}
                    />
                </View>
                <View style={{ height: chartHeight * 0.05 }}></View>
            </ScrollView>
            {showFlat ? (
                <ChapterSelectList
                    showFlat={showFlat}
                    setShowFlat={setShowFlat}
                    setSelecChapter={setSelecChapter}
                />
            ) : (
                ""
            )}
        </SafeAreaView>
    );
};
