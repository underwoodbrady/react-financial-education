import { createStackNavigator } from "@react-navigation/stack";

import Learn from "../screens/Learn";
import Course from "../screens/Course";
import Social from "../screens/Social";
import DailySpin from "../screens/DailySpin";
import Leaderboard from "../screens/Leaderboard";
import IntroQuiz from "../screens/IntroQuiz";

const Stack = createStackNavigator();

const LearningStack = () => (
    <Stack.Navigator screenOptions={{
        headerShown:true,
    }}>
        <Stack.Screen name="Learning Home" component={Learn} options={{
            headerShown: false,
        }}/>
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="Social" component={Social} />
        <Stack.Screen name="Daily Spin" component={DailySpin} />
        <Stack.Screen name="Leaderboard" component={Leaderboard} />
        <Stack.Screen name="Intro Quiz" component={IntroQuiz} />
    </Stack.Navigator>
);

export default LearningStack;
