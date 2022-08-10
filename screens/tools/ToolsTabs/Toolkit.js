import { StyleSheet, View, Text } from "react-native";

import Tool from "../../../components/tools/Tool";

import HeaderText from "../../../components/text/HeaderText";

const Toolkit = () => (
    <View style={styles.container}>
        <HeaderText text="Toolkit" style={{marginBottom:4}}/>
        <View style={styles.toolRow}>
            <Tool text="Budget Calculator" color="#BD4A41" showImage />
            <Tool text="Invest Plan" color="#1290DC" showImage/>
            <Tool text="APR Calculator" color="#198793" showImage/>
            <Tool text="Retire Planning" color="#D79C41" showImage/>
        </View>
        <View style={styles.toolRow}>
            <Tool text="Inflation Calculator" color="#9F1DB2" showImage />
            <Tool text="Tip Calculator" color="#3F50B1" showImage/>
            <Tool text="Cost Tool" color="#4A4A4A" hideTool/>
            <Tool text="" color="#3CB33D"  hideTool/>
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
        marginTop: 16,
        marginBottom:8,
    },
});

export default Toolkit;
