import React, { useState } from 'react';
import questions from '../Data/IntroQuizData';
import { Button, Text, View, StyleSheet, Vibration } from 'react-native';
import CustomText from '../components/CustomText';
import Svg, { Rect, Circle } from 'react-native-svg';
import QuizHeader from '../components/learn/QuizHeader';
import QuizButton from '../components/learn/QuizButton';
import { AntDesign } from '@expo/vector-icons';
//shuffle here maybe

const Quiz = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const numQuestions = questions.length;
	const [numIncorrect, setIncorrect] = useState(0);
  const [incorrectOne,setIncorrectOne] = useState(0);
  const [incorrectTwo,setIncorrectTwo] = useState(0);
  const [visitedOne,setVisitedOne] = useState(0);
  const [visitedTwo,setVisitedTwo] = useState(0);
  

	//below is where we can add animations for correct/incorrect answers etc
	const handleAnswerButtonClick = (isCorrect) => {
		if (isCorrect === true) {
			setScore(score + 1);
		} else {
      //right here we can get mad about 3 incorrect maybe
      if (numIncorrect == 0) {
        setIncorrectOne(currentQuestion);
      } else if (numIncorrect == 1) {
        setIncorrectTwo(currentQuestion);
      } else if (numIncorrect == 2) {
        setShowScore(true);
      }
      setIncorrect(numIncorrect + 1);
		}

		//const nextQuestions = currentQuestion + 1;
    if (score != numQuestions) {
      if (currentQuestion + 1 < questions.length && visitedOne == 0 && visitedTwo == 0) {
        setCurrentQuestion(currentQuestion + 1);
      } else if (numIncorrect > 0 && visitedOne == 0) {
        setCurrentQuestion(incorrectOne);
        setVisitedOne(1);
      } else if (numIncorrect == 2 && visitedTwo == 0) {
        setCurrentQuestion(incorrectTwo);
        setVisitedTwo(1);
      } 
    } else {
        setShowScore(true);
      }

  }

  //restart function,
  //when icon is pushed, we must reset variables: score, currentQuestion
    /*
		if (nextQuestions < questions.length) {
			setCurrentQuestion(nextQuestions);
		} else {
			  setShowScore(true);
		}
	}; */

  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

  const failProtocol = () => {

  };

  const winProtocol = () => {

  };

  const restartQuiz = () => {

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
    //shuffle here
		<View style={styles.container}>
			{showScore ? (
				<Text style={styles.scoreText}>
					You scored {score} out of {questions.length}
          {numIncorrect} the inc: {incorrectOne}
          {/*games or resources are suggested here*/}
				</Text>
        //instead we call the win or lose protocol to display what we want
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
							{questions[currentQuestion].questionText} score {score} currentQuestion {currentQuestion} inc1 {incorrectOne} inc2 {incorrectTwo} numInc {numIncorrect}
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