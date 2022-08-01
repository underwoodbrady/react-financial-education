import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useState } from "react";
import ButtonPrimary from "../../components/ButtonPrimary";

const Article = () => {
    const [scrollPos, setScrollPos] = useState(1);
    const [viewHeight, setViewHeight] = useState(100);
    const [offset, setOffset] = useState(0);
    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.progressBar,
                    scrollPos > 0 &&
                        viewHeight > 0 && {
                            width:
                                (scrollPos / (viewHeight - offset)) * 100 + "%",
                        },
                ]}></View>

            <View
                style={[
                    styles.buttonContainer,
                    scrollPos / (viewHeight - offset) > 0.9 && { opacity: 1 },
                ]}>
                <ButtonPrimary text="Continue" />
            </View>

            <ScrollView
                contentContainerStyle={{
                    alignItems: "center",
                }}
                onScroll={(e) => {
                    setScrollPos(e.nativeEvent.contentOffset.y);
                    setOffset(e.nativeEvent.layoutMeasurement.height);
                }}
                onLayout={(e) => {}}>
                <View
                    style={styles.content}
                    onLayout={(e) => {
                        let { height } = e.nativeEvent.layout;
                        setViewHeight(height);
                    }}>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                    <Text style={styles.text}>Whats good g</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: "white",
        marginVertical: 24,
    },
    progressBar: {
        height: 4,
        width: "0%",
        backgroundColor: "#69ABE6",
    },
    buttonContainer: {
        position: "absolute",
        bottom: 26,
        alignSelf: "center",
        opacity: 0,
    },
    buttonText: {
        textAlign: "center",
        color: "#0A1E2D",
        fontWeight: "600",
        fontSize: 18,
    },
    content: {
        flex: 1,
    },
});

export default Article;
