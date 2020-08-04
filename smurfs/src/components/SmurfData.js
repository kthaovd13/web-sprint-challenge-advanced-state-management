import React from 'react'
import { connect } from 'react-redux'
import { getSmurfData } from '../actions/actions'

const SmurfData = props => {
    if (props.isFetching) {
        return <div>Fetching Smurf.....</div>;
    }

    return (
        <>
            <button onClick={() => props.getSmurfData()}>List of Smurfs</button>
            {props.smurfs.map(smurf => {
                return  <div key="smurf.id">
                            <div>Name: {smurf.name}</div>
                            <div>Age: {smurf.age}</div>
                            <div>Height: {smurf.height}</div>
                            <div>Id: {smurf.id}</div>
                        </div>
            })}
        </>
    )
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        age: state.age,
        height: state.height,
        id: state.id,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {getSmurfData}
    )(SmurfData)