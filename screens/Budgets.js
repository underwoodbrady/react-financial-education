import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CustomText from '../components/CustomText';

const Budgets = () => (
	<View style={styles.container}>
		<CustomText>Budgets</CustomText>
		<StatusBar style="auto" />
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});


export default Budgets;