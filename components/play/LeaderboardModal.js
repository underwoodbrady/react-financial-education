import { StyleSheet, Text, View, Button, Image, Pressable, Modal, ScrollView } from "react-native";
import { useState } from 'react';
import Action from "../Action";

const LeaderboardModal = ({modalVisible, onClose}) => (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        }}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Leaderboard</Text>
                <ScrollView style={styles.scroll}>
                    <Text>Hi</Text>
                    <Text>Hi</Text>
                    <Text>Hi</Text>
                    <Text>Hi</Text>
                    <Text>Hi</Text>
                    <Text>Hi</Text>
		        </ScrollView>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => onClose()}
                >
                    <Text style={styles.textStyle}>Exit</Text>
                </Pressable>
            </View>
        </View>
    </Modal>
);

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: "#0A1E2D",
        borderRadius: 20,
        padding: 35,
        width: "75%",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
});

export default LeaderboardModal;