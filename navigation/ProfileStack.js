import { createStackNavigator } from "@react-navigation/stack";

import Profile from "../screens/profile/Profile";
import ProfileNew from "../screens/profile/ProfileNew";
import Preferences from "../screens/profile/Preferences";

const Stack = createStackNavigator();

const ProfileStack = () => (
    <Stack.Navigator screenOptions={{
        headerShown:true,
        headerStyle: {backgroundColor:"#0A1E2D"},
    }}>
        <Stack.Screen name="ProfileScreen" component={ProfileNew} options={{headerShown:false}} />
        <Stack.Screen name="Preferences" component={Preferences} options={{headerShown:false}} />
    </Stack.Navigator>
);

export default ProfileStack;
