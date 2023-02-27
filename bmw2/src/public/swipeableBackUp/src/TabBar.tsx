
import React from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native"
import { ITabProps } from "./SwipeableTabs";
import {
    FontAwesome,
    Entypo,
    MaterialIcons,
    Ionicons,
} from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen")

export default function TabBar({ labels, tabCount, selectedIndex, onPress }: ITabProps) {

    let labelArray = [...Array(tabCount)].map((_, i) => i)

    return (
        <View style={styles.body} >
            <TouchableOpacity onPress={() => { !!onPress && onPress(0)}}>
                <FontAwesome name='user'  size={20} color= {selectedIndex == 0? "rgb(26, 188, 156)" : 'black'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { !!onPress && onPress(1)}}>
            <Entypo name='open-book'  size={20} color= {selectedIndex == 1? "rgb(26, 188, 156)" : 'black'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { !!onPress && onPress(2)}}>
            <MaterialIcons name='dashboard'  size={20} color= {selectedIndex == 2? "rgb(26, 188, 156)" : 'black'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { !!onPress && onPress(3)}}>
            <Ionicons name='options'  size={20} color= {selectedIndex == 3? "rgb(26, 188, 156)" : 'black'} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    body:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        width,
        height: height * .08,
        backgroundColor: "white",
        paddingTop: height * 0.01,
        paddingHorizontal: width * 0.1
    },
}
)