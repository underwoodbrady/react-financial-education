import { createStackNavigator } from "@react-navigation/stack";

import Play from "../screens/Play";

const Stack = createStackNavigator();

const PlayStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Learning Home" component={Play} options={{
            headerShown: false,
        }}/>
    </Stack.Navigator>
);

export default PlayStack;