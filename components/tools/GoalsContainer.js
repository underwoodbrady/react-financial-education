import { Text, View, Image, StyleSheet } from "react-native";
import Goals from "./Goals";

import AddElement from "./AddElement";

const GoalsContainer = ({ goalsData = [] }) => (
    <View style={styles.container}>
        {goalsData.map((goal, i) => (
            <View style={styles.budget} key={goal.text}>
                <Goals
                    label={goal.text}
                    i={i + 1}
                    complete={goal.complete}
                />
            </View>
        ))}
        <AddElement text="Add Goal"/>
    </View>
);

const styles = StyleSheet.create({
    budget: {
        marginBottom: 16,
    },
});

export default GoalsContainer;
