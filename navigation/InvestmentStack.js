import { createStackNavigator } from "@react-navigation/stack";

import Invest from "../screens/Invest";
import Profile from "../screens/Profile";

const Stack = createStackNavigator();

const InvestmentStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Overview" component={Invest} />
        <Stack.Screen name="Inner Profile" component={Profile} />
    </Stack.Navigator>
);

export default InvestmentStack;
