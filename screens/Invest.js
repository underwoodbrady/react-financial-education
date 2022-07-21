import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";
import CustomText from "../components/CustomText";
import CustomButton from "../components/CustomButton";

import { useNavigation } from "@react-navigation/native";

const Invest = () => {
    const nav = useNavigation();
    return (
        <View style={styles.invest}>
			{Array(10)
        		.fill()
        		.map((_, i) => {
          		return <Text style={{ lineHeight: 30 }} key={Math.random()}>{i}</Text>;
        }	)}
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
                    uri: "https://images.app.goo.gl/Apzf25qJz1kHD1bG9",
                }}
                style={{ width: 100, height: 100 }}
            />
			<Image source={require('../assets/logo.png')}
					style={{ width: 100, height: 10 }}
			/>
      		<CustomButton title="hi" size="sm" backgroundColor="#007bff" 
				link = "Daily Spin"/>
        </View>
    );
};

const styles = StyleSheet.create({
    invest: {
		flex: 6,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Invest;
