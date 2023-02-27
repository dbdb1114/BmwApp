import {
    TouchableOpacity,
    Text,
    View,
    Dimensions,
    StyleSheet,
} from "react-native";
import { chapterName } from "../Data/medicalWord";

const chartWidth = Dimensions.get("screen").width;

export default ({ touchShowFlat, selecText }) => {
    return (
        <View
            style={{ width: "100%", paddingHorizontal: chartWidth * 0.025, }} >
            <Text style={{ fontWeight: "bold", fontSize: 14.5 }}>
                공부할 챕터:{" "}
            </Text>
            <TouchableOpacity style={styles.showFlatList} onPress={touchShowFlat} >
                <Text style={{fontSize: 22, color: "rgba(51, 51, 51, 0.96)", width: "100%", }} >
                    {selecText == "" ? "챕터를 선택해주세요 ( touch )" : chapterName[selecText]}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    showFlatList: {
        marginTop: 10,
        width: chartWidth * 0.7,
        borderColor: "black",
    },
});
