import React from 'react'
import { connect } from 'react-redux'
import { getSmurfData } from '../actions/actions'

const SmurfData = props => {
    if (props.isFetching) {
        return <div>Fetching Smurf.....</div>;
    }

    return (
        <>
            <button>List of Smurfs</button>
            {props.smurf.map(smurfs => (
            <div>{smurfs.name}</div>
            ))}
        </>
    )
};

const mapStateToProps = state => {
    return {
        smurf: state.smurf,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {getSmurfData}
    )(SmurfData)