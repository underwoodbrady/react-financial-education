import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import CustomText from '../../components/CustomText';

import { useNavigation } from "@react-navigation/native";


const Tools = () => {
    const nav = useNavigation();
	return(<View style={styles.container}>
		<CustomText>Tools</CustomText>
        <Button title="Go to invest page" onPress={() => nav.navigate("Invest")}/>
        <Button title="Go to planning" onPress={() => nav.navigate("Planning")}/>
		<StatusBar style="auto" />
	</View>);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});


export default Tools;