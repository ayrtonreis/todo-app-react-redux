import { combineReducers } from 'redux'
import { VisibilityFilters } from './actions'

function todos(state = [], action){
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    timestamp: action.timestamp,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(
                todo =>
                    todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        default:
            return state
    }
}

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action){
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
   todos,
   visibilityFilter
});

export default rootReducer;