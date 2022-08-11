import {
	StyleSheet,
	Text,
	View,
	Pressable,
	Modal,
	ScrollView,
} from 'react-native';
import { useState } from 'react';
import Action from '../Action';

import LeaderboardTab from './LeaderboardTab';

import { Feather } from '@expo/vector-icons';

import { useSelector } from 'react-redux';

const LeaderboardModal = ({ modalVisible, onClose }) => {
    const {coins} = useSelector((state)=> state.globalReducer);

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				onClose();
			}}
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Pressable
						onPress={() => onClose()}
						style={styles.xButtonContainer}
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
						<View>
							<Feather
								name="x"
								size={20}
								color="white"
								style={styles.xButton}
							/>
						</View>
					</Pressable>
					<Text style={styles.modalText}>Leaderboard</Text>
					<View style={styles.playerContainer}>
						<LeaderboardTab
							i={1}
							color="#198793"
							text="Andrew"
							xp="88"
							crown
						/>
						<LeaderboardTab
							i={2}
							color="#BD4A41"
							text="Cameron"
							xp="53"
						/>
						<LeaderboardTab
							i={3}
							color="#9F1DB2"
							text="Camryn"
							xp="43"
						/>
						<LeaderboardTab
							i={4}
							color="#3CB33D"
							text="Austin"
							xp="39"
						/>
						<LeaderboardTab
							i={5}
							color="#BF7F1D"
							text="Anna"
							xp="35"
						/>
						<LeaderboardTab
							i={7}
							color="#1290DC"
							text="You"
							xp={coins}
							special
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
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
	modalView: {
		margin: 20,
		backgroundColor: '#324A60',
		borderRadius: 16,
		paddingVertical: 24,
		paddingHorizontal: 24,
		width: 355,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: '#F194FF',
	},
	buttonClose: {
		backgroundColor: '#2196F3',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		color: 'white',
		fontSize: 26,
		fontWeight: '500',
		textAlign: 'left',
		marginBottom: 24,
	},
	xButtonContainer: {
		position: 'absolute',
		padding: 8,
		top: 24,
		right: 16,
		zIndex: 100,
	},
});

export default LeaderboardModal;
