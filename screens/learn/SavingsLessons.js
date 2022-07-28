import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import CustomText from '../../components/CustomText';
import SavingsData from '../../Data/SavingsNavData';
import { useNavigation } from "@react-navigation/native";
import QuizButton from '../../components/learn/QuizButton';
import Quiz from './IntroQuiz';
import { FontAwesome } from '@expo/vector-icons';

const SavingsLessons = () => {
	const [currLesson, setCurrLesson] = useState(0);
	const [forwardActive, changeForwardActive] = useState(true);
	const [backwardActive, changeBackwardActive] = useState(false);

	const Next = () => {
		//updates currLesson, TODO: don't let it go forward if currLesson + 1 == SavingsData.length
		setCurrLesson(currLesson + 1);
		if (currLesson + 2 == SavingsData.length) {
			changeForwardActive(false);
		}
		changeBackwardActive(true);
	}

	const Back = () => {
		//updates currLesson, TODO: don't let it go backward if currLesson == 0
		setCurrLesson(currLesson - 1);
		if (currLesson == 1) {
			changeBackwardActive(false);
		}
		changeForwardActive(true);
	}

	const forwardButton = () => {
		return (
		<Pressable style = {styles.buttons} onPress={()=>Next()}>
			<FontAwesome name="arrow-circle-right" size={35} color="white" />
		</Pressable>
		)
	}

	const forwardInactive = () => {
		return (
		<Pressable style = {styles.buttons}>
			<FontAwesome name="arrow-circle-right" size={35} color="grey" />
		</Pressable>
		)
	}

	const backwardInactive = () => {
		return (
		<Pressable style = {styles.buttons}>
			<FontAwesome name="arrow-circle-left" size={35} color="grey" />
		</Pressable>
		)
	}

	const backwardButton = () => {
		return (
		<Pressable style = {styles.buttons} onPress={()=>Back()}>
			<FontAwesome name="arrow-circle-left" size={35} color="white" />
		</Pressable>
		)
	}



    //we will provide navigation to the quiz, article, game and tools for each lesson
	return (
			<>
			<View>
				{/*conditonal for each icon button*/}
				{forwardActive ? (forwardButton())
				: (forwardInactive())}

				{backwardActive ? (backwardButton())
				: (backwardInactive())}
			</View>
			<View style={styles.container}>
				{/*back button, next button*/}
				<Text style = {styles.lessonHeader}>Savings Lesson {currLesson + 1} </Text>
				{SavingsData[currLesson].ButtonLinks.map(
					(ButtonLinks) => (
								<View key={ButtonLinks.title}>
									<QuizButton
										text={ButtonLinks.title}
										
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
		marginBottom: 24,
	},
	buttons: {
    	borderWidth: 1,
		borderColor: '#324A60',
		borderColor: 'white',
		alignSelf: "center",
		marginTop: 5,
		marginRight: 5,
	},
});


export default SavingsLessons;