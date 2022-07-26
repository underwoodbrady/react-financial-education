import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';

//Add Icons
const mockBudgetData = [
	{
		text: 'Spent less than $200 on groceries',
		currentValue: 8,
		goalValue: 10,
		complete: false,
		icon: 'shopping-basket',
		color: '#FFB0C2',
	},
	{
		text: 'Add $500 to savings account',
		currentValue: 205,
		goalValue: 500,
		complete: false,
		icon: 'piggy-bank',
		color: '#CCE6E9',
	},
	{
		text: 'Do something else just for fun',
		currentValue: 999,
		goalValue: 999,
		complete: true,
		icon: 'beer',
		color: '#FCD3B7',
	},
	{
		text: 'Give to charity',
		currentValue: 10,
		goalValue: 10,
		complete: false,
		icon: 'hand-holding-heart',
		color: '#EACAF7',
	},
	{
		text: 'Spent $20 less on food',
		currentValue: 10,
		goalValue: 100,
		complete: false,
		icon: 'hamburger',
		color: '#CBD2F9',
	},
	{
		text: 'Go on vacation to greece',
		currentValue: 999,
		goalValue: 999,
		complete: true,
		icon: 'plane-departure',
		color: '#DDDDDD',
	},
	{
		text: 'Spent $50 more on health foods',
		currentValue: 205,
		goalValue: 500,
		complete: false,
		icon: 'shopping-basket',
		color: '#FFB0C2',
	},
];

import BudgetContainer from '../../components/tools/BudgetContainer';

const Budgets = () => (
	<View style={styles.container}>
		<BudgetContainer budgetsData={mockBudgetData} />
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop:36,
	},
	headerText: {
		marginBottom: 28,
		marginTop:20,
	},
});

export default Budgets;
