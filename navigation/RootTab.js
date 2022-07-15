import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import img from "../assets/icon.png"
import { Entypo } from '@expo/vector-icons';

import PlanningTab from './PlanningTab';
import InvestmentStack from './InvestmentStack';
import LearningStack from './LearningStack';

import LearningHeader from '../components/header/LearningHeader';

const Tab = createBottomTabNavigator();

const RootTab = () => (
	<Tab.Navigator screenOptions={{
		tabBarStyle: {backgroundColor:"#0A1E2D", border:'none', outline:'none', borderTopWidth:0},
		headerStyle: {backgroundColor:"#0A1E2D"},
		headerRight: () => <LearningHeader/>,
		headerTintColor: 'white',
		tabBarShowLabel:false,
		tabBarInactiveTintColor:'#B6C5D4',
		tabBarActiveTintColor: '#69ABE6',
		headerShown: true,
	}}>
		<Tab.Screen name="Learn" component={LearningStack} options={{
			tabBarIcon: ({color}) => <Entypo name='book' size={26} color={color}/>,
		}}/>
		<Tab.Screen name="Plan" component={PlanningTab} options={{
			tabBarIcon: ({color}) => <Entypo name='list' size={26} color={color}/>,
		}}/>
		<Tab.Screen name="Invest" component={InvestmentStack} options={{
			tabBarIcon: ({color}) => <Entypo name='bar-graph' size={26} color={color}/>,
		}} />
	</Tab.Navigator>
);

export default RootTab;