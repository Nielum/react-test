import React, { useState } from 'react';

function EventHandlingCallback(props) {

    const [count, setCount] = useState(0);

    const handleIncrementCounter = () => {
        setCount(count + 1);
    };

    const handleIncrement = () => {
        const updatedCount = count + 1;
        props.onIncrement(updatedCount);
    };

    return (
        <div style={{
            textAlign: 'center',
            margin: '20px',
        }}>
            <h3>Counter: {count}</h3>
            <button className="btn btn-info me-2" onClick={handleIncrementCounter}>
                + Increment Counter
            </button>
            <button className="btn btn-secondary" onClick={handleIncrement}>
                Call Parent Counter
            </button>
        </div>
    );
}

export default EventHandlingCallback;
