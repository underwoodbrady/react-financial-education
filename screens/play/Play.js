import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Button, Modal, Pressable } from "react-native";
import CustomText from "../../components/CustomText";
import GameTab from "../../components/play/GameTab";
import GameHeaderButton from "../../components/play/GameHeaderButton";
import { useState } from 'react';
import LeaderboardModal from "../../components/play/LeaderboardModal";

const gameData = [
    {
        title: "Matching Game",
        description: "Game about matching stuff",
        icon: "puzzle",
        color: "#FFA08E",
        percentComplete: "100%",
    },
    {
        title: "Ticker Guesser",
        description: "Guess that ticker bro",
        icon: "format-letter-matches",
        color: "#ACDBFE",
        percentComplete: "80%",
    },
    {
        title: "Asteroids Game",
        description: "Shoot em",
        icon: "rocket",
        color: "#DF8EEB",
        percentComplete: "40%",
    },
];

const Play = () => {
    const nav = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <GameHeaderButton text="Leaderboards" color="#6F63FF" onPress={() => setModalVisible(!modalVisible)}/>
                <GameHeaderButton text="Daily Trivia" color="#FF9263" onPress={() => nav.navigate("Daily Trivia")}/>
            </View>
            <LeaderboardModal modalVisible={modalVisible} onClose={()=> setModalVisible(!modalVisible)}></LeaderboardModal>
            {gameData.map((game, i) => (
                <View style={styles.gameTabContainer} key={game.title}>
                    <GameTab
                        title={game.title}
                        description={game.description}
                        percentComplete={game.percentComplete}
                        color={game.color}
                        icon={game.icon}
                        onPress={()=>nav.navigate(game.title)}
                    />
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 24,
    },
    header:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-around",
        marginTop:8,
        marginBottom:20,
        paddingHorizontal:16,
    },
    gameTabContainer: {
        marginTop: 10,
        marginBottom: 10,
    },
});

export default Play;
