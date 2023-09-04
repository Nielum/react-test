import React, { useState } from 'react'
import EventHandlingCallback from '../EventHandlingCallback';

const HandleIncrementCallback = () => {
    const [parentCounter, setParentCounter] = useState(0);

    const handleIncrementCallback = (updatedCount) => {
        setParentCounter(updatedCount);
    };
    return (
        <div className='container'>
            <h1>Increment Call Back</h1>
            <div className="app">

                <EventHandlingCallback onIncrement={handleIncrementCallback} />
                <div className='d-flex align-items-center justify-content-center'>Parent Counter Value: {parentCounter}</div>
            </div>
        </div>
    )
}

export default HandleIncrementCallback