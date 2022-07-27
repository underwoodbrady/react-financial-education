import { Text, View, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Information = ({ label, sublabel, icon = 'envelope-open-text' }) => (
	<View style={styles.container}>
		<FontAwesome5 name={icon} size={24} color="white" />
		<View style={styles.text}>
			<Text style={styles.label}>{label}</Text>
			<Text style={styles.subLabel}>{sublabel}</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
        flexDirection:"row",
        alignItems:"center",
        width: 320,
    },
    text:{
        marginLeft:16,
    },
	label: {
		color: 'white',
	},
	subLabel: {
		color: 'white',
	},
});

export default Information;
