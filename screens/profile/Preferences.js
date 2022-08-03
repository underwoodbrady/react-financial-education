import { StyleSheet, View, Pressable, Text } from "react-native";

import TopicCheckbox from "../../components/profile/TopicCheckbox";

import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const Preferences = () => {
    const nav = useNavigation();
    return (
        <View style={styles.container}>
            <View>
                <Pressable
                    onPress={() => nav.goBack()}
                    style={styles.xButtonContainer}
                    hitSlop={{
                        bottom: 25,
                        left: 25,
                        right: 25,
                        top: 25,
                    }}
					pressRetentionOffset={{
						bottom: 50,
                        left: 50,
                        right: 50,
                        top: 50,
					}}>
                    <View>
                        <Feather
                            name="x"
                            size={20}
                            color="white"
                            style={styles.xButton}
                        />
                    </View>
                </Pressable>
                <Text style={styles.headerText}>Preferences</Text>
                <Text style={styles.subHeaderText}>
                    Select topics that most interest you
                </Text>
                <View style={styles.spaceCheckbox}>
                    <TopicCheckbox
                        icon="graduation-cap"
                        label="College Saving"
                    />
                </View>
                <View style={styles.spaceCheckbox}>
                    <TopicCheckbox icon="chart-line" label="Agressive Growth" />
                </View>
                <View style={styles.spaceCheckbox}>
                    <TopicCheckbox icon="btc" label="Alternative Investing" />
                </View>
                <View style={styles.spaceCheckbox}>
                    <TopicCheckbox
                        icon="laptop-house"
                        label="Buying First House"
                    />
                </View>
                <View style={styles.spaceCheckbox}>
                    <TopicCheckbox
                        icon="piggy-bank"
                        label="Budgetting/Saving"
                    />
                </View>
                <View style={styles.spaceCheckbox}>
                    <TopicCheckbox
                        icon="shield-alt"
                        label="Personal Security"
                    />
                </View>
            </View>
            <Pressable style={styles.button} onPress={() => nav.navigate("ProfileScreen", {showModal:true})}>
                <Text style={styles.buttonText}>
                    Update Learning Preferences
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
        paddingVertical: 64,
        justifyContent: "space-between",
        flex: 1,
    },
    headerText: {
        color: "white",
        fontSize: 26,
        fontWeight: "500",
        textAlign: "left",
        marginBottom: 8,
    },
    subHeaderText: {
        color: "#D4DFEA",
        fontSize: 16,
        textAlign: "left",
        marginBottom: 36,
    },
    button: {
        width: "100%",
        height: 40,
        borderRadius: 15,
        backgroundColor: "#69ABE6",
        justifyContent: "center",
        alignItems: "center",
    },
    spaceCheckbox: {
        marginVertical: 4,
    },
    xButtonContainer: {
        position: "absolute",
        padding:8,
        top: 8,
        right: 0,
		zIndex:100,
    },
    buttonText: {
        color: "#01101B",
        fontWeight: "700",
        fontSize: 15,
    },
});

export default Preferences;
