import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, ScrollView } from "react-native";
import CustomText from "../../components/CustomText";

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import ToolsHeader from "../../components/tools/ToolsHeader";
import ToolsContent from "../../components/tools/ToolsContent";

import RecentActions from "../../components/tools/RecentActions";
import IconButton from "../../components/IconButton";

/**
 * Tools header
 * 	-Small button
 * Tools content
 * 	-CashAmountChanged
 *	-GraphButton
 * 	-InfoPanel
 *
 * Recent Actions
 *
 * 	-Action
 *
 * Icon Button
 *
 */

const Tools = () => {
    const nav = useNavigation();
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <View style={styles.highlightContainer}>
                    <View style={styles.headerSpacing}>
                        <ToolsHeader tabs={["Net Worth", "Spending", "Investments"]} selectedTab={selectedTab} setSelectedTab={(tab)=>setSelectedTab(tab)}/>
                    </View>
                    <ToolsContent />
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.actions}>
                        <RecentActions />
                    </View>
                    <View style={styles.footerButtons}>
                        <IconButton
                            icon="clipboard-list"
                            label="Planning"
                            onPress={() => nav.navigate("Planning")}
                        />
                        <IconButton
                            icon="calculator"
                            label="Budgets"
                            onPress={() => nav.navigate("Planning")}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    scroll: {
        alignItems: "center",

    },
    headerSpacing: {
        marginBottom: 32,
    },
    highlightContainer: {
        backgroundColor: "#4099F2",
        width: "100%",
        alignItems: "center",
        paddingVertical: 52,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
    },
    contentContainer: {
        alignItems: "center",
    },
    actions: {
        paddingBottom: 32,
        paddingTop: 24,
    },
    footerButtons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        marginBottom: 32,
    },
});

export default Tools;
