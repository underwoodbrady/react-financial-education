import React, { useState } from 'react';
import questions from '../Data/IntroQuizData';
import { Button, Text, View, StyleSheet } from 'react-native';
import CustomText from '../components/CustomText';
import Svg, { Rect, Circle } from 'react-native-svg';
import QuizHeader from '../components/learn/QuizHeader';
import QuizButton from '../components/learn/QuizButton';
import { AntDesign } from '@expo/vector-icons';

const Quiz = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const numQuestions = questions.length;
	const [numIncorrect, setIncorrect] = useState(0);
	//below is where we can add animations for correct/incorrect answers etc
	const handleAnswerButtonClick = (isCorrect) => {
		if (isCorrect === true) {
			setScore(score + 1);
			questions[currentQuestion].questionAnsweredRight = 1;
		} else {
      //right here we can get mad about 3 incorrect maybe
			setIncorrect(numIncorrect + 1);
		}

		const nextQuetions = currentQuestion + 1;

		if (nextQuetions < questions.length) {
			setCurrentQuestion(nextQuetions);
		} else {
			setShowScore(true);
		}
	};
	//do open or closed hearts
	const heartsIncorrect = [
		<View style={{ flexDirection: 'row' }}>
			<AntDesign style={{marginLeft:4, marginRight:4}} name="heart" size={24} color="#F75959" />
			<AntDesign  style={{marginLeft:4, marginRight:4}} name="heart" size={24} color="#F75959" />
			<AntDesign  style={{marginLeft:4, marginRight:4}} name="heart" size={24} color="#F75959" />
		</View>,
		<View style={{ flexDirection: 'row' }}>
			<AntDesign  style={{marginLeft:4, marginRight:4}} name="heart" size={24} color="#F75959" />
			<AntDesign  style={{marginLeft:4, marginRight:4}} name="heart" size={24} color="#F75959" />
			<AntDesign  style={{marginLeft:4, marginRight:4}} name="hearto" size={24} color="#F75959" />
		</View>,
		<View style={{ flexDirection: 'row' }}>
			<AntDesign  style={{marginLeft:4, marginRight:4}} name="heart" size={24} color="#F75959" />
			<AntDesign  style={{marginLeft:4, marginRight:4}} name="hearto" size={24} color="#F75959" />
			<AntDesign  style={{marginLeft:4, marginRight:4}} name="hearto" size={24} color="#F75959" />
		</View>,
    //{handleAnswerButtonClick('false')}
	];

	return (
		<View style={styles.container}>
			{showScore ? (
				<Text style={styles.scoreText}>
					You scored {score} out of {questions.length}
				</Text>
			) : (
				<>
					<View>
						<View style={styles.hearts}>
							{heartsIncorrect[numIncorrect]}
						</View>
						<View>
							{
								<QuizHeader
									score={score}
									numQuestions={numQuestions}
								/>
							}
						</View>
						<Text style={styles.questionText}>
							{questions[currentQuestion].questionText}
						</Text>
					</View>
					<View>
							{questions[currentQuestion].answerOptions.map(
								(answerOptions) => (
                  <View style={styles.questionButton}>
                    <QuizButton text={answerOptions.answerText} onPress={() =>
											handleAnswerButtonClick(
												answerOptions.isCorrect
											)}/>
                      </View>
								)
							)}
					</View>
				</>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 32,
    align: 'center',
	},
	hearts: {
		alignSelf: 'center',
		marginBottom: 10,
	},
	questionText: {
		color: 'white',
		fontSize: 24,
		textAlign: 'center',
    marginTop:8,
    marginBottom:24,
	},
  questionButton:{
    marginTop:8,
    marginBottom:8,
  },
	scoreText: {
		color: 'white',
	},
});

export default Quiz;
