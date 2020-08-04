import { 
    SET_GETTING_SMURF_DATA,
    SET_SMURF_DATA,
    // SET_SMURF_ERROR,
    // ADD_NEW_SMURF 
} from '../actions/actions'

const initialState = {
    smurfs: [],
    age: '',
    height: '',
    id: '',
    isFetching: false,
    error: ''
}
    

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_GETTING_SMURF_DATA:
            return {
                ...state,
                isFetching: true,
            };
        case SET_SMURF_DATA:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload,
                age: '',
                height: '',
                error: ''
            };
        // case SET_SMURF_ERROR:
        //     return {
        //         ...state,
        //         isFetching: false,
        //         error: action.payload
        //     }
        // case ADD_NEW_SMURF:
        //     const newSmurf = {
        //         id: Date.now(),
        //         smurf: action.payload,
        //         age: '',
        //         height: '',
        //         isFetching: false
        //     }
        // return {
        //     ...state,
        //     smurf: [...state.smurf, newSmurf]
        // }       
        default:
            return state
    }
}