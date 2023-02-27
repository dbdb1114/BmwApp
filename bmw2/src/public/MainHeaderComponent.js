import { Text, View, Dimensions } from "react-native";
import MarginVertical from "./MarginVertical";

const chartWidth = Dimensions.get("screen").width;

export default ({ title,style }) => {
    return (
        <View style={[{ paddingBottom: 20 , paddingLeft: chartWidth * 0.1, paddingTop: 20, backgroundColor:"white" },style]}>
            <MarginVertical height={20} />
            <Text style={{ fontWeight: "bold", fontSize:24, }}>{title}</Text>
        </View>
    );
};
