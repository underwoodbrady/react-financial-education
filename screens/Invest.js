import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button } from "react-native";
import CustomText from "../components/CustomText";

import { useNavigation } from "@react-navigation/native";

const Invest = () => {
    const nav = useNavigation();
    return (
        <View style={styles.container}>
            <CustomText>Invest</CustomText>
            <Button
                title="Go to profile"
                onPress={() => nav.navigate("Profile")}
            />
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "tan",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Invest;
