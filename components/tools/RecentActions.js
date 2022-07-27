import { Text, View, StyleSheet, Pressable, ScrollView } from "react-native";

import Action from "../Action";

const RecentActions = () => (
    <View>
        <Text style={styles.title}>Recent Actions</Text>
        <ScrollView style={styles.container}>
            <Action />
            <Action />
            <Action />
            <Action />
            <Action />
            <Action />
            <Action />
            <Action />
            <Action />
            <Action />
            <Action />
        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: "#324A60",
        borderRadius: 16,
        padding: 12,
        width: 340,
        height: 100,
    },
    title: {
        color: "white",
        fontSize: 21,
        textAlign: "center",
        marginBottom: 20,
        fontWeight: "600",
    },
});

export default RecentActions;
