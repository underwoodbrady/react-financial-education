import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button } from "react-native";
import CustomText from "../../components/CustomText";

import { useNavigation } from "@react-navigation/native";

const Social = () => {
    const nav = useNavigation();
    return (
        <View style={styles.container}>
            <CustomText>Social</CustomText>
            <Button
                title="Go to leaderboard"
                onPress={() => nav.navigate("Leaderboard")}
            />
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});


export default Social;