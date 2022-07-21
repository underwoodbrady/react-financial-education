import { StyleSheet, View, Text } from "react-native";
import CustomText from "../components/CustomText";
import GameTab from "../components/play/GameTab";



const gameData = [
    {
        title: "Matching Game",
        description: "Game about matching stuff",
        icon: "puzzle",
        color: "#FFB0C2",
		percentComplete: "100%",
    },
    {
        title: "Ticker Guesser",
        description: "Guess that ticker bro",
        icon: "format-letter-matches",
        color: "#CCE6E9",
		percentComplete: "80%",
    },
    {
        title: "Astroids Game",
        description: "Shoot em",
        icon: "rocket",
        color: "#EACAF7",
		percentComplete: "40%",
    },
];

const Play = () => (
    <View style={styles.container}>
        {gameData.map((game, i) => (
            <View style={styles.gameTabContainer}>
                <GameTab
                    title={game.title}
                    description={game.description}
                    key={Math.random()}
					percentComplete={game.percentComplete}
					color={game.color}
					icon={game.icon}
                />
            </View>
        ))}
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 24,
    },
	gameTabContainer:{
		marginTop: 10,
		marginBottom: 10,
	},
});

export default Play;
