import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button } from "react-native";
import CustomText from "../components/CustomText";

import { useNavigation } from "@react-navigation/native";

const Learn = () => {
    const nav = useNavigation();
    return (
        <View style={styles.container}>
            <CustomText>Learn</CustomText>
            <Button
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
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'darkgrey',
		alignItems: 'center',
		justifyContent: 'center',
	},
});


export default Learn;