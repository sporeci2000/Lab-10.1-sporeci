import { useState, useEffect } from "react";

const AdvancedCounter = () => {
    //State for count
    const [count, setCount] = useState<number>(0); //Count initialized at 0
    const [track, setTrack] = useState<number[]>([]); //past values

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    //Tracking everything
    //useEffect runs after every render when count changes
    useEffect(() => {
        setTrack((prev) => [...prev, count]);
    }, [count]); 

    return (
        <div>
            <h3> Counter </h3>
            <h2>Current count: {count} </h2>

            <button onClick = {increment}> Increment </button>
            <button onClick = {decrement}> Increment </button>

            <div>
                <h4> Count History: </h4>
                <p>{track.join(", ")}</p>
            </div>
        </div>
    );
};

export default AdvancedCounter;