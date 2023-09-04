import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="h-100 d-flex align-items-center justify-content-center mt-8">
            <div className='grid'>
                <div className='row'>
                    <div className='col-md-12'>
                        Count: {count}
                    </div>
                    <div className='col-md-12'>
                        <button className="btn btn-primary me-1" onClick={increment}> Increment</button>
                        <button className="btn btn-secondary" onClick={reset}> Reset</button>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Counter;
