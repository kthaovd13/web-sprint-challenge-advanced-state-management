import { SET_GETTING_SMURF_DATA } from '../actions/actions'

const initialState = {
    smurf: [],
    isFetching: false,
    error: ''
}
    

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_GETTING_SMURF_DATA:
            console.log(action.payload)
            return {
                ...state,
                isFetching: true,
                smurf: action.payload,
                error: ''
            };

        default:
            return state
    }
}