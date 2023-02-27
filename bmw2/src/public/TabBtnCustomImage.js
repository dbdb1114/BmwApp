import {
    FontAwesome,
    Entypo,
    MaterialIcons,
    Ionicons,
} from "@expo/vector-icons";
import { StyleSheet, Dimensions, View } from "react-native";

const chartHeight = Dimensions.get("window").height;
const chartWidth = Dimensions.get("window").width;

export default () => {
    return (
        <View style={[styles.tabImgContainer,{justifyContent:"space-evenly"}]}>
            <FontAwesome name='user' size={20} color='black' />
            <Entypo name='open-book' size={20} color='black' />
            <MaterialIcons name='dashboard' size={20} color='black' />
            <Ionicons name='options' size={20} color='black' />
        </View>
    );
};

const styles = StyleSheet.create({
    tabImgContainer: {
        width: chartWidth*1,
        height: chartHeight * 0.08,
        backgroundColor: "rgba(224, 224, 224, 0.18)",
        flexDirection: "row",
        justifyContents: "space-evenly",
        alignItems: "center",
        position:"absolute",
        bottom:chartHeight * (-0.95),
    },
});
