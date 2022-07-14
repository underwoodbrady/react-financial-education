import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CustomText from '../components/CustomText';

const Course = () => (
	<View style={styles.container}>
		<CustomText>Course</CustomText>
		<StatusBar style="auto" />
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'cornsilk',
		alignItems: 'center',
		justifyContent: 'center',
	},
});


export default Course;