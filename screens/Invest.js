import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";
import CustomText from "../components/CustomText";
import CustomButton from "../components/CustomButton";

import { useNavigation } from "@react-navigation/native";

const Invest = () => {
    const nav = useNavigation();
    return (
        <View style={styles.invest}>
            <CustomText>Invest</CustomText>
            <Text>Hello there!</Text>
            <StatusBar style="auto" />
            <Button
                title="Go to Profile"
                onPress={() => nav.navigate("Profile")}
            />
            <Button
                title="Press me"
                onPress={() => Alert.alert("Thanks for clicking me!")}
            />
            <Image
                source={{
                    uri: "https://reactnative.dev/docs/assets/p_cat2.png",
                }}
                style={{ width: 200, height: 200 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    invest: {
        flex: 1,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Invest;
