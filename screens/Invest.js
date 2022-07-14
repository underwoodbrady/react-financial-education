<<<<<<< HEAD
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
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, Alert, Image} from 'react-native';
import CustomText from '../components/CustomText';

const Invest = () => (
	<View style={styles.invest}>
		<CustomText>Invest</CustomText>
		<Text>Hello there!</Text>
		<StatusBar style="auto" />
		<Button
        title="Press me"
        onPress={() => Alert.alert('Thanks for clicking me!')}
      />
	  <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
	</View>

);

const styles = StyleSheet.create({
	invest: {
		flex: 1,
		backgroundColor: 'yellow',
		alignItems: 'center',
		justifyContent: 'center',
	},
>>>>>>> 4a84eeaee0222aa125a0c0bc95239b67b61ba168
});

export default Invest;
