import { Text, View, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
//import { Icon } from 'react-native-vector-icons/Icon';
import { Feather } from '@expo/vector-icons';  


const QuizHeader = ({score, numQuestions}) => (
	<View style={styles.container}>
			<View style={styles.progressBar}>
				<View style={[styles.progressBarFull, {width: score / numQuestions *100 + "%"}]}>
				</View>
			</View>
	</View>
);


const styles = StyleSheet.create({
	container: {
		marginTop:8,
		marginBottom:16,
		width: '100%',
	},
	
	progressBar: {
		backgroundColor: '#324A60',
		borderRadius: 100,
		width: '100%',
		marginTop:12,
		height: 20,
		alignSelf: 'center',
	},
	progressBarFull: {
		position: "absolute",
		height: '100%',
		borderRadius: 240,
		backgroundColor: '#69ABE6',
	},
});

export default QuizHeader;

