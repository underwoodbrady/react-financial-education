import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Text } from 'react-native';
import React, { useState } from 'react';
import CustomText from '../../components/CustomText';
import SavingsData from '../../Data/SavingsNavData';
import { useNavigation } from "@react-navigation/native";
import QuizButton from '../../components/learn/QuizButton';
import Quiz from './IntroQuiz';

const SavingsLessons = () => {
	const [currLesson, setCurrLesson] = useState(0);
	const [fowardActive, changeForward] = useState(true);
	const [backwardActive, changeBackwardActive] = useState(false);

	const Next = () => {
		//updates currLesson, TODO: don't let it go forward if currLesson + 1 == SavingsData.length
		setCurrLesson(currLesson + 1)
	}

	const Back = () => {
		//updates currLesson, TODO: don't let it go backward if currLesson == 0
		setCurrLesson(currLesson - 1)
	}



    //we will provide navigation to the quiz, article, game and tools for each lesson
	return (
			<>
			<View>
				{/*conditonal for each icon button*/}
				<QuizButton text="hello"></QuizButton>
				<QuizButton text="hi"></QuizButton>
			</View>
			<View style={styles.container}>
				{/*back button, next button*/}
				<Text style = {styles.lessonHeader}>Savings Lesson {currLesson + 1} </Text>
				{SavingsData[currLesson].ButtonLinks.map(
					(ButtonLinks) => (
								<View key={ButtonLinks.title}>
									<QuizButton
										text={ButtonLinks.title}
										onPress={() =>
											navigator(
											)
										}
									/>
								</View>
							)
						)}
			</View>
			</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	lessonHeader: {
		color: 'white',
		fontSize: 24,
		textAlign: 'center',
		marginTop: 8,
		marginBottom: 24,
	},
});


export default SavingsLessons;