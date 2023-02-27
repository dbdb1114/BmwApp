import { View,Text } from "react-native";
import MarginVertical from "./MarginVertical";

export const listHeader = ({title,style}) => {
    return (
        <View style={[{ marginBottom: 20 },style]}>
            <MarginVertical height={20} />
            <Text style={{ fontWeight: "bold", fontSize:24 }}>{title}</Text>
        </View>
    );
}