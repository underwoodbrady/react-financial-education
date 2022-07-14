import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PlanningTab from './PlanningTab';
import InvestmentStack from './InvestmentStack';
import LearningStack from './LearningStack';

const Tab = createBottomTabNavigator();

const RootTab = () => (
	<Tab.Navigator>
		<Tab.Screen name="Learn" component={LearningStack} />
		<Tab.Screen name="Plan" component={PlanningTab} />
		<Tab.Screen name="Invest" component={InvestmentStack} />
	</Tab.Navigator>
);

export default RootTab;