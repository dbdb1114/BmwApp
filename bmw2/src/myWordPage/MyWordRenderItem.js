import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAsync } from "react-async"

export default ({item,index}) => { 
    console.log("item : " + item)
    console.log(index)

    const myWordText = item.map((v, idx)=>{
        console.log("idx"+idx)
        return(
            <View key={v+idx} style={styles.renderItemContainer}>
                <Text>{v[0]}</Text>
                <Text>{v[1]}</Text>
            </View>
        )
    })

    return (
        <>
            {myWordText}
        </>
    );
}



const styles = StyleSheet.create({
    renderItemContainer: {
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        marginBottom:20,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "rgb(26, 188, 156)",
        backgroundColor: "rgba(224, 224, 224, 0.27)",
        width: 300,
        height: 150,
    },
});
