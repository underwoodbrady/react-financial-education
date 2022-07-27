import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native';

import Action from '../Action';

const RecentActions = () => (
	<View style={styles.container}>
		<Text style={styles.title}>Recent Actions</Text>
		<ScrollView style={styles.scroll}>
			<Action />
			<Action />
			<Action />
			<Action />
			<Action />
			<Action />
			<Action />
			<Action />
			<Action />
		</ScrollView>
	</View>
);

const styles = StyleSheet.create({
	container: {
		height: 400,
        width: 340,
	},
	scroll: {
		borderWidth: 2,
		borderColor: '#324A60',
		borderRadius: 16,
		padding: 12,
	},
	title: {
		color: 'white',
		fontSize: 21,
		textAlign: 'center',
		marginBottom: 20,
		fontWeight: '600',
	},
});

export default RecentActions;
