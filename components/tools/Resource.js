import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

const Resource = ({
    title = "Test",
    description,
    icon = "line-graph",
    color = "white",
    onPress,
}) => {
    const [bookmarked, setBookmarked] = useState();
    return (
        <Pressable style={styles.container} onPress={()=>{
            onPress
            setBookmarked(!bookmarked);
        }}>
            <FontAwesome
                name={bookmarked ? "bookmark" :"bookmark-o"}
                size={22}
                color={bookmarked ? "#FFE563" : "rgba(50, 74, 96,0.4)"}
                style={{ position: "absolute", top: -5, left: 16}}
            />
            <View style={styles.iconLeft}>
                <Entypo name={icon} size={32} color={color} />
            </View>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Text style={styles.description}>{description}</Text>
            </View>
            <View style={styles.percentContainer}>
                <Entypo name="chevron-right" size={24} color="white" />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 360,
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
        fontSize: 17,
        color: "white",
        fontWeight: "600",
        marginRight: 8,
        marginBottom: 2,
    },
    description: {
        fontSize: 14,
        fontWeight: "400",
        color: "#D4DFEA",
    },
    content: {
        flex: 1,
    },
    percentContainer: {
        justifyContent: "flex-end",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "row",
    },
});

export default Resource;
