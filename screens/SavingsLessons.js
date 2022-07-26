import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';
import CustomText from '../components/CustomText';
import SavingsData from '../Data/SavingsNavData';

const SavingsLessons = () => {
	const [currLesson, setCurrLesson] = useState(0);

	const Next = () => {
		//updates currLesson, TODO: don't let it go forward if currLesson == 0 or currLesson + 1 == SavingsData.length
		setCurrLesson(currLesson + 1)
	}



    //we will provide navigation to the quiz, article, game and tools for each lesson
	return (
		<View>
			{SavingsData[currLesson].map(
							(SavingsData[currLesson].ButtonLinks) => (
								<View style={styles.questionButton}>
									<QuizButton
										text={answerOptions.answerText}
										onPress={() =>
											//we would call something to open currLesson.link
											
										}
									/>
								</View>
							)
						)}
					</View>
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