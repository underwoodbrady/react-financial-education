import { Text, View, Image, StyleSheet } from 'react-native';

const Goals = ({ i = 0, label, complete = false }) => (
	<View style={styles.container}>
		<View style={styles.textContainer}>
			<Text style={styles.numberText}>{i}.</Text>
			<Text style={styles.labelText}>{label}</Text>
		</View>
		<View style={styles.checkbox}></View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderColor: '#324A60',
		borderRadius: 16,
		padding: 16,
		width: 320,
		flexDirection: 'row',
        justifyContent: 'space-between',
	},
    textContainer:{
        flexDirection: 'row',
        overflow: 'hidden',
    },
	numberText: {
		color: 'white',
		fontWeight: '600',
		marginRight: 12,
	},
	labelText: {
		color: 'white',
	},
	checkbox: {
		width: 16,
		height: 16,
		alignSelf: 'center',
		borderRadius: 4,
		backgroundColor: '#324A60',
	},
});

export default Goals;
