import { Text, View, StyleSheet, TextInput, ScrollView } from "react-native";
import { useState } from "react";

const BudgetTool = ({ text, style = {} }) => {
    const [incomeAmount, setIncomeAmount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.budgetHeader}>Monthly after-tax income</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => {
                    setIncomeAmount(parseInt(text));
                }}
                value={text}
                placeholder={"0"}
                placeholderTextColor={"#B6C5D4"}
                keyboardType={"number-pad"}
            />
            <View style={styles.bottomLabel}>
                <View style={styles.splitBottom}>
                    <Text style={styles.labelText}>50% - Necessities</Text>
                    <Text style={styles.labelText}>${Math.round(incomeAmount/2)}</Text>
                </View>
                <View style={styles.splitBottom}>
                    <Text style={styles.labelText}>30% - Wants</Text>
                    <Text style={styles.labelText}>${Math.round(incomeAmount*3/10)}</Text>

                </View>
                <View style={styles.splitBottom}>
                    <Text style={styles.labelText}>20% - Savings & Debts</Text>
                    <Text style={styles.labelText}>${Math.round(incomeAmount*1/5)}</Text>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 360,
        borderWidth: 3,
        borderColor: "#324A60",
        borderRadius: 16,
        padding: 16,
        paddingHorizontal: 24,
        marginBottom:36,
    },
    budgetHeader: {
        color: "white",
        fontSize: 22,
        fontWeight: "500",
        textAlign: "left",
        marginBottom: 16,
    },
    bottomLabel: {
        backgroundColor: "#122533",
        marginTop:24,
        borderTopWidth:2,
        borderColor:"#324A60",
        marginHorizontal:-24,
        marginBottom:-16,
        borderBottomRightRadius:16,
        borderBottomLeftRadius:16,
        paddingHorizontal:24,
        paddingVertical:8,
        paddingTop:16,
    },
    splitBottom:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:12,
    },
    labelText: {
        color: "#D4DFEA",
        fontSize: 16,
        textAlign: "left",
        marginBottom: 12,
        lineHeight: 24,
    },
    input: {
        borderWidth: 3,
        borderColor: "#324A60",
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
        width: "100%",
        color:"white",
        fontWeight:"500",
        fontSize:20,
    },
});

export default BudgetTool;
