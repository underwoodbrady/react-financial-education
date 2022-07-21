import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, ScrollView } from "react-native";
import CustomText from "../components/CustomText";
import LearnPathHeader from "../components/learn/LearnPathHeader";
import LearnPathNode from "../components/learn/LearnPathNode";

import { useNavigation } from "@react-navigation/native";

const banks = require("../assets/banks.png");
const house = require("../assets/home.png");
const health = require("../assets/health.png");
const money = require("../assets/money.png");
const cardGraph = require("../assets/card-graph.png");

const Learn = () => {
    const nav = useNavigation();
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{
                padding: 32,
                alignItems: "center",
            }}>
            <View style={{ marginTop: 58, marginBottom: 32 }}>
                <LearnPathHeader
                    text="Unit 1"
                    currentComplete={4}
                    goalComplete={10}
                />
            </View>
            <View style={{ marginTop: 12, marginBottom: 12 }}>
                <LearnPathNode text="Saving" image={banks} onPress={() => nav.navigate("Intro Quiz")}/>
            </View>
            <View
                style={{
                    marginTop: 12,
                    marginBottom: 12,
                    flexDirection: "row",
                }}>
                <View style={{ marginRight: 36 }}>
                    <LearnPathNode text="Long Term" image={health} />
                </View>
                <LearnPathNode text="Short Long" image={house} />
            </View>
            <View style={{ marginTop: 12, marginBottom: 12 }}>
                <LearnPathNode text="Inflation" image={money}/>
            </View>
            <View style={{ marginTop: 12, marginBottom: 12 }}>
                <LearnPathNode text="Interest Rates" image={cardGraph} disabled/>
            </View>
            <View style={{ marginTop: 100, marginBottom: 32 }}>
                <LearnPathHeader
                    text="Unit 2"
                    currentComplete={4}
                    goalComplete={10}
                />
            </View>
            <View style={{ marginTop: 12, marginBottom: 12 }}>
                <LearnPathNode text="Saving" image={banks} disabled/>
            </View>
            <View
                style={{
                    marginTop: 12,
                    marginBottom: 12,
                    flexDirection: "row",
                }}>
                <View style={{ marginRight: 36 }}>
                    <LearnPathNode text="Long Term" image={health} disabled/>
                </View>
                <LearnPathNode text="Short Long" image={house} disabled/>
            </View>
            <View style={{ marginTop: 12, marginBottom: 12 }}>
                <LearnPathNode text="Inflation" image={money} disabled/>
            </View>
            <View style={{ marginTop: 12, marginBottom: 12 }}>
                <LearnPathNode text="Interest Rates" image={cardGraph} disabled/>
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
