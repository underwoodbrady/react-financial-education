import { Text, View, Image, StyleSheet } from 'react-native';
import Goals from './Goals';

const GoalsContainer = ({ goalsData = [] }) => (
	<View style={styles.container}>
        {goalsData.map((goal,i)=>(
            <View style={styles.budget}>
            <Goals label={goal.text} i={i+1} complete={goal.complete} key={goal.budgetText}/>
            </View>
        ))}
	</View>
);

const styles = StyleSheet.create({
	budget: {
        marginBottom:16,
    },
});

export default GoalsContainer;
