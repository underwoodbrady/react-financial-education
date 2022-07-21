import { StyleSheet, View,Text } from 'react-native';
import CustomText from '../components/CustomText';

const Play = () => (
	<View style={styles.container}>
		<Text style={styles.headerText}>Games</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginTop:24,
	},
	headerText:{
		fontSize: 22,
		color:"white"
	},
});


export default Play;