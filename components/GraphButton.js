import { Text, View, StyleSheet, Image, Pressable } from "react-native";

const graph = require("../assets/graph-thing.png");

const GraphButton = ({onPress}) => (
    <View style={styles.container}>
        <Image style={styles.image} source={graph} />
        <Pressable onPress={() => onPress} style={styles.button}><Text style={styles.buttonText}>See Graph</Text></Pressable>
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: 165,
        height: 100,
        opacity: 1,
        alignItems:"center",
        justifyContent: "center",
    },
    image:{
        width: "100%",
        height: "auto",
        aspectRatio: 2,
    },
    button:{
        position:"absolute",
        paddingVertical:8,
        paddingHorizontal:12,
        backgroundColor:"rgba(255,255,255,0.15)",
        borderRadius: 12,
    },
    buttonText:{
        color:"white",
        fontSize:15,
        fontWeight: "600",
    }
});

export default GraphButton;
