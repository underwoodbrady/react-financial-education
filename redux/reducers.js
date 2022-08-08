import { INCREASE_COINS, DECREASE_COINS, INCREASE_STREAK, SET_PREFERENCES, UPDATE_LEARNING } from "./actions";

const INITIAL_STATE = {
    coins: 7,
    streak: 3,
    lessonCompletion:[
        [false, false, false],
        [false, false, false],
        [false, false, false, false],
        [false, false, false, false],
    ],
    userPreferences: []
}

const globalReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case INCREASE_COINS:
            return {...state, coins: state.coins + action.payload};
        case DECREASE_COINS:
            return {...state, coins: state.coins - action.payload};
        case INCREASE_STREAK:
            return {...state, streak: state.streak + action.payload};
        case SET_PREFERENCES:
            return {...state, userPreferences: action.payload}
        case UPDATE_LEARNING:
            let updateComplete = [...state.lessonCompletion];
            updateComplete[action.payload.lesson][action.payload.objective] = true;
            return {...state, lessonCompletion: updateComplete}
        default:
            return state;
    }
}

export default globalReducer;