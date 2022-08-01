import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";

import { Entypo } from "@expo/vector-icons";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const GameTab = ({
    title = "Test",
    description,
    icon = "puzzle",
    percentComplete,
    color,
    onPress,
}) => (
    <Pressable style={styles.container} onPress={onPress}>
        <View style={styles.iconLeft}>
            <MaterialCommunityIcons name={icon} size={36} color={color} />
        </View>
        <View style={styles.content}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
            </View>
            {percentComplete === "100%" ? (
                <Text style={styles.description}>{description}</Text>
            ) : (
                <View style={styles.progressBar}>
                    <View style={[styles.progressBarFull, color && {backgroundColor:color}]}></View>
                </View>
            )}
        </View>
        <View style={styles.percentContainer}>
            <Entypo
                name="chevron-right"
                size={26}
                color={percentComplete === "100%" ? "white" : "#B6C5D4"}
            />
        </View>
    </Pressable>
);

const styles = StyleSheet.create({
    container: {
        width: 360,
        height: 90,
        borderWidth: 3,
        borderColor: "#324A60",
        borderRadius: 16,
        padding: 16,
        flexDirection: "row",
        alignItems: "flex-start",
        overflow: "hidden",
    },
    iconLeft: {
        alignSelf: "center",
        marginRight: 16,
    },
    header: {
        flexDirection: "row",
    },
    title: {
        fontSize: 18,
        color: "white",
        fontWeight: "600",
        marginRight: 8,
        marginBottom: 2,
    },
    description: {
        fontSize: 16,
        fontWeight: "400",
        color: "#D4DFEA",
    },
    content:{
        flex:1,
    },
    progressBar: {
		height: 8,
		backgroundColor: '#31495E',
		borderRadius: 100,
        marginTop:10,
        marginRight:32,
	},
	progressBarFull: {
		width: '40%',
		height: '100%',
		borderRadius: 100,
		backgroundColor: 'white',
	},
    percentContainer: {
        justifyContent: "flex-end",
        alignItems: "center",
        alignSelf:"center",
        flexDirection: "row",
    },
});

export default GameTab;
