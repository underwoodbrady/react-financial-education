import { Text, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Information = ({ label, sublabel, icon = "email" }) => (
    <View style={styles.container}>
        <MaterialIcons name={icon} size={24} color="#B6C5D4" />
        <View style={styles.text}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.subLabel}>{sublabel}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: 320,
    },
    text: {
        marginLeft: 24,
    },
    label: {
        color: "white",
        fontSize: 15,
        fontWeight: "600",
        marginBottom: 4,
    },
    subLabel: {
        color: "#B6C5D4",
        fontSize: 13,
    },
});

export default Information;
