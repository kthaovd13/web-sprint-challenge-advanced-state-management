import React from 'react'

const SmurfForm = props => {
    return (
        <div className="Form">
            <form>
                <label>
                    <input
                    type="text"
                    smurf="name"
                    placeholder="NAME"
                    />
                </label>
                <br/>
                <label>
                <input
                    type="text"
                    age="age"
                    placeholder="AGE"
                    />
                </label>
                <br/>
                <label>
                <input
                    type="text"
                    height="height"
                    placeholder="HEIGHT"
                    />
                </label>
            </form>
            <button>Add New Smurf</button>
        </div>
    )
};

export default SmurfForm