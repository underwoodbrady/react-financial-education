import React, { useState } from 'react';
import questions from '../Data/IntroQuizData';
import { Button, Text, View } from 'react-native';
import CustomText from '../components/CustomText';


const Quiz = () => {
 

const [currentQuestion, setCurrentQuestion] = useState(0)
const [showScore, setShowScore] = useState(false)
const [score, setScore] = useState(0)
//below is where we can add animations for correct/incorrect answers etc
const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }

  return (

    <View>
    {showScore ?
        <Text>You scored {score} out of {questions.length}</Text>
        :
        (
        <>
            <View>
                <Text>Question {currentQuestion + 1} out of {questions.length} </Text>
                <CustomText>{questions[currentQuestion].questionText}</CustomText>
            </View>
            <View className='answer-section'>
                <Text>
                    {
                    <Button title={questions[currentQuestion].answerOptions[0].answerText} onPress={() => 
                        handleAnswerButtonClick(questions[currentQuestion].answerOptions[0].isCorrect)}></Button>
                    }
                    {
                    <Button title={questions[currentQuestion].answerOptions[1].answerText} onPress={() => 
                            handleAnswerButtonClick(questions[currentQuestion].answerOptions[1].isCorrect)}></Button>
                    }
                    {
                    <Button title={questions[currentQuestion].answerOptions[2].answerText} onPress={() => 
                        handleAnswerButtonClick(questions[currentQuestion].answerOptions[2].isCorrect)}></Button>
                    }
                    {
                    <Button title={questions[currentQuestion].answerOptions[3].answerText} onPress={() => 
                            handleAnswerButtonClick(questions[currentQuestion].answerOptions[3].isCorrect)}></Button>
                    }
                  
                </Text>
              </View>
        </>
        
        )
    }
    </View>
  ); 
            }

            //questions[currentQuestion].answerOptions[0]
                  //.map((answerOptions) => (
                   // <Button title={answerOptions.answerText} onPress={() => handleAnswerButtonClick(answerOptions.isCorrect)}></Button>
                  //))

export default Quiz;