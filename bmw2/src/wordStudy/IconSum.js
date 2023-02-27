import { Dimensions, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const chartWidth = Dimensions.get("screen").width;

export const CardIcon = () => {
    return (
        <MaterialCommunityIcons
            name='card-multiple'
            size={chartWidth * 0.3 * 0.4}
            style={styles.iconStyle}
        />
    );
};

export const TimerIcon = () => {
    return (
        <MaterialIcons
            name='timer'
            size={chartWidth * 0.3 * 0.4}
            style={styles.iconStyle}
        />
    );
};

export const ListIcon = () => {
    return (
        <FontAwesome
            name='th-list'
            size={chartWidth * 0.3 * 0.4}
            style={styles.iconStyle}
        />
    );
};

const styles = StyleSheet.create({
    iconStyle: {
        color:"rgba(26, 188, 156, 0.51)",
        marginRight:20,
        marginLeft:20,
    },
});
