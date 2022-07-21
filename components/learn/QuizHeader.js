import { Text, View, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
//import { Icon } from 'react-native-vector-icons/Icon';
import { Feather } from '@expo/vector-icons';  


const QuizHeader = ({score, numQuestions}) => (
	<View style={styles.container}>
			<View style={styles.progressBar}>
				<View style={[styles.progressBarFull, {width: score / numQuestions *100 + "%"}]}>
					<TouchableOpacity onPress={()=>{alert("you clicked me")}}>
						<Feather name="x-circle" size={26} color="black" />
        			</TouchableOpacity>
				</View>
			</View>
	</View>
);


const styles = StyleSheet.create({
	container: {
		padding: 24,
		paddingTop: 48,
		width: '100%',
	},
	
	progressBar: {
		backgroundColor: 'green',
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
		backgroundColor: 'orange',
	},
});

export default QuizHeader;

