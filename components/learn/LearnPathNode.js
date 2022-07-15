import { Text, View, Image, StyleSheet } from 'react-native';

const LearnPathNode = () => (
	<View style={styles.container}>
		<View style={styles.outline}>
			<View style={styles.circle}>
				<Image
					style={styles.circleImage}
					source={require('../../assets/banks.png')}
				/>
			</View>
			<View style={styles.outlineFilled}></View>
		</View>
		<Text style={styles.labelText}>Saving</Text>
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
