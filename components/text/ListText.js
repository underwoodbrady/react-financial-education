import { Text, View, StyleSheet } from "react-native";

const ListText = ({ text, style={}, listNum }) => (
    <View style={[styles.container, style]}>
        <Text style={[styles.text, {fontWeight:"500", paddingRight:8}]}>{listNum}.</Text>
        <Text style={styles.text}>{text}</Text>
    </View>
);

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        paddingHorizontal:20,
    },
    text:{
        color: "#D4DFEA",
        fontSize: 16,
        textAlign: "left",
        marginBottom: 12,
        lineHeight:24,
    },
});

export default ListText;
