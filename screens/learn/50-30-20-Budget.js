import { StyleSheet, View, Text, ScrollView } from "react-native";

import HeaderText from "../../components/text/HeaderText";
import ParagraphText from "../../components/text/ParagraphText";
import ListText from "../../components/text/ListText";

import BudgetTool from "../../components/learn/BudgetTool";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { completedObjective } from "../../redux/actions";

const FiftyThirtyTwentyBudgeting = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(completedObjective(1,2));
    },[])
    return (
        <ScrollView>
            <View style={styles.container}>
                <HeaderText text="Savings/Budget calculator" />
                <ParagraphText
                    text="Determine how you should divide your monthly income into needs, wants, and savings."
                    style={{ marginBottom: 24 }}
                />
                <BudgetTool />
                <HeaderText text="Helpful tips:" style={{ marginBottom: 12 }} />
                <ListText
                    listNum={1}
                    text="Be careful not to miscategorize wants as needs. Remember, needs are your basic living expenses, things necessary for your health, or expenses that are required for you to do your job. Wants, on the other hand, are things you choose to buy but could live without."
                />
                <ListText
                    listNum={2}
                    text="There's no correct way to budget - what works for one person might not work for another. Depending on your situation, you may need to adjust the percentages above."
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 32,
        paddingHorizontal: 24,
    },
});

export default FiftyThirtyTwentyBudgeting;
