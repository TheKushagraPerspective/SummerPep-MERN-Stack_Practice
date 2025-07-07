import React from 'react';

const Child2 = () => {
    function handleClick(fruit){
        alert("I am inside HandleClick function",fruit)
    }
    return (
        <div>
            <h1>This is child 2</h1>
            <button onClick={()=>handleClick('apple')}>Click Me</button>
        </div>
    );
};

export default Child2;