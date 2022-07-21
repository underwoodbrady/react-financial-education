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
		//borderWidth: 2,
		//borderColor: '#324A60',
		//borderRadius: 16,
		padding: 24,
		paddingTop: 48,
		width: '100%',
	},
	headerImageContainer: {
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerImage: {
		position: 'absolute',
		height: 115,
		top: -75,
	},
	header: {},
	headerText: {
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 16,
	},
	progressBar: {
		flex: 1,
		height: 20,
		backgroundColor: 'green',
		borderColor: 'black',
		borderRadius: 100,
		justifyContent: 'right',
		width: '100%',
		marginTop:12,
		height: 8,
		alignSelf: 'center',
	},
	progressBarFull: {
		height: '100%',
		borderRadius: 240,
		backgroundColor: 'orange',
	},
    progressBarImage:{
        position:'absolute',
        top:-2,
        width:25,
        height:25,
    },
	footer: {
		flexDirection: 'row',
	},
	footerText: {
		color: '#B6C5D4',
		textAlign: 'center',
		marginLeft: 12,
        fontSize:15,
	},
});

export default QuizHeader;

