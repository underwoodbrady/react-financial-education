import { createStackNavigator } from "@react-navigation/stack";

import Learn from "../screens/learn/Learn";
import Course from "../screens/learn/Course";
import Social from "../screens/profile/Social";
import DailySpin from "../screens/play/DailySpin";
import Leaderboard from "../screens/learn/Leaderboard";
import IntroQuiz from "../screens/learn/IntroQuiz";
import SavingsLessons from "../screens/learn/SavingsLessons";

const Stack = createStackNavigator();

const LearningStack = () => (
    <Stack.Navigator screenOptions={{
        headerShown:true,
        headerStyle: {backgroundColor:"#0A1E2D"},
    }}>
        <Stack.Screen name="Learning Home" component={Learn} options={{
            headerShown: false,
        }}/>
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="Social" component={Social} />
        <Stack.Screen name="Daily Spin" component={DailySpin} />
        <Stack.Screen name="Leaderboard" component={Leaderboard} />
        <Stack.Screen name="Intro Quiz" component={IntroQuiz} />
        <Stack.Screen name="Savings Lessons" component={SavingsLessons} />
    </Stack.Navigator>
);

export default LearningStack;
