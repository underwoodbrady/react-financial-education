import React, { useState } from "react";

import { Button, Text, View, StyleSheet } from "react-native";

const MatchingGame = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Matching Game :D</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    text:{
        color:"white",
        fontSize:24,
        textAlign:"center",
    }
});

export default MatchingGame;
