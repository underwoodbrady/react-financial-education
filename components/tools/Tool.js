import { Text, View, StyleSheet, Image } from "react-native";

const Tool = ({ text, color, showImage, hideTool }) => {
    let imgSource;
    switch (text) {
        case "Budget Calculator":
            imgSource = require("../../assets/calculator.png");
            break;
        case "Invest Plan":
            imgSource = require("../../assets/calculator-2.png");
            break;
        case "APR Calculator":
            imgSource = require("../../assets/credit-card.png");
            break;
        case "Retire Planning":
            imgSource = require("../../assets/bed.png");
            break;
        case "Inflation Calculator":
            imgSource = require("../../assets/bar-graph.png");
            break;
        case "Tip Calculator":
            imgSource = require("../../assets/change.png");
            break;
        default:
            imgSource = require("../../assets/calculator.png");
            break;
    }

    return (
        <View style={[styles.container, hideTool && {opacity: 0}]}>
            <View style={[styles.box, color && { backgroundColor: color }]}>
                {showImage && (
                    <Image
                        source={imgSource}
                        style={styles.image}
                    />
                )}
            </View>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 65,
    },
    box: {
        width: 65,
        height: 65,
        borderRadius: 15,
        backgroundColor: "#324A60",
        marginBottom: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 28,
        height: 38,
    },
    text: {
        color: "#D4DFEA",
        textAlign: "center",
        fontWeight: "500",
        lineHeight: 19,
    },
});

export default Tool;
