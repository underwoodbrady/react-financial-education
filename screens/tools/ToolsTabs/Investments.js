import { StyleSheet, View, Button, ScrollView } from "react-native";

import ToolsContent from "../../../components/tools/ToolsContent";

import RecentActions from "../../../components/tools/RecentActions";
import IconButton from "../../../components/IconButton";
import { useNavigation } from "@react-navigation/native";

const Investments = () => {
    const nav = useNavigation();
    return(<View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.highlightContainer}>
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
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        alignItems: "center",
    },
    highlightContainer: {
        backgroundColor: "#4099F2",
        width: "100%",
        alignItems: "center",
        paddingBottom: 52,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
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

export default Investments;
