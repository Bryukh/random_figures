import { ADD_FIGURE, REMOVE_FIGURE } from './actions'
import { combineReducers } from 'redux';

const initialState = {
    figures: []
};

function figures(state = [], action = {}) {
    switch (action.type) {
        case ADD_FIGURE:
            return [...state, action.figure];
        case REMOVE_FIGURE:
            return state.filter((el, i) => i !== action.index);
        default:
            return state
    }
}

const figuresApp = combineReducers({
    figures
});

export default figuresApp;
