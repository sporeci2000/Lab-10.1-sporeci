import { useState } from "react";

const AdvancedCounter = () => {
    //State for count
    const [count, setCount] = useState<number>(0); //Count initialized at 0

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <h3> Counter </h3>
            <h2>Current count: {count} </h2>

            <button onClick = {increment}> Increment </button>
            <button onClick = {decrement}> Increment </button>
        </div>
    );
};

export default AdvancedCounter;