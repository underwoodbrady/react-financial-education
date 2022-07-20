import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CustomText from '../components/CustomText';

const Plan = () => (
	<View style={styles.container}>
		<CustomText>Plan</CustomText>
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


export default Plan;