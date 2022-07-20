import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import img from "../assets/icon.png"
import { Entypo, Ionicons } from '@expo/vector-icons';

import PlanningTab from './PlanningTab';
import PlayStack from './PlayStack';
import InvestmentStack from './InvestmentStack';
import LearningStack from './LearningStack';

import LearningHeader from '../components/header/LearningHeader';

const Tab = createBottomTabNavigator();

const RootTab = () => (
	<Tab.Navigator screenOptions={{
		tabBarStyle: {backgroundColor:"#0A1E2D", border:'none', outline:'none', borderTopWidth:0, height:55},
		headerStyle: {backgroundColor:"#0A1E2D"},
		headerRight: () => <LearningHeader/>,
		headerTintColor: 'white',
		tabBarShowLabel:false,
		tabBarInactiveTintColor:'#B6C5D4',
		tabBarActiveTintColor: '#69ABE6',
	}}>
		<Tab.Screen name="Learn" component={LearningStack} options={{
			tabBarIcon: ({color}) => <Entypo name='book' size={24} color={color}/>,
		}}/>
		<Tab.Screen name="Play" component={PlayStack} options={{
			tabBarIcon: ({color}) => <Entypo name='game-controller' size={24} color={color}/>,
		}}/>
		<Tab.Screen name="Tools" component={InvestmentStack} options={{
			tabBarIcon: ({color}) => <Entypo name='tools' size={24} color={color}/>,
		}} />
		<Tab.Screen name="Profile" component={InvestmentStack} options={{
			tabBarIcon: ({color}) => <Ionicons name="person" size={24} color={color} />,
		}} />
	</Tab.Navigator>
);

export default RootTab;