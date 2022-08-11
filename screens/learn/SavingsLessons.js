import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import CustomText from '../../components/CustomText';
import SavingsData from '../../Data/SavingsNavData';
import { useNavigation } from '@react-navigation/native';
import QuizButton from '../../components/learn/QuizButton';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import LessonButton from '../../components/learn/LessonButton';

import PopupCenterModal from '../../components/modal/PopupCenterModalNew';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const SavingsLessons = ({ route }) => {
	const nav = useNavigation();
	const [currLesson, setCurrLesson] = useState(0);
	const [lessonsComplete, setLessonsComplete] = useState(0);
	const [forwardActive, changeForwardActive] = useState(true);
	const [backwardActive, changeBackwardActive] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);

	const { lessonCompletion } = useSelector((state) => state.globalReducer);

	useEffect(() => {
		if (route.params) {
			const { showModal } = route.params;
			if (showModal) {
				setModalVisible(true);
				console.log('show');
			}
		}
		console.log('d');
	}, [route]);

	const closeModal = () => setModalVisible(false);

	useEffect(() => {
		let complete = 0;
		lessonCompletion[currLesson].forEach((e) => {
			if (e) complete++;
		});
		setLessonsComplete(complete);
	}, [currLesson, lessonCompletion]);

	const Next = () => {
		//updates currLesson, TODO: don't let it go forward if currLesson + 1 == SavingsData.length
		setCurrLesson(currLesson + 1);
		if (currLesson + 2 == SavingsData.length) {
			changeForwardActive(false);
		}
		changeBackwardActive(true);
	};

	const Back = () => {
		//updates currLesson, TODO: don't let it go backward if currLesson == 0
		setCurrLesson(currLesson - 1);
		if (currLesson == 1) {
			changeBackwardActive(false);
		}
		changeForwardActive(true);
	};

	const forwardButton = () => {
		return (
			<Pressable style={styles.buttons} onPress={() => Next()}>
				<FontAwesome
					name="arrow-circle-right"
					size={35}
					color="white"
				/>
			</Pressable>
		);
	};

	const forwardInactive = () => {
		return (
			<Pressable style={styles.buttons}>
				<FontAwesome name="arrow-circle-right" size={35} color="grey" />
			</Pressable>
		);
	};

	const backwardInactive = () => {
		return (
			<Pressable style={styles.buttons}>
				<FontAwesome name="arrow-circle-left" size={35} color="grey" />
			</Pressable>
		);
	};

	const backwardButton = () => {
		return (
			<Pressable style={styles.buttons} onPress={() => Back()}>
				<FontAwesome name="arrow-circle-left" size={35} color="white" />
			</Pressable>
		);
	};

	//we will provide navigation to the quiz, article, game and tools for each lesson
	return (
		<>
			<View style={styles.container}>
				<PopupCenterModal
					label="Congrats!"
					subLabel="You've completed the lesson"
					buttonText="Continue"
					modalVisible={modalVisible}
					onRequestClose={closeModal}
				/>
				<View
					style={[
						styles.header,
						{
							backgroundColor:
								SavingsData[currLesson].questionColor,
						},
					]}
				>
					<Text style={styles.headerText}>
						{SavingsData[currLesson].questionText}
					</Text>
					<View style={styles.subHeaderContainer}>
						<View style={styles.progressBar}>
							<View
								style={[
									styles.progressBarFull,
									{
										width:
											(lessonsComplete /
												SavingsData[currLesson]
													.ButtonLinks.length) *
												100 +
											'%',
									},
								]}
							></View>
						</View>
						<Text style={styles.subHeaderText}>
							{lessonsComplete /
								SavingsData[currLesson].ButtonLinks.length <
							1 ? (
								`${lessonsComplete}/${SavingsData[currLesson].ButtonLinks.length}`
							) : (
								<FontAwesome5
									name="crown"
									size={22}
									color="#FFE563"
								/>
							)}
						</Text>
					</View>
				</View>
				{SavingsData[currLesson].ButtonLinks.map((ButtonLinks, i) => (
					<View key={ButtonLinks.title} style={styles.lessonButtons}>
						<LessonButton
							text={ButtonLinks.title}
							//open different page
							onPress={() =>
								nav.navigate(ButtonLinks.rootLink || 'Learn', {
									screen:
										ButtonLinks.screenLink ||
										'Savings Lessons',
									params: {
										data: ButtonLinks.data || '',
									},
								})
							}
							checked={lessonCompletion[currLesson][i]}
						/>
					</View>
				))}
			</View>
			<View style={styles.footer}>
				{backwardActive ? backwardButton() : backwardInactive()}

				{forwardActive ? forwardButton() : forwardInactive()}
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	header: {
		backgroundColor: '#1290DC',
		width: '100%',
		paddingLeft: 32,
		paddingVertical: 32,
		marginBottom: 32,
	},
	headerText: {
		color: 'white',
		fontSize: 24,
		textAlign: 'left',
		marginBottom: 12,
		fontWeight: '600',
	},
	subHeaderContainer: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		marginTop: 8,
	},
	subHeaderText: {
		color: 'white',
		fontSize: 17,
		marginHorizontal: 36,
		marginRight: 36,
		marginLeft: 20,
		fontWeight: '500',
	},
	progressBar: {
		height: 16,
		backgroundColor: '#31495E',
		borderRadius: 100,
		flex: 1,
	},
	progressBarFull: {
		width: '40%',
		height: '100%',
		borderRadius: 100,
		backgroundColor: '#FFE563',
	},
	lessonButtons: {
		marginVertical: 12,
	},
	buttons: {
		marginHorizontal: 12,
		marginBottom: 32,
	},
	footer: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
});

export default SavingsLessons;
