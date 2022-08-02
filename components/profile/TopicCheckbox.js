import { useState } from 'react';
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TopicCheckbox = ({ icon, label }) => {
	const [isChecked, setIsChecked] = useState(false);
	return (
		<Pressable
			onPress={() => setIsChecked(!isChecked)}
			style={[
				styles.container,
				isChecked && { backgroundColor: '#122533' },
			]}
		>
			<View style={styles.leftContainer}>
				<View style={styles.leftImage} >
					<FontAwesome5
						name={icon || 'graduation-cap'}
						size={24}
						color="white"
					/>
				</View>
				<Text style={styles.labelText}>{label}</Text>
			</View>
			<View style={styles.checkbox}>
				{isChecked && <Entypo name="check" size={16} color="white" />}
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		borderRadius: 8,
		paddingVertical: 16,
        paddingHorizontal:8,
		width: "100%",
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	leftContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
    leftImage:{
        width:32,
    },
	labelText: {
		color: '#D4DFEA',
		fontSize: 16,
		marginLeft: 16,
	},
	checkbox: {
		width: 24,
		height: 24,
		alignSelf: 'center',
		borderRadius: 6,
		borderColor: '#324A60',
		borderWidth: 3,
	},
});

export default TopicCheckbox;
