import { Text, View, StyleSheet } from "react-native";

const SubheaderText = ({ text, style={} }) => (
    <View style={style}>
        <Text style={styles.text}>{text}</Text>
    </View>
);

const styles = StyleSheet.create({
    text:{
        color: "white",
        fontSize: 22,
        fontWeight: "500",
        textAlign: "left",
        marginBottom: 8,
    },
});

export default SubheaderText;
