import {
    KeyboardAvoidingView,
    Keyboard,
    Platform,
    Pressable,
} from "react-native";
import SearchBar from "react-native-dynamic-search-bar";
import { styles } from "../../public/styleSheet";
import MarginVertical from "../../public/MarginVertical";
import BoardContentRender from "../BoardContentFlatList";

export default () => {
    return (
        <Pressable
            style={[styles.body, { paddingHorizontal: 0, backgroundColor:"white" }]}
            onPress={Keyboard.dismiss}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <SearchBar
                    placeholder='Search here'
                />
                <MarginVertical height={20} />
                <BoardContentRender />
            </KeyboardAvoidingView>
        </Pressable>
    );
};
