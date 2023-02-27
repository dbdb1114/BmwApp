import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useEffect, useRef, useState } from "react";
import SaveOrPassBtn from "./SaveOrPassBtn";
import WordCardView from "./WordCardView";
import { medicalWord } from "../../Data/medicalWord";
import TimeOutView from "../TimeOutCard/TimeOutView";
import CloseAppBackHandler from "../../public/CloseAppBackHandler";
import StudyFinish from "./StudyFinish";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import MarginVertical from "../../public/MarginVertical";
import TextInCard from "./TextInCard";
import CountDownView from "../TimeOutCard/CountDownView";

const chartWidth = Dimensions.get("screen").width;
const chartHeight = Dimensions.get("screen").height;

export default ({ navigation, route }) => {
    const [selecChapter, wordOrMean, useTimer] = [
        route.params.selecChapter,
        route.params.wordOrMean,
        route.params.useTimer,
    ];

    const [
        saveWord,
        studyChapter,
        [wordIdx, setWordIdx],
        [timerLong, setTimerLong],
        [seconds, setSeconds],
        [timerReset, setTimerReset]
    ] = [
        useRef([]),
        useRef(medicalWord[selecChapter]),
        useState(0),
        useState(0),
        useState(timerLong),
        useState(true),
    ];

    const agreeAction = () => navigation.goBack();
    const nextWordIdx = () => {
        setWordIdx(wordIdx + 1);
    };

    const passBtn = () => {
        setWordIdx(wordIdx + 1);
        setSeconds(timerLong);
        setTimerReset(!timerReset);
    };

    const nextStoreIdx = () => {
        //해당 챕터 : 저장단어 , 뜻 / 저장 단어 , 뜻 / 저장단어 , 뜻/ 이런 형태로 저장하면 좋을듯.
        // 이후에 Json형태로 전달할때 selectWord : saveWord 라고 할 수 있게끔 --> 애초에 배열형태가 아니라 String으로 전달해야함.
        saveWord.current = [
            ...saveWord.current,
            [
                studyChapter.current[wordIdx][0],
                studyChapter.current[wordIdx][1],
            ],
        ];
        setWordIdx(wordIdx + 1);
    };

    let timerInputValue;
    const timerSetting = (timerInputValue) => {
        setTimerLong(Number(timerInputValue));
        setSeconds(timerInputValue);
    };

    // 끝났을때 Alert창
    useEffect(() => {
        if (wordIdx == studyChapter.current.length - 1) {
            StudyFinish({
                navigation,
                selecChapter,
                studyChapter,
                setWordIdx,
                saveWord,
            });
        }
    }, [wordIdx]);

    // 뒤로가기 버튼 눌렀을때 로직처리
    useEffect(() => {
        return CloseAppBackHandler({
            question1: "HoldOn!",
            question2:
                "지금 종료하시면 기록이 저장되지 않습니다. \n종료하시겠습니까?",
            agreeAction: agreeAction,
        });
    }, []);
    
    return (
        <>
            <View style={styles.wordContainer}>
                {!!useTimer? (
                    <>
                        <View style={{width:chartWidth*0.8, height:chartWidth*0.8}}>
                        {timerReset?<CountdownCircleTimer
                isPlaying
                size={chartWidth * 0.8}
                duration={seconds}
                colors={['#2ECC71', '#8E44AD', '#D35400', '#E74C3C']}
                colorsTime={[timerLong, timerLong/4, 2, 0]}
                onComplete={()=>{ 
                    if(wordIdx == studyChapter.current.length - 1  )
                    return { shouldRepeat : false }
                    else {
                    nextStoreIdx()
                    return { shouldRepeat : true, delay:0}}}}
            />:
                        <CountDownView timerLong={timerLong} wordIdx={wordIdx} chartWidth={chartWidth} seconds={seconds} studyChapter={studyChapter} nextStoreIdx={nextStoreIdx}/>}
                            <TextInCard wordOrMean={wordOrMean} studyChapter={studyChapter} wordIdx={wordIdx} style={{width:"100%", height:"100%",position:"absolute", justifyContent:"center", alignItems:"center"}}/>
                        </View>
                        <MarginVertical height={20}/>
                    </>
                ):
                <WordCardView
                    style={styles.cardStyle}
                    useTimer={useTimer}
                    wordIdx={wordIdx}
                    nextWordIdx={nextWordIdx}
                    wordOrMean={wordOrMean}
                    studyChapter={studyChapter}
                />}
                {!useTimer && (
                    <SaveOrPassBtn
                        style={styles.saveOrPassBtn}
                        onPress={() => nextStoreIdx}
                        content={"어려워요"}
                    />
                )}
                {!!useTimer && (
                    <SaveOrPassBtn
                        style={styles.saveOrPassBtn}
                        onPress={() => passBtn}
                        content={"PASS"}
                    />
                )}
            </View>
            {/* 타이머를 사용한다는 설정 useTimer와 timer시간 설정이 0일때 시간 설정을 할 수 있게. */}
            {timerLong == 0 && useTimer ? (
                <TimeOutView
                    timerSetting={timerSetting}
                    timerInputValue={timerInputValue}
                />
            ) : (
                ""
            )}
        </>
        // </StudyMenuContext>
    );
};

const styles = StyleSheet.create({
    wordContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: chartHeight * 0.8,
    },
    saveOrPassBtn: {
        alignSelf: "center",
        borderColor: "rgb(26, 188, 156)",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        paddingVertical: 25,
        borderRadius: 20,
        width: chartWidth * 0.6,
    },
    cardStyle: {
        width: chartWidth * 0.8,
        height: chartWidth * 0.7,
        borderRadius: 25,
        backgroundColor: "rgb(224, 224, 224)",
        borderColor: "rgb(26, 188, 156)",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        padding: 20,
    },
    timerText: {
        marginBottom: 20,
        fontSize: 33,
        fontWeight: "bold",
    },
});
