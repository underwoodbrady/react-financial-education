import { Text, View, Image, StyleSheet } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

const Budget = ({ i = 0, label, icon, color = "white", complete = false }) => (
	<View style={styles.container}>
		<View style={styles.textContainer}>
			<FontAwesome5
				style={styles.icon}
				name={icon}
				size={18}
				color={color}
			/>
			<Text style={styles.labelText}>{label}</Text>
		</View>
		<View style={styles.budgetContainer}>
            <View style={[styles.budgetFull, {backgroundColor:color}]}></View>
        </View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderColor: '#324A60',
		borderRadius: 16,
		padding: 16,
		width: 330,
		justifyContent: 'space-between',
	},
	textContainer: {
		flexDirection: 'row',
		overflow: 'hidden',
	},
	icon: {
		marginRight: 12,
	},
	labelText: {
		color: 'white',
        textAlign: "left",
        flex:1,
        fontWeight: "500",
	},
	budgetContainer: {
		width: "100%",
        marginTop:12,
		height: 8,
		alignSelf: 'center',
		borderRadius: 24,
		backgroundColor: '#324A60',
	},
    budgetFull:{
        height:"100%",
        width:"40%",
        borderRadius: 240,
    },
});

export default Budget;
