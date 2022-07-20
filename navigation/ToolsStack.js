import { createStackNavigator } from "@react-navigation/stack";

import Tools from "../screens/Tools";

const Stack = createStackNavigator();

const ToolsStack = () => (
    <Stack.Navigator screenOptions={{
        headerShown:true,
        headerStyle: {backgroundColor:"#0A1E2D"},
    }}>
        <Stack.Screen name="Overview" component={Tools} options={{headerShown:false}}/>
    </Stack.Navigator>
);

export default ToolsStack;
