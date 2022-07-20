import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CustomText from '../components/CustomText';



//Add Icons
const mockBudgetData = [
	{ text: 'Spent less than $200 on groceries', currentValue: 8, goalValue: 10, complete: false, icon:"shopping-basket", color:"#FFB0C2"},
	{ text: 'Add $500 to savings account', currentValue: 205, goalValue: 500, complete: false, icon:"piggy-bank", color:"#CCE6E9" },
	{ text: 'Do something else just for fun', currentValue: 999, goalValue: 999, complete: true, icon:"beer", color:"#FCD3B7" },
];

import BudgetContainer from '../components/tools/BudgetContainer';

const Budgets = () => (
	<View style={styles.container}>
		<View style={styles.headerText}><CustomText>Budgets</CustomText></View>
		<StatusBar style="auto" />
		<BudgetContainer budgetsData={mockBudgetData}/>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerText:{
		marginBottom:20,
	}
});


export default Budgets;