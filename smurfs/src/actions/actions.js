import axios from 'axios'

export const SET_GETTING_SMURF_DATA = "SET_GETTING_SMURF_DATA"
export const SET_SMURF_DATA = "SET_SMURF_DATA"
export const SET_SMURF_ERROR = "SET_SMURF_ERROR"
export const ADD_NEW_SMURF = "ADD_NEW_SMURF"
export const SET_NEW_SMURF = "SET_NEW_SMURF"

export const getSmurfData = () => dispatch => {
    dispatch({ type: SET_GETTING_SMURF_DATA })
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log('api', res.data)
        dispatch({ type: SET_SMURF_DATA, payload: res.data })
    })
    .catch(err => {
        console.log('get API failed', err.message)
        dispatch({ type: SET_SMURF_ERROR, payload: err.message })
    })
}

export const addNewSmurf = (smurfs) => dispatch => {
    console.log('add', dispatch)
    dispatch({ type: ADD_NEW_SMURF })
    axios
    .post('http://localhost:3333/smurfs', smurfs)
    .then(res => {
        console.log('api', res.data)
        dispatch({ type: SET_NEW_SMURF, payload: res.data })
    })
    .catch(err => {
        console.log('get API failed', err.message)
    })
}