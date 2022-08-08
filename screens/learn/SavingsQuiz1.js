import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';

import Quiz from '../../components/learn/Quiz';
import SavingsQuizOneQuestions from '../../Data/SavingsQuizOneData';
import { useDispatch } from 'react-redux';
import { completedObjective } from '../../redux/actions';

const SavingsQuizOne = () => {
    const nav = useNavigation();
    const dispatch = useDispatch();
	return (
		<View style={styles.container}>
			<Quiz questions={SavingsQuizOneQuestions} onGoBack={() => {
                dispatch(completedObjective(0,1));
                nav.goBack();
            }} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
});

export default SavingsQuizOne;
