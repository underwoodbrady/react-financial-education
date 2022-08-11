import { StyleSheet, Pressable } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const GoBackShowModal = () => {
	const nav = useNavigation();
	return (
		<Pressable
			style={styles.container}
			onPress={() => nav.navigate('Savings Lessons', { showModal: true })}
			hitSlop={{
				bottom: 25,
				left: 25,
				right: 25,
				top: 25,
			}}
			pressRetentionOffset={{
				bottom: 50,
				left: 50,
				right: 50,
				top: 50,
			}}
		>
			<FontAwesome5 name="arrow-left" size={20} color="white" />
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginLeft: 16,
		marginRight: 16,
		zIndex: 100,
	},
});

export default GoBackShowModal;
