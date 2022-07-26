import { createStackNavigator } from "@react-navigation/stack";

import Play from "../screens/play/Play";
import MatchingGame from "../screens/play/MatchingGame";

const Stack = createStackNavigator();

const PlayStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Learning Home" component={Play} options={{
            headerShown: false,
        }}/>
        <Stack.Screen name="Matching Game" component={MatchingGame} options={{
            headerShown: false,
        }}/>
    </Stack.Navigator>
);

export default PlayStack;