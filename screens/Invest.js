import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Invest = () => (
	<View style={styles.invest}>
		<Text>Invest</Text>
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
