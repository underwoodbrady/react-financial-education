import { StyleSheet, View, Text } from "react-native";

import Tool from "../../../components/tools/Tool";

const Toolkit = () => (
    <View style={styles.container}>
        <Text style={styles.headerText}>Toolkit</Text>
        <View style={styles.toolRow}>
            <Tool text="Budget Calculator" color="#BD4A41" showImage />
            <Tool text="Investing Calculator" color="#1290DC" />
            <Tool text="Tool name" />
            <Tool text="Tool name" />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
        paddingVertical: 4,
    },
    headerText: {
        color: "white",
        fontSize: 26,
        fontWeight: "500",
        marginBottom: 16,
    },
    toolRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 16,
    },
});

export default Toolkit;
