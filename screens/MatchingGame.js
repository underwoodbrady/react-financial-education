import React, { useState } from "react";
import MatchButton from "../components/learn/MatchButton";
import { Button, Text, View, StyleSheet } from "react-native";
import matchingAnswers from "../Data/MatchingData";

const MatchingGame = () => {

    const [currMatchSelected, setCurrMatchSelected] = useState(0);
	const [secondClick, setSecondClick] = useState(0); //will be 0 if first click, 1 if second click
    const [currButton, setCurrButton] = useState(0);
    const [currNumberMatch, setCurrNumberMatch] = useState(0);
    const [gameOver, changeGameOver] = useState(false);
	//below is where we can add animations for correct/incorrect answers etc
    
	const buttonClicked = (number) => {

		if (secondClick === 0) {
			//we will grab the number into currMatchSelected
            //we grab the button into currButton
            //make the button light up
            <Text>Hi</Text>
		} else {
            if (number == currNumberMatch) {
                //yay
            } else {
                //boo
            }
            <Text>Yo</Text>
		}
        setSecondClick((secondClick + 1) % 2);
        setCurrNumberMatch(number);
	};

    return (
        <View>
        {gameOver ? (
            <Text>Hi</Text>
        ) : (
        <View style={styles.container}>
             {matchingAnswers.map((boxes) => 
             <View>
                <MatchButton onPress={() => buttonClicked(matchingAnswers.number)} text={matchingAnswers.value}/>
            </View> )}
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
