import { Text, Image, View, StyleSheet } from "react-native";

const Panel = ({title, image = require('../../assets/intro-graph.png')}, sizingOverload = {width:175,height:175}) => (
    <View style={styles.container}>
        <Image
            style={styles.image}
            source={image}
        />
        <Text style={styles.text}>
            {title}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        height:300,
    },
    image:{
        width:175,
        height:175,
        marginBottom:48,
    },
    text: {
        color: "white",
        fontSize: 26,
        textAlign:"center",
    },
});

export default Panel;
