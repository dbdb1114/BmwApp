import { AntDesign } from "@expo/vector-icons";
import {Image,Dimensions,StyleSheet,Text,TouchableOpacity,View}from "react-native";


const chartWidth = Dimensions.get('screen').width;

export default ({userName, userEmail}) => {
    return (
        <View style={ styles.profileContainer}>
            <Image style={styles.profileImage} />
            <View>
                <TouchableOpacity style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 30 }}>{userName}</Text>
                    <AntDesign name='right' size={30} color='black' style={{ alignSelf: "center" }}/>
                </TouchableOpacity>
                <Text style={{ fontSize: 20,marginTop: 6,  fontWeight: "400", }} >
                    {userEmail}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    profileContainer : {
        borderBottomColor: "rgb(26, 188, 156)",
        borderBottomWidth: 2,
        flexDirection: "row",
        height: 100,
        paddingHorizontal: 10,
        width: chartWidth * 0.9,
    },
    profileImage : {
        width: chartWidth * 0.2,
        height: chartWidth * 0.2,
        borderRadius: chartWidth * 0.2 * 0.5,
        backgroundColor: "black",
        marginRight: 20,
    },
})