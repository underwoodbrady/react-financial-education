import { StyleSheet, View, Text } from "react-native";
import dailyTriviaData from "../../Data/DailyTriviaData";
import Quiz from "../../components/learn/Quiz";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { increaseCoins } from "../../redux/actions";

const DailyTrivia = () => {
    let [gameActive, setGameActive] = useState(false);
    let [timeLeft, setTimeLeft] = useState(3);
    let textCycle = ["Go!", "Get Set!", "Get Ready!"];
    const dispatch = useDispatch();
    const nav = useNavigation();
    useEffect(()=>{
        let interval = setTimeout(()=>{
            if(gameActive) return;
            if(timeLeft <= 0) setGameActive(true);
            setTimeLeft(timeLeft-0.015);
        },10)
        return (()=> clearInterval(interval));
    }, [timeLeft])
    return (
        <View style={styles.container}>
            {!gameActive && <View style={styles.countdownContainer}>
                <Text style={styles.warningText}>{textCycle[Math.ceil(timeLeft)-1]}</Text>
                <View style={styles.clock}>
                    <View style={[styles.topHand, {transform: [{translateX:0}, {translateY:12}, {rotate:(timeLeft)/3 * 360 + "deg"},{translateX:0}, {translateY:-12}]}]}></View>
                </View>
                <Text style={styles.countdownText}>{Math.ceil(timeLeft)} seconds</Text>
            </View>}
            {gameActive && <Quiz questions={dailyTriviaData} onGoBack={()=>{
                dispatch(increaseCoins(7));
                nav.goBack();
            }}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    countdownContainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    warningText:{
        color:"white",
        fontSize:32,
        fontWeight:"700",
        marginBottom:48,
    },
    clock:{
        width:72,
        height: 72,
        borderRadius: 48,
        borderColor: "white",
        borderWidth:3,
        alignSelf:"center",
        marginBottom:28,
    },
    topHand:{
        position:"absolute",
        width:5,
        height:24,
        top:12,
        backgroundColor:"white",
        alignSelf:"center",
        borderRadius:20,
    },
    countdownText:{
        color:"white",
        fontSize:24,
        fontWeight:"400",
    },
});

export default DailyTrivia;
