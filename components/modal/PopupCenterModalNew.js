import { Text, View, StyleSheet, Pressable, Modal, Image } from 'react-native';
import LottieView from 'lottie-react-native';

const PopupCenterModal = ({
	label,
	subLabel,
	buttonText,
	modalVisible,
	onRequestClose,
	confetti,
	image = require("../../assets/lydian.png"),
}) => (
	<View>
		<Modal
			animationType="fade"
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => onRequestClose}
		>
			<View style={styles.centeredView}>
				{confetti && <LottieView
					autoPlay
					loop={false}
					style={{
						width: 600,
						height: 600,
						backgroundColor: 'transparent',
                        position:'absolute',
					}}
					source={require('../../assets/confetti.json')}
				/>}
				<View style={styles.modalContainer}>
					<Image source={image} style={styles.image} />
					<Text style={styles.labelText}>{label}</Text>
					<Text style={styles.subLabelText}>{subLabel}</Text>
					<Pressable
						onPress={onRequestClose}
						style={styles.closeButton}
					>
						<Text style={styles.buttonText}>{buttonText}</Text>
					</Pressable>
					{/*<Image
					style={styles.iconImage}
					source={lydianLogo}
/>*/}
				</View>
			</View>
		</Modal>
	</View>
);

const styles = StyleSheet.create({
	container: {},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		zIndex: 5,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0,0,0,0.2)',
	},
	modalContainer: {
		backgroundColor: '#324A60',
		borderRadius: 15,
		padding: 24,
		width: 300,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		alignItems:"center",
	},
	image:{
		width:100,
		height:100,
		marginBottom:8,
	},
	labelText: {
		color: 'white',
		fontSize: 21,
		fontWeight: '700',
		marginBottom: 8,
		textAlign:"center",
	},
	subLabelText: {
		color: '#D4DFEA',
		fontSize: 17,
		fontWeight: '500',
		marginBottom: 12,
		textAlign:"center",
		marginHorizontal:24,
	},
	closeButton: {
		width: '100%',
		backgroundColor: '#69ABE6',
		borderRadius: 12,
		paddingVertical: 10,
		width:"90%",
		marginBottom:4,
	},
	buttonText: {
		color: 'white',
		textAlign: 'center',
		fontSize: 16,
		fontWeight: '500',
	},
});

export default PopupCenterModal;
