import { Text, View, Image, StyleSheet } from 'react-native';

const LearnPathHeader = () => (
	<View style={styles.container}>
		<View style={styles.headerImageContainer}>
			<Image
				style={styles.headerImage}
				source={require('../../assets/growth-investment.png')}
			/>
		</View>
		<View style={styles.header}>
			<Text style={styles.headerText}>Unit 1</Text>
		</View>
		<View style={styles.footer}>
			<View style={styles.progressBar}>
				<View style={styles.progressBarFull}></View>
				<Image
					style={styles.progressBarImage}
					source={require('../../assets/coin.png')}
				/>
			</View>
			<View>
				<Text style={styles.footerText}>4/10</Text>
			</View>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderColor: '#324A60',
		borderRadius: 16,
		padding: 24,
		paddingTop: 48,
		width: 220,
	},
	headerImageContainer: {
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerImage: {
		position: 'absolute',
		height: 115,
		top: -75,
	},
	header: {},
	headerText: {
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 16,
	},
	progressBar: {
		flex: 1,
		height: 20,
		backgroundColor: '#31495E',
		borderRadius: 100,
	},
	progressBarFull: {
		width: '40%',
		height: '100%',
		borderRadius: 100,
		backgroundColor: '#FFE563',
	},
    progressBarImage:{
        position:'absolute',
        top:-2,
        width:25,
        height:25,
    },
	footer: {
		flexDirection: 'row',
	},
	footerText: {
		color: '#B6C5D4',
		textAlign: 'center',
		marginLeft: 12,
        fontSize:15,
	},
});

export default LearnPathHeader;
