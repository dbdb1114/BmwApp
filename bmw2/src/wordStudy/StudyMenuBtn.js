import {
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    View,
    Animated
} from "react-native";
import { useRef,useEffect } from "react";
import { CardIcon } from './IconSum';
import { ListIcon, TimerIcon } from "./IconSum";

const chartWidth = Dimensions.get("screen").width;
const chartHeight = Dimensions.get("screen").height;

export default ( {selecChapter, icon, content1, content2, selectWordOrMean, wordOrMean, useTimer, menuBtnType,selectedMenuBtnType,typeOfThis,navigation} ) => {
    
    const moveText = typeOfThis == menuBtnType;

    const startValue = useRef(new Animated.Value(0)).current;
    const endValue = moveText ? -25 : 0;
    const duration = 500;

    const showOption = useRef(new Animated.Value(0)).current;
    const showEndValue = moveText ? 1 : 0;
    const showDuration = 500;

    const toCard = {
        selecChapter : selecChapter,
        wordOrMean : wordOrMean,
        useTimer : useTimer
    }

    const toList = {
        selecChapter : selecChapter,
    }

    useEffect(() => {
        Animated.timing(startValue, {
        toValue: endValue,
        duration: duration,
        useNativeDriver: true,
        }).start();

        Animated.timing(showOption, {
            toValue: showEndValue,
            duration: showDuration,
            useNativeDriver: true,
        }).start();
    }, );

    const selectedStyles = StyleSheet.create({
        wordOptSt : {
            fontSize:18,
            fontWeight : wordOrMean == "단어" ? "bold":"100",
            color: wordOrMean == "단어" ? "black" : "grey"
        },
        meanOptSt : {
            fontSize:18,
            fontWeight : wordOrMean == "뜻" ? "bold":"100",
            color: wordOrMean == "뜻" ? "black" : "grey"
        },
    });

    const startBtn = () => {
        // 타이머 모드만 useTimer를 전달하기 때문에 useTimer를 전달받았는지 확인 후 True로 바꿔줌
        !!useTimer&&(useTimer.current = true);
        if (selecChapter!=0){
            if(typeOfThis == "ListType"){
                navigation.push("WordListView",toList)
            }else {
                navigation.push("wordCardScreen",toCard)
            }
        } else {
            return "";
        }
    }

    return (
        <TouchableOpacity 
        style={styles.menuBtn} 
        activeOpacity={0.7} 
        onPress={()=>{ selectedMenuBtnType(typeOfThis) }}
        disabled={typeOfThis == menuBtnType ? true:false}>
            {icon == "card" ? <CardIcon/> : icon == "list"? <ListIcon/> : icon=="timer"?<TimerIcon/> : ""}
            <Animated.View style={[{ height: chartHeight * 0.1, },
            {transform: [{translateY: startValue},]}]}>
                <Text style={styles.content1}>{content1}</Text>
                <Text style={styles.content2}>{content2}</Text>
            </Animated.View>
            <Animated.View style={{position:"absolute",bottom:chartHeight*0.1*0.12, left: chartWidth*0.8*0.3}}>
                <View style={{ flexDirection:"row",marginLeft:chartWidth*0.8*0.05}}>
                    {!!wordOrMean && <TouchableOpacity  disabled={moveText?false:true} onPress={selectWordOrMean} style={{padding:15}} ><Animated.Text style={[selectedStyles.meanOptSt,{opacity: showOption}]}>뜻만</Animated.Text></TouchableOpacity>}
                    {!!wordOrMean && <TouchableOpacity  disabled={moveText?false:true} onPress={selectWordOrMean} style={{padding:15}} ><Animated.Text style={[selectedStyles.wordOptSt,{opacity: showOption}]}>단어만</Animated.Text></TouchableOpacity>}
                    <TouchableOpacity onPress={()=> startBtn()} disabled={moveText?false:true} style={!!wordOrMean?{padding:15}:{marginBottom:15, marginLeft:chartWidth*0.8*0.35}} ><Animated.Text style={{fontSize:21, fontWeight:"bold" ,opacity: showOption}}>시작</Animated.Text></TouchableOpacity>
                </View>
            </Animated.View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    menuBtn: {
        marginBottom:15,
        alignItems:"center",
        flexDirection:"row",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "rgb(26, 188, 156)",
        backgroundColor: "rgba(224, 224, 224, 0.27)",
        width: chartWidth * 0.8,
        height: chartHeight * 0.15,
        padding: 10,
    },
    content1:{
        // fontWeight: "bold", 
        color:"rgba(51, 51, 51, 0.92)", 
        fontSize:19,
        marginTop: chartHeight*0.1*0.17
    },
    content2 : {
        color: "rgb(64, 64, 64)",
        fontSize:16,
        marginTop:5
    },
});