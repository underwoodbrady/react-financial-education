import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, ScrollView } from "react-native";
import CustomText from "../../components/CustomText";
import LearnPathHeader from "../../components/learn/LearnPathHeader";
import LearnPathNode from "../../components/learn/LearnPathNode";

import { useNavigation, useNavigationState } from "@react-navigation/native";
import SavingsLessons from "./SavingsLessons";
import PopupCenterModal from "../../components/modal/PopupCenterModal";
import { useEffect, useState } from "react";

const banks = require("../../assets/banks.png");
const house = require("../../assets/home.png");
const health = require("../../assets/health.png");
const money = require("../../assets/money.png");
const cardGraph = require("../../assets/card-graph.png");
const treeEsg = require("../../assets/tree-esg.png");
const donate = require("../../assets/donate.png");
const logs = require("../../assets/logs.png");
const report = require("../../assets/report.png");
//const currSavingQuiz = "Intro Quiz";

const Learn = () => {
    const nav = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

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
                    image={banks}
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
                    <LearnPathNode text="Health" image={health} />
                </View>
                <LearnPathNode text="Home" image={house} />
            </View>
            <View style={{ marginTop: 12, marginBottom: 12 }}>
                <LearnPathNode text="Inflation" image={money} />
            </View>
            <View style={{ marginTop: 12, marginBottom: 12 }}>
                <LearnPathNode
                    text="Interest Rates"
                    image={cardGraph}
                    disabled
                />
            </View>
            <View style={{ marginTop: 100, marginBottom: 32 }}>
                <LearnPathHeader
                    text="Personal"
                    currentComplete={0}
                    goalComplete={5}
                />
            </View>
            <View style={{ marginTop: 12, marginBottom: 12 }}>
                <LearnPathNode text="ESG" image={treeEsg} disabled />
            </View>
            <View
                style={{
                    marginTop: 12,
                    marginBottom: 12,
                    flexDirection: "row",
                }}>
                <View style={{ marginRight: 36 }}>
                    <LearnPathNode text="Donations" image={donate} disabled />
                </View>
                <LearnPathNode text="Renewables" image={logs} disabled />
            </View>
            <View style={{ marginTop: 12, marginBottom: 12 }}>
                <LearnPathNode text="Reports" image={report} disabled />
            </View>
            <View style={{ marginTop: 12, marginBottom: 12 }}>
                <LearnPathNode
                    text="Interest Rates"
                    image={cardGraph}
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
            <StatusBar style="auto" />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default Learn;
