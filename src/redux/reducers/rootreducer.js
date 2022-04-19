import {GETRequest} from '../actionTypes/index'

const initState = {
    data: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case GETRequest:
            let response = [...state.data]
            console.log('action dispatch', action.payload);
            // return {
            //     ...state,
            //     state: action.payload
            // }
            return Object.assign({}, state, {
                data: action.payload
              })
            
    
        default:
            return state;
    }
    return state;
}

export default rootReducer