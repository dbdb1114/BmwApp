import ManageMyWord from "./ManageMyWord";
import MyOptionPage from "./myOptionPage/MyOptionPage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='MyOptionPage'
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name='MyOptionPage' component={MyOptionPage} />
                {/* <Stack.Screen name="wordCardScreen" component={WordCardScreen} />
                <Stack.Screen name="WordListView" component={WordListView} /> */}
                <Stack.Screen name='ManageMyWord' component={ManageMyWord} />
                <Stack.Screen
                    name='ManageMyWrighting'
                    component={ManageMyWrighting}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
