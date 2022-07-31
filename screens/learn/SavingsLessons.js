import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, Text, Pressable } from "react-native";
import React, { useState } from "react";
import CustomText from "../../components/CustomText";
import SavingsData from "../../Data/SavingsNavData";
import { useNavigation } from "@react-navigation/native";
import QuizButton from "../../components/learn/QuizButton";
import Quiz from "./IntroQuiz";
import { FontAwesome } from "@expo/vector-icons";

import LessonButton from "../../components/learn/LessonButton";

const SavingsLessons = () => {
    const nav = useNavigation();
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
    };

    const Back = () => {
        //updates currLesson, TODO: don't let it go backward if currLesson == 0
        setCurrLesson(currLesson - 1);
        if (currLesson == 1) {
            changeBackwardActive(false);
        }
        changeForwardActive(true);
    };

    const forwardButton = () => {
        return (
            <Pressable style={styles.buttons} onPress={() => Next()}>
                <FontAwesome
                    name="arrow-circle-right"
                    size={35}
                    color="white"
                />
            </Pressable>
        );
    };

    const forwardInactive = () => {
        return (
            <Pressable style={styles.buttons}>
                <FontAwesome name="arrow-circle-right" size={35} color="grey" />
            </Pressable>
        );
    };

    const backwardInactive = () => {
        return (
            <Pressable style={styles.buttons}>
                <FontAwesome name="arrow-circle-left" size={35} color="grey" />
            </Pressable>
        );
    };

    const backwardButton = () => {
        return (
            <Pressable style={styles.buttons} onPress={() => Back()}>
                <FontAwesome name="arrow-circle-left" size={35} color="white" />
            </Pressable>
        );
    };

    //we will provide navigation to the quiz, article, game and tools for each lesson
    return (
        <>
            <View style={styles.container}>
                <View
                    style={[
                        styles.header,
                        {
                            backgroundColor:
                                SavingsData[currLesson].questionColor,
                        },
                    ]}>
                    <Text style={styles.headerText}>
                        {SavingsData[currLesson].questionText}
                    </Text>
                    <Text style={styles.subHeaderText}>
                        Objectives Complete: 2/3
                    </Text>
                </View>
                {SavingsData[currLesson].ButtonLinks.map((ButtonLinks, i) => (
                    <View key={ButtonLinks.title} style={styles.lessonButtons}>
                        <LessonButton
                            text={ButtonLinks.title}
                            //open different page
                            onPress={() => nav.navigate('Learn', { screen: 'Article' })}
                            checked={i === 0}
                        />
                    </View>
                ))}
            </View>
            <View style={styles.footer}>
                {backwardActive ? backwardButton() : backwardInactive()}

                {forwardActive ? forwardButton() : forwardInactive()}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    header: {
        backgroundColor: "#1290DC",
        width: "100%",
        paddingLeft: 32,
        paddingVertical: 32,
        marginBottom: 32,
    },
    headerText: {
        color: "white",
        fontSize: 24,
        textAlign: "left",
        marginBottom: 12,
        fontWeight: "600",
    },
    subHeaderText: {
        color: "white",
        fontSize: 16,
        textAlign: "left",
    },
    lessonButtons: {
        marginVertical: 12,
    },
    buttons: {
        marginHorizontal: 12,
        marginBottom: 32,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
    },
});

export default SavingsLessons;
