import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Plan from '../screens/Plan';

const Tab = createBottomTabNavigator();

const PlanningTab = () => (
	<Tab.Navigator>
		<Tab.Screen name="Budgets" component={Plan} />
		<Tab.Screen name="Goals" component={Plan} />
	</Tab.Navigator>
);

export default PlanningTab;