import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CustomText from '../components/CustomText';

const Goals = () => (
	<View style={styles.container}>
		<CustomText>Goals</CustomText>
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


export default Goals;