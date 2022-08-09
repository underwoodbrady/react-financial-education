export const INCREASE_COINS = 'IncreaseCoins';
export const DECREASE_COINS = 'DecreaseCoins';

export const INCREASE_STREAK = 'IncreaseStreak';

export const SET_PREFERENCES = 'SetPreferences';
export const UPDATE_LEARNING = 'UpdateLearning';

export const increaseCoins = (amount) => ({
	type: INCREASE_COINS,
	payload: amount,
});

export const decreaseCoins = (amount) => ({
	type: DECREASE_COINS,
	payload: amount,
});

export const increaseStreak = {
	type: INCREASE_STREAK,
	payload: 1,
};

export const setPreferences = (preferencesArray) => ({
	type: SET_PREFERENCES,
	payload: preferencesArray,
});

export const completedObjective = (lesson, objective) => ({
	type: UPDATE_LEARNING,
	payload: { lesson: lesson, objective: objective },
});
