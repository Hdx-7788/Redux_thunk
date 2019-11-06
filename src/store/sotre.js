import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk"

function ActiveState(state = { num: 1 }, action) {
    switch (action.type) {
        case "ADD":
            return {
                ...state, num: ++state.num
            }
            break;


    }
    return state
}
let store = createStore(ActiveState, applyMiddleware(thunk))
export default store