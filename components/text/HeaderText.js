import { Text, View, StyleSheet } from "react-native";

const HeaderText = ({ text, style={} }) => (
    <View style={style}>
        <Text style={styles.text}>{text}</Text>
    </View>
);

const styles = StyleSheet.create({
    text:{
        color: "white",
        fontSize: 26,
        fontWeight: "500",
        textAlign: "left",
        marginBottom: 8,
    },
});

export default HeaderText;
