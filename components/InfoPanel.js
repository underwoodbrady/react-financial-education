import { Text, View, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const InfoPanel = ({ label, amount, positive, icon }) => (
    <View style={styles.container}>
        <View style={styles.leftContainer}>
            <FontAwesome5 name={icon} size={16} color="white" />
            <Text style={styles.label}>{label}</Text>
        </View>
        <Text style={[styles.amount, positive && styles.green]}>${amount}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderColor: "white",
        borderWidth: 3,
        borderRadius: 15,
        paddingVertical: 16,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "space-between",
    },
    leftContainer:{
        flexDirection:"row",
        alignItems:"center",
    },
    label: {
        color: "white",
        fontSize: 16,
        fontWeight: "800",
        marginLeft:12,
    },
    amount: {
        color: "white",
        fontSize: 16,
        color: "#FFA08E",
        fontWeight: "600",

    },
    green: {
        color: "#A7EAA5",
    },
});

export default InfoPanel;
