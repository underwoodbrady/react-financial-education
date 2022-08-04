import React, { useState } from "react";
import MatchButton from "../../components/learn/MatchButton";
import {
    Button,
    Text,
    View,
    StyleSheet,
    Vibration,
    Pressable,
} from "react-native";
import defaultAnswers from "../../Data/MatchingData";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

const MatchingGame = ({ matchingAnswers = defaultAnswers }) => {
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
                if (theButton.number == currNumberMatch) {
                    //yay
                    if (score == matchingAnswers.length / 2 - 1) {
                        gameOverProtocol();
                    }
                    theButton.disabled = 1;
                    currButton.disabled = 1;
                    setScore(score + 1);
                } else {
                    //boo
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
    /*
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
*/
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

    /*<Text style = {styles.text}>{score}</Text> {/*will only display if not first try, also display time and not score
    also need to make sure we reset the timer but can store the recent score in a temp variable, maybe trace high score*/

    return (
        <View>
            {gameOver ? (
                <View style={styles.gameOverView}>
                    <View style={styles.gameOverContainer}>
                        <Text style={styles.mainHeaderText}>Matching Game</Text>
                        {!showScore ? (<View><Text style={styles.mainSubheaderText}>
                            Click related terms to find matches
                        </Text>
                        <View style={styles.list}>
                            <Text style={styles.stepText}>
                                1. Try to beat the clock
                            </Text>
                            <Text style={styles.stepText}>
                                2. Faster times and better accuracy will place
                                you higher on global leaderboards
                            </Text>
                        </View>
						</View>) : (<View>
							<Text style={styles.mainSubheaderText}>
                            You completed the game in:
                        </Text>
							</View>)}
						{showScore && (
                            <Text style={styles.text}>{gameTime}</Text>
                        )}
                        <Pressable
                            onPress={() => startGame()}
                            style={styles.startButton}>
                            <Text style={styles.startText}>Start</Text>
                        </Pressable>

                    </View>
                </View>
            ) : (
                <View>
                    <View style={styles.container}>
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
                        <View style={styles.matchingButtonContainer}>
                            {matchingAnswers.map((matchingAnswers) => (
                                <View
                                    style={styles.buttonContainer}
                                    key={matchingAnswers.value}>
                                    {!matchingAnswers.disabled ? (
                                        <MatchButton
                                            text={matchingAnswers.value}
                                            term={matchingAnswers.term}
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
        padding: 16,
        alignItems: "center",
    },
    gameOverView: {
        height: "100%",
        padding: 32,
        alignItems: "center",
        justifyContent: "center",
    },
    gameOverContainer: {
        borderWidth: 3,
        borderColor: "#324A60",
        backgroundColor: "#122533",
        borderRadius: 16,
        padding: 22,
        width: 340,
    },
    mainHeaderText: {
        color: "white",
        fontSize: 26,
        fontWeight: "500",
        textAlign: "left",
        marginBottom: 8,
    },
    mainSubheaderText: {
        color: "#D4DFEA",
        fontSize: 16,
        textAlign: "left",
        marginBottom: 12,
    },
    stepText: {
        color: "#D4DFEA",
        fontSize: 16,
        textAlign: "left",
        marginBottom: 6,
        paddingLeft: 8,
    },
	list:{
		paddingBottom:16,
	},
    startButton: {
        width: "100%",
        alignSelf: "center",
        height: 40,
        borderRadius: 15,
        backgroundColor: "#69ABE6",
        justifyContent: "center",
        alignItems: "center",
    },
    startText: {
        color: "#01101B",
        fontWeight: "700",
        fontSize: 15,
    },
    matchingButtonContainer: {
        flexWrap: "wrap",
        flexDirection: "row",
        flex: 1,
        justifyContent:"center",
    },
    buttonContainer: {
        padding: 6,
    },
    text: {
        color: "white",
        fontSize: 24,
        textAlign: "center",
		marginBottom:16,
    },
});

const options = {
    container: {
        backgroundColor: "transparent",
        padding: 5,
        borderRadius: 5,
        width: 200,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 32,
        color: "white",
        marginBottom: 16,
    },
};

export default MatchingGame;
