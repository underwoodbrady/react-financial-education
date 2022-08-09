import { StyleSheet, View, Text } from "react-native";

import Tool from "../../../components/tools/Tool";

import HeaderText from "../../../components/text/HeaderText";

const Toolkit = () => (
    <View style={styles.container}>
        <HeaderText text="Toolkit" style={{marginBottom:4}}/>
        <View style={styles.toolRow}>
            <Tool text="Budget Calculator" color="#BD4A41" showImage />
            <Tool text="Investing Calculator" color="#1290DC" showImage/>
            <Tool text="Interest Rate" color="#198793" showImage/>
            <Tool text="Retire Planning" color="#D79C41" showImage/>
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
