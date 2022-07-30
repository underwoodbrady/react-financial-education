import { createStackNavigator } from "@react-navigation/stack";

import Introduction from "../screens/loading/Introduction";
import SignIn from "../screens/loading/SignIn";
import RootTab from "./RootTab";

const Stack = createStackNavigator();

const AUTHENTICATED = false;

const ProfileStack = () => (
    <Stack.Navigator screenOptions={{
        headerShown:false,
        headerStyle: {backgroundColor:"#0A1E2D"},
    }}>
        <Stack.Screen name="AppIntroduction" component={Introduction}/>
         <Stack.Screen name="AppSignIn" component={SignIn}/>
        <Stack.Screen name="App" component={RootTab}/>
    </Stack.Navigator>
);

export default ProfileStack;
