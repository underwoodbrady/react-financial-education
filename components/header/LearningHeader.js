import { StyleSheet, Text, View, Button, Image } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

const LearningHeader = () => (
	<View style={styles.container}>
		<View style={styles.subContainer}>
			<FontAwesome5
				name="coins"
				size={20}
				color="#FFE563"
			/>
			<Text style={styles.text}>32</Text>
		</View>
		<View style={styles.subContainer}>
			<FontAwesome5
				name="fire"
				size={20}
				color="orange"
			/>
			<Text style={styles.text}>4</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginLeft: 12,
		marginRight: 12,
	},
    subContainer:{
        flexDirection: 'row',
        marginLeft:12,
        marginRight:12,
    },
	text: {
		fontSize: 18,
		color: '#fff',
		fontWeight: 'bold',
		marginLeft: 8,
	},
});

export default LearningHeader;
