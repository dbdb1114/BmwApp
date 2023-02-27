import { View,Text, FlatList} from 'react-native';
import { listHeader } from '../public/listHeader';
import { boardData } from "../Data/boardData";
import { styles } from "../public/styleSheet";
import FlatRenderItem from './FlatRenderItem';

export default () => {

    const boardList = Object.keys(boardData);
    return(
        <View style={{flexDirection:"row"}}>
        <FlatList
            data={boardList} //=> 내 DB에서 가져와야함
            keyExtractor={(_, index) => index}
            renderItem={FlatRenderItem}
            showsVerticalScrollIndicator={false}
            StickyHeaderComponent={false}
        />
        </View>
    );
}

