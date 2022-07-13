import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomText from '../components/CustomText';

const Invest = () => (
	<View style={styles.invest}>
		<CustomText>Invest</CustomText>
		<StatusBar style="auto" />
	</View>
);

const styles = StyleSheet.create({
	invest: {
		flex: 1,
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Invest;
