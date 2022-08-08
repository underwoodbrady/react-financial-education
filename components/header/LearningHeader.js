import { StyleSheet, Text, View, Button, Image } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import { useDispatch, useSelector } from 'react-redux';

const LearningHeader = () => {
	const {coins, streak} = useSelector((state)=> state.globalReducer);

	return (
		<View style={styles.container}>
			<View style={styles.subContainer}>
				<FontAwesome5 name="coins" size={20} color="#FFE563" />
				<Text style={styles.text}>{coins}</Text>
			</View>
			<View style={styles.subContainer}>
				<FontAwesome5 name="fire" size={20} color="orange" />
				<Text style={styles.text}>{streak}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginLeft: 12,
		marginRight: 12,
	},
	subContainer: {
		flexDirection: 'row',
		marginLeft: 12,
		marginRight: 12,
	},
	text: {
		fontSize: 18,
		color: '#fff',
		fontWeight: 'bold',
		marginLeft: 8,
	},
});

export default LearningHeader;
