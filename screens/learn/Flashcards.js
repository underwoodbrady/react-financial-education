import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import CustomText from "../../components/CustomText";

import Flashcard from "../../components/learn/Flashcard";
import flashcardsData from "../../Data/LessonData/FlashcardData/flashcards_1";

const Flashcards = () => {
    let [card, setCard] = useState(0);
    const handlePressLeft = () => {
        if(card<=0) return;
        setCard(card-=1);
    }
    const handlePressRight = () => {
        if(card>=(flashcardsData.length-1)) return;
        setCard(card+=1);
    }
    return (
        <View style={styles.container}>
            <Flashcard
                frontText={flashcardsData[card].Term}
                backText={flashcardsData[card].Definition}
                onPressLeft={handlePressLeft}
                onPressRight={handlePressRight}
                disableLeft={card<=0}
                disableRight={card>=(flashcardsData.length-1)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
        paddingVertical: 48,
    },
});

export default Flashcards;
