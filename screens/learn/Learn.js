import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, ScrollView } from "react-native";
import CustomText from "../../components/CustomText";
import LearnPathHeader from "../../components/learn/LearnPathHeader";
import LearnPathNode from "../../components/learn/LearnPathNode";

import { useNavigation, useNavigationState } from "@react-navigation/native";
import SavingsLessons from "./SavingsLessons";
import PopupCenterModal from "../../components/modal/PopupCenterModal";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';


const Learn = () => {
    const nav = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
	const {userPreferences} = useSelector((state)=> state.globalReducer);

    useEffect(() => {
        let timeout = setTimeout(()=>setModalVisible(true),100);
        return(() => clearInterval(timeout));
    }, []);

    const closeModal = () => setModalVisible(false);

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{
                padding: 32,
                alignItems: "center",
            }}>
            <PopupCenterModal
                modalVisible={modalVisible}
                onRequestClose={closeModal}
                label="Welcome to your learning"
                subLabel="Click one of the lessons to get started"
                buttonText="Let's go"
            />
            <View style={{ marginTop: 58, marginBottom: 32 }}>
                <LearnPathHeader
                    text="Basics"
                    currentComplete={4}
                    goalComplete={5}
                />
            </View>
            <View style={{ marginTop: 12, marginBottom: 12 }}>
                {/*right here we would decide which quiz to go to based on previous success, we can change currSavingQuiz*/}
                <LearnPathNode
                    text="Saving"
                    onPress={() => nav.navigate("Savings Lessons")}
                />
            </View>
            <View
                style={{
                    marginTop: 12,
                    marginBottom: 12,
                    flexDirection: "row",
                }}>
                <View style={{ marginRight: 36 }}>
                    <LearnPathNode text="Health"  />
                </View>
                <LearnPathNode text="Home"/>
            </View>
            <View style={{ marginTop: 12, marginBottom: 12 }}>
                <LearnPathNode text="Inflation"/>
            </View>
            <View style={{ marginTop: 12, marginBottom: 12 }}>
                <LearnPathNode
                    text="Interest Rates"
                    disabled
                />
            </View>
            <View style={{ marginTop: 100, marginBottom: 32 }}>
                <LearnPathHeader
                    text="Personal"
                    currentComplete={3}
                    goalComplete={5}
                />
            </View>
            <View style={{ marginTop: 12, marginBottom: 12 }}>
                <LearnPathNode text={userPreferences[0] || "Custom"} />
            </View>
            <View
                style={{
                    marginTop: 12,
                    marginBottom: 12,
                    flexDirection: "row",
                }}>
                <View style={{ marginRight: 36 }}>
                    <LearnPathNode text={userPreferences[1] || "Custom"}  />
                </View>
                <LearnPathNode text={userPreferences[2] || "Custom"}  />
            </View>
            <View style={{ marginTop: 12, marginBottom: 12 }}>
                <LearnPathNode text={userPreferences[3] || "Custom"} disabled />
            </View>
            <View style={{ marginTop: 12, marginBottom: 12 }}>
                <LearnPathNode
                    text={userPreferences[4] || "Custom"}
                    disabled
                />
            </View>

            {/*<Button
                title="Go to course page"
                onPress={() => nav.navigate("Course")}
            />
            <Button
                title="Go to social page"
                onPress={() => nav.navigate("Social")}
    />
            <Button
                title="Go to your daily spin"
                onPress={() => nav.navigate("Daily Spin")}
            />
            <Button
                title="Quiz will be replaced above"
                onPress={() => nav.navigate("Intro Quiz")}
            />*/}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default Learn;
