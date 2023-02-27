import { StyleSheet,Dimensions } from "react-native";

const chartWidth = Dimensions.get("screen").width;
const chartHeight = Dimensions.get("screen").height;

export const styles = StyleSheet.create({
    body: {
        marginTop: 20,
        paddingHorizontal: chartWidth * 0.05,
        flexGrow: 1,
        height: chartHeight * 0.8,
        alignItems: "center",
        backgroundColor:"white",
        // alignItems:"center"
    },
});
