import { Dimensions, Text, View } from "react-native";
import { useState, useEffect } from "react";
import MyOptionMenu from "./MyOptionMenu";
import MyOptionProfile from "./MyOptionProfile";
import NameChange from "../NameChange";
import CloseWindowBackHandler from "../../public/CloseWindowBackHandler";

const chartWidth = Dimensions.get("screen").width;

export default () => {
    const [nameChange, setNameChange] = useState(false);
    const [keyBoardUp,setKeyBoardUp] = useState(false);

    const showChangeName = () => {
        setNameChange(!nameChange);
    };

    const keyBoardUpDown = () => {
        setKeyBoardUp(!keyBoardUp);
    }
    
    // 뒤로가기 버튼 로직 구현 ( 이름 변경 창에서 )
    useEffect(() => {
        CloseWindowBackHandler({var1: nameChange, setVar1 : showChangeName})
    },);

    return (
        <>
            <View style={{ alignSelf: "center" }}>
                <View
                    style={{
                        marginTop: 20,
                        marginLeft: chartWidth * 0.05,
                        marginBottom: 20,
                    }}
                >
                    <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                        내 정보 관리
                    </Text>
                </View>
                <MyOptionProfile
                    userName='유정현'
                    userEmail='dbdb1114@naver.com'
                />
                <View style={{ alignItems: "flex-start", marginTop: 20 }}>
                    <MyOptionMenu title='내가 저정한 단어' />
                    <MyOptionMenu title='내가 작성한 글' />
                    <MyOptionMenu
                        title='이름 변경'
                        showChangeName={showChangeName}
                    />
                </View>
            </View>
            {nameChange? <NameChange showChangeName={showChangeName} keyBoardUp={keyBoardUp} keyBoardUpDown={keyBoardUpDown}/>:""}
        </>
    );
};
