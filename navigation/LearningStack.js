import { createStackNavigator } from "@react-navigation/stack";

import { Text } from "react-native";

import Learn from "../screens/learn/Learn";
import Course from "../screens/learn/Course";
import Social from "../screens/profile/Social";
import DailySpin from "../screens/play/DailySpin";
import Leaderboard from "../screens/learn/Leaderboard";
import IntroQuiz from "../screens/learn/IntroQuiz";
import SavingsLessons from "../screens/learn/SavingsLessons";
import Article from "../screens/learn/Article";
import Flashcards from "../screens/learn/Flashcards";
import SavingsQuizOne from "../screens/learn/SavingsQuiz1";
import SavingsMatchingOne from "../screens/learn/SavingsMatching1";
import FiftyThirtyTwentyBudgeting from "../screens/learn/50-30-20-Budget";

import { AntDesign } from '@expo/vector-icons'; 


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
        <Stack.Screen name="Savings Lessons" component={SavingsLessons}/>
        <Stack.Screen name="Article" component={Article}/>
        <Stack.Screen name="Savings Quiz One" component={SavingsQuizOne}/>
        <Stack.Screen name="Savings Matching One" component={SavingsMatchingOne}/>
        <Stack.Screen name="50-30-20 Budget" component={FiftyThirtyTwentyBudgeting}/>
        <Stack.Screen name="Flashcards" component={Flashcards} options={{
            headerRight: () => <Text style={{color:"white",fontSize:20,fontWeight:"500",marginRight:32}}>1/25</Text>
        }}/>
    </Stack.Navigator>
);

export default LearningStack;
