import { StyleSheet, View, Button, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import Investments from "./ToolsTabs/Investments";

import Toolkit from "./ToolsTabs/Toolkit";

import ToolsHeader from "../../components/tools/ToolsHeader";

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
            <View style={[styles.headerSpacing, selectedTab === 1 && {backgroundColor:"#4099F2"}]}>
                <ToolsHeader
                    tabs={["Toolkit", "Investing", "Saving"]}
                    selectedTab={selectedTab}
                    setSelectedTab={(tab) => setSelectedTab(tab)}
                />
            </View>
            {selectedTab === 0 && <Toolkit/>}
            {selectedTab === 1 &&<Investments />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerSpacing: {
        paddingTop:32,
        paddingBottom:24,
        alignItems:"center",
    },
});

export default Tools;
