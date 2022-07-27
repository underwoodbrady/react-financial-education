import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';
import CustomText from '../../components/CustomText';
import SavingsData from '../../Data/SavingsNavData';
import { useNavigation } from "@react-navigation/native";

const SavingsLessons = () => {
	const [currLesson, setCurrLesson] = useState(0);

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
				{/* next and back buttons*/}
			</View>
			<View>
				{SavingsData[currLesson].ButtonLinks.map(
					(ButtonLinks) => (
						<View style={styles.questionButton}>
							<QuizButton
								text={answerOptions.answerText}
								onPress={() =>
								//we would call something to open currLesson.link
								nav.navigate("IntroQuiz")
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
});


export default SavingsLessons;