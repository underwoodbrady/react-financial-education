import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'darkcyan',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

class Quiz extends React.Component {
    state = {
        correctCount: 0,
        totalCount: this.props.navigation.getParam("questions", []).length,
        activeQuestionIndex: 0,
        answered: false,
        answerCorrect: false
      };

}

const IntroQuiz = () => (
	<View style={styles.container}>
		<Text>DailySpin</Text>
		<StatusBar style="auto" />
	</View>
);

export default IntroQuiz;