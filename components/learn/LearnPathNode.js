import { Text, View, Image, StyleSheet, Pressable } from 'react-native';

const LearnPathNode = ({text, image = require('../../assets/banks.png'), color, disabled=false, onPress}) => (
	<View style={styles.container}>
		<Pressable style={styles.outline} onPress={onPress}>
			<View style={[styles.circle, disabled && {backgroundColor:"#324A60"}]}>
				<Image
					style={[styles.circleImage, disabled && {tintColor: '#324A60'}]}
					source={image}
				/>
				{disabled && 	<Image
					style={[styles.circleImage, {position:'absolute', opacity:0.25, top:15}]}
					source={image}
				/>}
			</View>
			<View style={styles.outlineFilled}></View>
		</Pressable>
		<Text style={[styles.labelText, disabled && {color: "#324A60"}]}>{text}</Text>
	</View>
);

const styles = StyleSheet.create({
	outline: {
		width: 130,
		height: 130,
		borderRadius: 100,
		borderWidth: 10,
		borderColor: '#324A60',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	circle: {
		width: 95,
		height: 95,
		backgroundColor: '#69ABE6',
		borderRadius: 100,
        justifyContent: 'center',
		alignItems: 'center',
	},
    circleImage: {
        height:55,
        width:55,
        top:-5,
    },
	labelText: {
		color: 'white',
		textAlign: 'center',
		marginTop: 12,
		fontSize: 16,
		fontWeight: '500',
	},
});

export default LearnPathNode;
