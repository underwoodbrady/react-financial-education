import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome5 } from '@expo/vector-icons'; 


import Budgets from '../screens/Budgets';
import Goals from '../screens/Goals';

const Tab = createBottomTabNavigator();

const PlanningTab = () => (
	<Tab.Navigator screenOptions={{
		tabBarStyle: {backgroundColor:"transparent", borderTopWidth:0, width:"85%", alignSelf:"center", marginBottom:22},
		headerStyle: {backgroundColor:"#0A1E2D"},
		headerTintColor: 'white',
		headerShown:false,
		tabBarInactiveTintColor:'#B6C5D4',
		tabBarActiveTintColor: '#69ABE6',
	}}>
		<Tab.Screen name="Budgets" component={Budgets} options={{
			tabBarIcon: ({color}) => <FontAwesome5 name="money-check" size={18} color={color} />,
		}}/>
		<Tab.Screen name="Goals" component={Goals} options={{
			tabBarIcon: ({color}) => <FontAwesome5 name="clipboard-check" size={18} color={color} />,
		}}/>
	</Tab.Navigator>
);

export default PlanningTab;