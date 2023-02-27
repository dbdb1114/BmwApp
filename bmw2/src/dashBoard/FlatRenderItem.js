import { Dimensions,StyleSheet,View, Text} from "react-native"
import { boardData } from "../Data/boardData"

// 들어오는 모든 데이터를 인덱싱 해야함. 게시글 모두를 가져올 수 없으므로, 한 페이지당 스무개로 제한을 둘 것임. 
// 현재 생각으로는 밑으로 스크롤 하면서 게시글을 끌어오는 형태를 하면어떨까 생각함. 
// ==> 근데 flat list로 구현하자면 괜찮을지 좀 걱정.
// ==> flat list로 구현할 경우 미리 데이터를 어느정도 가져다놓는 것도 생각해볼 필요가 있을듯. 

    const chartWidth = Dimensions.get('screen').width

export default ({item,index}) => {
    return (
        <View style={styles.contentsContainer}>
            <View style={{flexDirection:"row",padding: 10,alignSelf:"flex-start"}}>
                <Text style={{fontSize:15, fontWeight:"bold"}}>{boardData[item].userName}</Text>
                <Text style={{paddingLeft:15}} >1일전</Text>
            </View>
            <Text style={{flex:6, padding: 10}} >{boardData[item].title}</Text>
        </View> 
    );
}

const styles = StyleSheet.create ({
    contentsContainer : {
        alignSelf:"center",
        width: chartWidth*0.9,
        height:100,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        borderColor:"rgba(26, 188, 156, 0.41)" ,
        borderWidth:1, 
        borderRadius:25,
        marginBottom:15}
})