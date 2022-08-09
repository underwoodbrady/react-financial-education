import MatchingGame from '../play/MatchingGame';
import SavingsMatchingOneAnswers from '../../Data/GameData/MatchingGame/matching_1';

import { useDispatch } from 'react-redux';
import { completedObjective } from '../../redux/actions';
import { increaseCoins } from '../../redux/actions'; 

const SavingsMatchingOne = () => {
    const dispatch = useDispatch();
	return (
		<MatchingGame
			matchingAnswers={SavingsMatchingOneAnswers}
			onStartGame={() => {
                dispatch(completedObjective(0,2));
                dispatch(increaseCoins(3));
            }}
		/>
	);
};

export default SavingsMatchingOne;
