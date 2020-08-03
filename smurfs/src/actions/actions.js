import axios from 'axios'

export const SET_GETTING_SMURF_DATA = "SET_GETTING_SMURF_DATA"
const SET_SMURF_DATA = "SET_SMURF_DATA"

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
    })
}