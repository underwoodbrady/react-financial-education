import { StyleSheet, Text, View, Button, Image } from "react-native";

import { Entypo } from "@expo/vector-icons";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const GameTab = ({
    title = "Test",
    description,
    icon = "puzzle",
    percentComplete,
    color,
}) => (
    <View style={[styles.container, percentComplete==="100%" && {borderColor:color}]}>
        {percentComplete!=="100%" && <View
            style={[
                styles.fillColor,
                color && { backgroundColor: color, width: percentComplete },
            ]}></View>}
        {percentComplete!=="100%" &&<Entypo style={styles.lockIcon} name="lock" size={24} color="white" />}
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <MaterialCommunityIcons name={icon} size={22} color={color} />
            </View>
            <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.percentContainer}>
            <Entypo name="chevron-right" size={24} color={percentComplete==="100%" ? "white" : "#B6C5D4"} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: 360,
        borderWidth: 2,
        borderColor: "#324A60",
        borderRadius: 16,
        padding: 16,
        flexDirection: "row",
        overflow: "hidden",
    },
    fillColor: {
        width: "40%",
        opacity: 0.5,
        height: 6,
        backgroundColor: "red",
        position: "absolute",
        borderRadius: 16,
    },
    lockIcon: {
        alignSelf: "center",
        marginRight: 16,
    },
    header:{
        flexDirection:"row",
    },
    title: {
        fontSize: 18,
        color: "white",
        fontWeight: "600",
        marginRight:8,
        marginBottom:2,
    },
    description: {
        fontSize: 16,
        fontWeight: "300",
        color: "white",
    },
    percentContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems:"center",
        flexDirection: "row",
    },
    percentText: {
        color: '#B6C5D4',
        textAlign: "right",
        fontSize: 18,
        fontWeight: "600",
        marginRight:4,
    },
});

export default GameTab;
