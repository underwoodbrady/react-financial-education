import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Invest from './screens/Invest';

const Learn = () => (
	<View style={styles.learn}>
		<CustomText>Learn</CustomText>
		<StatusBar style="auto" />
	</View>
);

const Plan = () => (
	<View style={styles.plan}>
		<CustomText>Plan</CustomText>
		<StatusBar style="auto" />
	</View>
);

const CustomText = ({ children }) => (
	<Text style={{ fontSize: 50 }}>{children}</Text>
);

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
	<Tab.Navigator>
		<Tab.Screen name="Learn" component={Learn} />
		<Tab.Screen name="Plan" component={Plan} />
		<Tab.Screen name="Invest" component={Invest} />
	</Tab.Navigator>
);

export default function App() {
	return (
		<NavigationContainer>
			<AppNavigator />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	learn: {
		flex: 1,
		backgroundColor: 'blue',
		alignItems: 'center',
		justifyContent: 'center',
	},
	plan: {
		flex: 1,
		backgroundColor: 'green',
		alignItems: 'center',
		justifyContent: 'center',
	},
	invest: {
		flex: 1,
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
