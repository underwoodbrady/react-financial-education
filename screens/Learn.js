import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, ScrollView} from "react-native";
import CustomText from "../components/CustomText";
import LearnPathHeader from "../components/learn/LearnPathHeader";
import LearnPathNode from "../components/learn/LearnPathNode";

import { useNavigation } from "@react-navigation/native";

const Learn = () => {
    const nav = useNavigation();
    return (
        <ScrollView style={styles.container} contentContainerStyle={{
            backgroundColor: '#01101B',
            padding: 32,
            alignItems:"center",
        }}>
            <View style={{marginTop:58, marginBottom:16}}><LearnPathHeader/></View>
            <View style={{marginTop:12, marginBottom:12}}><LearnPathNode/></View>
            <View style={{marginTop:12, marginBottom:12}}><LearnPathNode/></View>
            <View style={{marginTop:12, marginBottom:12}}><LearnPathNode/></View>
            <View style={{marginTop:12, marginBottom:12}}><LearnPathNode/></View>

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
        </ScrollView>
    );
};

const styles = StyleSheet.create({
	container: {
	
	},
});


export default Learn;