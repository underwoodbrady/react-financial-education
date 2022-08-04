import { Text, View, StyleSheet } from "react-native";

const ParagraphText = ({ text, style={} }) => (
    <View style={style}>
        <Text style={styles.text}>{text}</Text>
    </View>
);

const styles = StyleSheet.create({
    text:{
        color: "#D4DFEA",
        fontSize: 16,
        textAlign: "left",
        marginBottom: 12,
        lineHeight:24,
    },
});

export default ParagraphText;
