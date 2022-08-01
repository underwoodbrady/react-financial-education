import { createStackNavigator } from "@react-navigation/stack";

import Play from "../screens/play/Play";
import MatchingGame from "../screens/play/MatchingGame";
import DailyTrivia from "../screens/play/DailyTrivia";

const Stack = createStackNavigator();

const PlayStack = () => (
    <Stack.Navigator screenOptions={{
        headerStyle: {backgroundColor:"#0A1E2D"},
    }}>
        <Stack.Screen name="Learning Home" component={Play} options={{
            headerShown: false,
        }}/>
        <Stack.Screen name="Matching Game" component={MatchingGame} options={{
            headerShown: false,
        }}/>
        <Stack.Screen name="Daily Trivia" component={DailyTrivia} />
    </Stack.Navigator>
);

export default PlayStack;