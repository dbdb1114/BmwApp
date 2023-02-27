import {
    TextInput,
    Text,
    View,
    Dimensions,
    KeyboardAvoidingView,
    Image,
    StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const chartWidth = Dimensions.get("screen").width;

export default () => {
    return (
        <>
            <KeyboardAvoidingView
                style={styles.inputContainer}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <TextInput style={styles.contentsTextInput} placeholder="필요하거나 공유하고싶은 내용이 있나요?" />
                <View style={styles.submitBtn}>
                    <TouchableOpacity style={{height:"100%",width:chartWidth*0.15,justifyContent:"center",alignItems:"center",borderColor:"white"}}>
                        <Text style={{fontSize:14,color:"white"}}>전송</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginTop:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    contentsTextInput: {
        width:chartWidth*0.95,
        height:80,
        textAlignVertical:"top",
        padding:10,
        backgroundColor:"white",
        borderTopLeftRadius:15,
        borderBottomRightRadius:15,
        borderTopRightRadius:15,
        borderBottomLeftRadius:15

    },
    submitBtn: {
        position:"absolute",
        width:chartWidth*0.15,
        right:chartWidth*0.025,
        bottom:0,
        height:40,
        // borderWidth:2,
        // borderColor:"white",
        // borderTopRightRadius:15,
        borderBottomRightRadius:15,
        // justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(26, 188, 156, 0.41)"
    },
});
