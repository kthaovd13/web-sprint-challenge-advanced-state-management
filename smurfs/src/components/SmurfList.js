import React from 'react'
import Smurf from './Smurf'

const SmurfList = props => {
    console.log('smurf', props)
    return (
        <div>
            {props.smurf.map(name => (
                <Smurf 
                key={name.id}
                smurf={name.smurf}
                />
            ))}
        </div>
    )
};

export default SmurfList