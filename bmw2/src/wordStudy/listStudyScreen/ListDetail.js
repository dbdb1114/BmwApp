import { View, Dimensions, Text} from "react-native";
import { StyleSheet } from "react-native";

const chartWidth = Dimensions.get("screen").width;
const chartHeight = Dimensions.get("screen").height;

export const All = ({item}) => {
    return (
        <>
            <View style={styles.Container}>
                <Text style={styles.WordMean}>{item[0]}</Text>
                <Text style={styles.WordMean}>{item[1]}</Text>
            </View>
        </>
    );
};

export const Word = ({item}) => {
    return (
        <View style={styles.Container}>
            <Text style={styles.WordMean}>{item[0]}</Text>
        </View>
    )
}

export const Meanning = ({item}) => {
    return (
        <View style={styles.Container}>
            <Text style={styles.WordMean}>{item[1]}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        borderWidth: 1,
        borderColor: "grey",
        width: chartWidth * 0.9,    
        flexDirection:"row",
    },
    WordMean: {
        width: chartWidth * 0.4,
        // borderWidth: 1,
        borderColor: "grey",
        color: "black",
        fontSize: 20,
        padding: 10,
    },
});
