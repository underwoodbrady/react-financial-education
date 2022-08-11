import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useEffect, useState } from "react";

import Information from "../../components/profile/Information";
import LearningPreferences from "../../components/profile/LearningPreferences";

import { Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import SlideUpModal from "../../components/modal/SlideUpModal";
import AdvisorTab from "../../components/profile/AdvisorTab";

const ProfileNew = ({ route }) => {
    const nav = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    
    const closeModal = () => setModalVisible(false);

    useEffect(() => {
        let timeout;
        if (route.params) {
            const { showModal } = route.params;
            if(showModal){
                setModalVisible(true);
                timeout = setTimeout(() => setModalVisible(false), 3000);
            }
        }
        return () => {if(timeout) clearInterval(timeout)};
    }, [route]);

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={{
                    alignItems: "center",
                    justifyContent: "flex-start",
                    paddingVertical: 64,
                }}>
                <SlideUpModal
                    type="Success"
                    label="Preferences successfully saved"
                    modalVisible={modalVisible}
                    onRequestClose={closeModal}
                />
                <View style={styles.headerContainer}>
                    <View style={styles.topHeaderContainer}>
                        <View>
                            <Text style={styles.nameText}>Bill Crager</Text>
                            <Text style={styles.usernameText}>bill.crager</Text>
                            <Text style={styles.friendsText}>2 friends</Text>
                        </View>
                        <View>
                            <View style={styles.circle}>
                                <View style={styles.updatePic}>
                                    <Entypo
                                        name="plus"
                                        size={14}
                                        color="white"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.addFriendsButton}>
                        <Ionicons name="person-add" size={20} color="#69ABE6" />
                        <Text style={styles.addFriendsText}>Add friends</Text>
                    </View>
                </View>

                <View style={styles.separator} />

                <View style={styles.preferencesContainer}>
                    <Text style={styles.sectionTitle}>Advisor Connect</Text>
                    
                    <View style={styles.preferencesBox}>
                        <AdvisorTab
                            onPressButton={() => nav.navigate("Advisor Connect")}
                        />
                    </View>
                </View>

                <View style={styles.separator} />
                
                <View style={styles.informationContainer}>
                    <Text style={styles.sectionTitle}>Information</Text>
                    <View style={styles.informationBox}>
                        <View style={styles.informationSpacing}>
                            <Information
                                label="bill.crager@envestnet.com"
                                sublabel="Email"
                            />
                        </View>
                        <Information
                            label="123-456-7890"
                            sublabel="Phone"
                            icon="phone-in-talk"
                        />
                    </View>
                </View>

                <View style={styles.separator} />

                <View style={styles.preferencesContainer}>
                    <Text style={styles.sectionTitle}>Preferences</Text>
                    <View style={styles.preferencesBox}>
                        <LearningPreferences
                            onPressButton={() => nav.navigate("Preferences")}
                        />
                    </View>
                </View>



            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        width: "100%",
        paddingHorizontal: 28,
    },
    topHeaderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: 20,
    },
    nameText: {
        color: "white",
        fontSize: 26,
        fontWeight: "500",
        textAlign: "left",
        marginBottom: 8,
    },
    usernameText: {
        color: "white",
        fontSize: 16,
        textAlign: "left",
        marginBottom: 12,
    },
    friendsText: {
        color: "#69ABE6",
        fontSize: 15,
        textAlign: "left",
        fontWeight: "500",
    },
    circle: {
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: "#69ABE6",
    },
    updatePic: {
        width: 22,
        height: 22,
        position: "absolute",
        backgroundColor: "#0D7ABB",
        borderRadius: 100,
        top: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    addFriendsButton: {
        borderWidth: 3,
        borderColor: "#324A60",
        borderRadius: 16,
        width: "100%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    addFriendsText: {
        color: "#69ABE6",
        fontWeight: "500",
        fontSize: 18,
        marginLeft: 8,
    },
    separator: {
        width: "100%",
        height: 2,
        backgroundColor: "#324A60",
        marginVertical: 32,
    },
    sectionTitle: {
        color: "white",
        fontSize: 22,
        fontWeight: "500",
        textAlign: "left",
        marginBottom: 8,
    },
    preferencesContainer: {
        width: "100%",
        paddingHorizontal: 28,
    },
    preferencesBox: {
        marginVertical: 16,
    },
    informationContainer: {
        width: "100%",
        paddingHorizontal: 28,
    },
    informationBox: {
        borderWidth: 3,
        borderColor: "#324A60",
        borderRadius: 16,
        width: "100%",
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginVertical: 16,
    },
    informationSpacing: {
        marginBottom: 16,
    },
});

export default ProfileNew;