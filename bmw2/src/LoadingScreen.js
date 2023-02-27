
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const chartWidth = Dimensions.get("screen").width
const chartHeight = Dimensions.get("screen").height

export default () => {
    return (
        <View style={styles.body}>
            <Text style={{padding:25, color:"rgb(26, 188, 156)", fontSize:25,backgroundColor:"white"}}></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body:{
        width: chartWidth,
        height: chartHeight,
        backgroundColor:"rgb(26, 188, 156)"
    }
})