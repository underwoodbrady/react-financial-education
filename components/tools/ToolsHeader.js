import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import SmallButton from "../SmallButton";

const ToolsHeader = () => (
    <View style={styles.container}>
        <View style={styles.separator}>
            <SmallButton title="Net Worth" isSelected />
        </View>
        <View style={styles.separator}>
            <SmallButton title="Spending" />
        </View>
        <View style={styles.separator}>
            <SmallButton title="Investments" />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    separator: {
        paddingHorizontal: 8,
    },
});

export default ToolsHeader;
