import { Text, View, StyleSheet, Pressable, Modal } from "react-native";

import { Octicons, Feather } from "@expo/vector-icons";

const SlideUpModal = ({
    label,
    modalVisible,
    onRequestClose,
}) => (
    <View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => onRequestClose}>
            <View style={styles.centeredView}>
                <View style={styles.modalContainer}>
                    <View style={styles.leftContainer}>
                        <Octicons
                            name="check-circle-fill"
                            size={22}
                            color="#1BCBC5"
                        />
                        <Text style={styles.labelText}>{label}</Text>
                    </View>
                    <Pressable
                        onPress={onRequestClose}
                        style={styles.closeButton}
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
                        <Feather
                            name="x"
                            size={18}
                            color="white"
                            style={styles.xButton}
                        />
                    </Pressable>
                </View>
            </View>
        </Modal>
    </View>
);

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    modalContainer: {
        backgroundColor: "#324A60",
        borderRadius: 15,
        paddingVertical: 12,
        paddingHorizontal: 16,
        width: 360,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 76,
    },
    leftContainer:{
        flexDirection: "row",
        alignItems: "center",
    },
    labelText: {
        color: "white",
        fontSize: 15,
        fontWeight: "500",
        marginLeft: 12,
    },
    closeButton:{
        zIndex:150,
    },
});

export default SlideUpModal;
