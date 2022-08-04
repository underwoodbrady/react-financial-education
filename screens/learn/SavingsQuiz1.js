import { StyleSheet, View } from "react-native";

import Quiz from "../../components/learn/Quiz";
import SavingsQuizOneQuestions from "../../Data/SavingsQuizOneData";

const SavingsQuizOne = () => (
    <View style={styles.container}>
        <Quiz questions={SavingsQuizOneQuestions} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
});

export default SavingsQuizOne;
