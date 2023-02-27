import WordCardScreen from "./studyScreen/WordCardScreen";
import WordStudyPage from "./WordStudyPage";
import ListPage from "./listStudyScreen/ListPage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='WordStudyPage'
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name='WordStudyPage' component={WordStudyPage} />
                <Stack.Screen
                    name='wordCardScreen'
                    component={WordCardScreen}
                />
                <Stack.Screen name='WordListView' component={ListPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
