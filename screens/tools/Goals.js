import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CustomText from '../../components/CustomText';

const mockGoalsData = [
    { text: 'Spent less than $200 on groceries', complete: false},
	{ text: 'Add $500 to savings account', complete: false },
    { text: 'Do something else just for fun', complete: true },
];

import GoalsContainer from '../../components/tools/GoalsContainer';

const Goals = () => (
	<View style={styles.container}>
        <GoalsContainer goalsData={mockGoalsData}/>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginTop:36,
	},
    headerText:{
		marginBottom:20,
	},
});


export default Goals;