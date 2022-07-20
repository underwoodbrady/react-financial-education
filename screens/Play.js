import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CustomText from '../components/CustomText';

const Play = () => (
	<View style={styles.container}>
		<CustomText>Play</CustomText>
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


export default Play;