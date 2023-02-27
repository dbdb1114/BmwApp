import { TouchableOpacity,Text } from "react-native";

export default ( {style,content,onPress} ) => {
    return (
        <TouchableOpacity 
            style={style}
            activeOpacity={0.7} 
            onPress={onPress()}>
                <Text style={{fontSize:18}}>{content}</Text>
        </TouchableOpacity>
    );
}

