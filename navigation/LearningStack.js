import { createStackNavigator } from "@react-navigation/stack";

import Learn from "../screens/Learn";
import Course from "../screens/Course";
import Social from "../screens/Social";
import DailySpin from "../screens/DailySpin";
import Leaderboard from "../screens/Leaderboard";

const Stack = createStackNavigator();

const LearningStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Learning Home" component={Learn} />
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="Social" component={Social} />
        <Stack.Screen name="Daily Spin" component={DailySpin} />
        <Stack.Screen name="Leaderboard" component={Leaderboard} />
    </Stack.Navigator>
);

export default LearningStack;
