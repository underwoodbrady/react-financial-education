import { Text, View, Image, StyleSheet } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

const Budget = ({ i = 0, label, icon, color = "white", complete = false, currentValue = 1, goalValue = 1}) => (
	<View style={[styles.container, currentValue>=goalValue && {backgroundColor: "#122533"}]}>
		<View style={styles.textContainer}>
			<FontAwesome5
				style={styles.icon}
				name={icon}
				size={18}
				color={color}
			/>
			<Text style={styles.labelText}>{label}</Text>
            {currentValue>=goalValue ? <FontAwesome name="check-circle" size={16} color="white" />  : <Text style={styles.percentText}>{currentValue/goalValue*100}%</Text> }
		</View>
		<View style={styles.budgetContainer}>
            <View style={[styles.budgetFull, {backgroundColor:color, width: currentValue/goalValue*100 + "%"}]}></View>
        </View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderColor: '#324A60',
		borderRadius: 16,
		padding: 16,
		width: 360,
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
    percentText: {
        color: 'white',
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
        borderRadius: 240,
    },
});

export default Budget;
