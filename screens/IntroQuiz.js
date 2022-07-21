import React, { useState } from 'react';
import questions from '../Data/IntroQuizData';
import { Button, Text, View, StyleSheet } from 'react-native';
import CustomText from '../components/CustomText';
import Svg, { Rect, Circle } from 'react-native-svg';
import QuizHeader from "../components/learn/QuizHeader";
import { AntDesign } from '@expo/vector-icons'; 



const Quiz = () => {

const [currentQuestion, setCurrentQuestion] = useState(0)
const [showScore, setShowScore] = useState(false)
const [score, setScore] = useState(0)
const numQuestions = questions.length
const [numIncorrect,setIncorrect] = useState(0)
//below is where we can add animations for correct/incorrect answers etc
const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
      questions[currentQuestion].questionAnsweredRight = 1;
    } else {
      setIncorrect(numIncorrect + 1);
    }

    const nextQuetions = currentQuestion + 1;
    
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }
  //do open or closed hearts
  const heartsIncorrect  = [
    <View style={{flexDirection: 'row'}}>
      <AntDesign name="heart" size={24} color="red" />
      <AntDesign name="heart" size={24} color="red" />
      <AntDesign name="heart" size={24} color="red" />
    </View>,  
    <View style={{flexDirection: 'row'}}>
      <AntDesign name="heart" size={24} color="red" />
      <AntDesign name="heart" size={24} color="red" />
      <AntDesign name="hearto" size={24} color="red" />
    </View>,  
    <View style={{flexDirection: 'row'}}>
      <AntDesign name="heart" size={24} color="red" />
      <AntDesign name="hearto" size={24} color="red" />
      <AntDesign name="hearto" size={24} color="red" />
    </View> ]

  return (

    
    <View style={styles.container}>
    {showScore ?
        <Text>You scored {score} out of {questions.length}</Text>
        :
        (
        <>
            <View>
            <View><QuizHeader score={score} numQuestions = {numQuestions}/></View>
              {heartsIncorrect[numIncorrect]}
              <CustomText>{questions[currentQuestion].questionText}</CustomText>
            </View>
            <View className='answer-section'>
                <Text>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => ( 
                    <Button title={answerOptions.answerText} onPress={() => handleAnswerButtonClick(answerOptions.isCorrect)} key={answerOptions.answerText}></Button>
                  ))
                }
                </Text>
              </View>
        </>
        )
    }
    </View>
  ); 
            
}

const styles = StyleSheet.create({
	container: {
    backgroundColor: 'blue',
    padding: 32,
	},
});

export default Quiz;