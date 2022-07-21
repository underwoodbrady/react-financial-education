import { createStackNavigator } from "@react-navigation/stack";

import Tools from "../screens/Tools";
import Invest from "../screens/Invest";
import PlanningTab from "./PlanningTab";

const Stack = createStackNavigator();

const ToolsStack = () => (
    <Stack.Navigator screenOptions={{
        headerShown:true,
        headerStyle: {backgroundColor:"#0A1E2D"},
    }}>
        <Stack.Screen name="Overview" component={Tools} options={{headerShown:false}}/>
        <Stack.Screen name="Invest" component={Invest}/>
        <Stack.Screen name="Planning" component={PlanningTab} options={{headerShown:false}}/>
    </Stack.Navigator>
);

export default ToolsStack;
