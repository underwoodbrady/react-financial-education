import React, { useState } from "react";
import MatchButton from "../components/learn/MatchButton";
import { Button, Text, View, StyleSheet, Vibration } from "react-native";
import matchingAnswers from "../Data/MatchingData";
import QuizButton from "../components/learn/QuizButton";
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import arrayShuffle from 'array-shuffle';

const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

shuffleArray(matchingAnswers);

const MatchingGame = () => {

    const [currMatchSelected, setCurrMatchSelected] = useState(0);
	const [secondClick, setSecondClick] = useState(0); //will be 0 if first click, 1 if second click
    const [currButton, setCurrButton] = useState(0);
    const [currNumberMatch, setCurrNumberMatch] = useState(0);
    const [gameOver, changeGameOver] = useState(false);
    const [score,setScore] = useState(0);


	//below is where we can add animations for correct/incorrect answers etc
    
	const buttonClicked = (theButton) => {

        //make sure number is not disabled
        
        if (!(currButton == theButton && secondClick == 1)) { //TODO: can't allow user to hit the same button twice

            if (secondClick === 0) {
                setCurrMatchSelected(theButton.number);
                setCurrButton(theButton);
                //make the button light up
            } else {
                if (theButton.number == currNumberMatch) {
                    //yay
                    //make the theButton and currButton turn green briefly
                    //disable theButton and currButton -- disable clickability and make transparent
                    if (score == (matchingAnswers.length / 2) - 1) {
                        changeGameOver(true);
                    }
                    theButton.disabled = 1;
                    currButton.disabled = 1;
                    setScore(score+1);
                } else {
                    //boo
                    //get both buttons to turn red briefly
                    //unlight up 
                    Vibration.vibrate();
                }
            } 
            
            setSecondClick((secondClick + 1) % 2);
            setCurrNumberMatch(theButton.number); 
    }
	};

    const gameOverProtocol = () => {
        //<Text style={styles.text}>Hi</Text>
        // put the time out there
        //if first try, just offer the start
        //if not the first try, then we give them the score and start the timer on button press


    }

    return (
        <View>
        {gameOver ? (
            
            //maybe change this to game start AND game stop...?
            gameOverProtocol()
        ) : (
            <View>
                <View style={styles.container}>
                    {matchingAnswers.map((matchingAnswers) => (
                    <View>
                        { !matchingAnswers.disabled ? (
                            <MatchButton text={matchingAnswers.value} onPress={() => buttonClicked(matchingAnswers)}/>
                        ) : (
                            <MatchButton text={matchingAnswers.value} disabledHere = {true}/>
                        )
                        }
                    </View> ))}
                </View>
                <View>
                    <Text style={styles.text}>currNumberMatch: {currNumberMatch} secondClick: {secondClick} score: {score}</Text>
                </View>
            </View>
        )}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        flexWrap: 'wrap' 
    },
    text:{
        color:"white",
        fontSize:24,
        textAlign:"center",
    }

    
});

export default MatchingGame;
