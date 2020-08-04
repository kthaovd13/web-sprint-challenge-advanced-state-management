import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addNewSmurf } from '../actions/actions'


    const SmurfForm = props => {
    console.log('new', props)
    const [newSmurf, setNewSmurf] = useState({name: '', age:'', height: ''});
    
    const submitNewSmurf = e => {
        console.log('submitted!')
        e.preventDefault()
        props.addNewSmurf(newSmurf)
    }

    const handleChanges = e => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
    }

    return (
        <div className="Form">
            <form onSubmit={submitNewSmurf}>
                <label>
                    <input
                    id='name'
                    type="text"
                    name="name"
                    placeholder="NAME"
                    value={newSmurf.name}
                    onChange={handleChanges}
                    />
                </label>
                <br/>
                <label>
                <input
                    id='age'
                    type="text"
                    name="age"
                    placeholder="AGE"
                    value={newSmurf.age}
                    onChange={handleChanges}
                    />
                </label>
                <br/>
                <label>
                <input
                    id='height'
                    type="text"
                    name="height"
                    placeholder="height"
                    value={newSmurf.height}
                    onChange={handleChanges}
                    />
                </label>
            </form>
            <button type="submit">Add New Smurf</button>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        age: state.age,
        height: state.height,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps, 
    { addNewSmurf }
    )(SmurfForm) 