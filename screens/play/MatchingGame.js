import React, { useState } from 'react';
import MatchButton from '../../components/learn/MatchButton';
import { Button, Text, View, StyleSheet, Vibration, Pressable } from 'react-native';
import matchingAnswers from '../../Data/MatchingData';
import QuizButton from '../../components/learn/QuizButton';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import arrayShuffle from 'array-shuffle';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const shuffleArray = (array) => {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
};

const MatchingGame = () => {
	const nav = useNavigation();
	const [currMatchSelected, setCurrMatchSelected] = useState(0);
	const [secondClick, setSecondClick] = useState(0); //will be 0 if first click, 1 if second click
	const [currButton, setCurrButton] = useState(0);
	const [currNumberMatch, setCurrNumberMatch] = useState(0);
	const [gameOver, changeGameOver] = useState(true);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [gameTime, setGameTime] = useState(0);

	const [isStopwatchStart, setIsStopwatchStart] = useState(false);
	const [resetStopwatch, setResetStopwatch] = useState(false);

	const buttonClicked = (theButton) => {
		if (!(currButton == theButton && secondClick == 1)) {
			if (secondClick === 0) {
				setCurrMatchSelected(theButton.number);
				setCurrButton(theButton);
			} else {
				if (theButton.number == currNumberMatch) { //yay
					if (score == matchingAnswers.length / 2 - 1) {
						gameOverProtocol();
					}
					theButton.disabled = 1;
					currButton.disabled = 1;
					setScore(score + 1);
				} else { //boo
					Vibration.vibrate();
				}
			}
			setSecondClick((secondClick + 1) % 2);
			setCurrNumberMatch(theButton.number);
		}
	};

	const gameOverProtocol = () => {
		changeGameOver(true);
		setShowScore(true);
		setIsStopwatchStart(false);
		setResetStopwatch(true);
	};

	const restartFunction = () => {
		//we need to reset the time, score, click num
		//instead end the game but don't display the score
		changeGameOver(true);
		setScore(0);
		setResetStopwatch(true);
		setIsStopwatchStart(true);
		setSecondClick(0);
		shuffleArray(matchingAnswers);
		{
			matchingAnswers.map(
				(matchingAnswers) => (matchingAnswers.disabled = 0)
			);
		}
		setShowScore(false);

	}

	const startGame = () => {
		setScore(0);
		setSecondClick(0);
		changeGameOver(false);
		shuffleArray(matchingAnswers);
		{
			matchingAnswers.map(
				(matchingAnswers) => (matchingAnswers.disabled = 0)
			);
		}
		setResetStopwatch(false);
		setIsStopwatchStart(true);
	};

	/*TODO: add functionality here */
	const exit = () => {
		//change game over
		changeGameOver(true);
		//navigate out of there
	}

	/*<Text style = {styles.text}>{score}</Text> {/*will only display if not first try, also display time and not score
    also need to make sure we reset the timer but can store the recent score in a temp variable, maybe trace high score*/

	return (
		<View>
			{gameOver ? (
				<View>
					<View style={styles.container}>
						<MatchButton
							text="start"
							onPress={() => startGame()}
						></MatchButton>
						<MatchButton text="exit" onPress={() => exit()}></MatchButton> 
						{showScore ? (
							<Text style={styles.text}>{gameTime}</Text>
						) : (
							<Text style={styles.text}></Text>
						)}
					</View>
				</View>
			) : (
				<View>
					<View style={styles.container}>
						<Pressable style = {styles.buttons} onPress={()=>restartFunction()}>
							<AntDesign name="arrowleft" size={36} color="white" />
						</Pressable>
						<Stopwatch
							laps
							start={isStopwatchStart}
							reset={resetStopwatch}
							options={options} //styling
							getTime={(time) => {
								//console.log(time);
								setGameTime(time);
							}} 
						/>
						
						{matchingAnswers.map((matchingAnswers) => (
							<View style={styles.buttonContainer}>
								{!matchingAnswers.disabled ? (
									<MatchButton
										text={matchingAnswers.value}
										onPress={() =>
											buttonClicked(matchingAnswers)
										}
									/>
								) : (
									<MatchButton
										text={matchingAnswers.value}
										disabledHere={true}
									/>
								)}
							</View>
						))}
					</View>
					{/*}
					<View>
						<Text style={styles.text}>
							currNumberMatch: {currNumberMatch} secondClick:{' '}
							{secondClick} score: {score}
						</Text>
								</View> */}
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		margin: 12,
		justifyContent: 'center',
	},
	buttonContainer: {
		padding: 6,
	},
	text: {
		color: 'white',
		fontSize: 24,
		textAlign: 'center',
	},
});

const options = {
	container: {
	  backgroundColor: 'transparent',
	  padding: 5,
	  borderRadius: 5,
	  width: 200,
	  alignItems: 'center',
	  justifyContent: 'center',

	},
	text: {
	  fontSize: 25,
	  color: 'white',
	  marginLeft: 7,
	},
}

export default MatchingGame;
