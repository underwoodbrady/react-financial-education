import { Text, View, StyleSheet, Image } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

const CashChanged = ({ total, amountChanged }) => (
    <View style={styles.container}>
        <Text style={styles.mainText}>${total}</Text>
        <View style={styles.subContainer}>
            <FontAwesome5 name="arrow-circle-up" size={18} color="white" />
            <Text style={styles.subText}>{amountChanged} last month</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {},
    mainText: {
        color: "white",
        fontSize: 48,
        marginBottom: 4,
    },
    subText: {
        color: "white",
        fontWeight:"400",
        fontSize: 16,
        marginLeft: 8,
    },
    subContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
});

export default CashChanged;
