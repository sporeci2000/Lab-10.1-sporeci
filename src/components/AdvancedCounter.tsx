import { useState, useEffect } from "react";

const AdvancedCounter = () => {

    //State for count and history of counts
    const [count, setCount] = useState<number>(0); //Count initialized at 0
    const [track, setTrack] = useState<number[]>([]); //store past values
    const [loaded, setLoaded] = useState(false); // track if load done

    //Increment and decrement functions
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    // Reset both count and Track history
    const reset = () => {
        setCount(0);
        setTrack([]);
        localStorage.removeItem("count");
        localStorage.removeItem("track");
    };

    //Load saved count from localStorage
    useEffect(() => {
        const trackedCount = localStorage.getItem("count");
        const savedTrack = localStorage.getItem("track");

        if (trackedCount) {
            setCount(parseInt(trackedCount));
        }

        if (savedTrack) {
            setTrack(JSON.parse(savedTrack));
        }

        setLoaded(true); // mark loading complete

    }, []);


    // Add count to track and save to localStorage only after load
    useEffect(() => {
        if (!loaded) return; // skip initial run before loading saved data

        setTrack((prev) => {
            if (prev.length > 0 && prev[prev.length - 1] === count) {
                return prev;
            }
            const updated = [...prev, count];
            localStorage.setItem("count", count.toString());
            localStorage.setItem("track", JSON.stringify(updated));
            return updated;
        });
    }, [count, loaded]);


    return (
        <div>
            <h3> Counter </h3>
            <h2>Current count: {count} </h2>

            <button onClick={increment}> Increment </button>
            <button onClick={decrement}> Decrement </button>
            <button onClick={reset}>Reset</button>

            <div>
                <h4> Count History: </h4>
                <p>{track.join(", ")}</p>
            </div>
        </div>
    );
};

export default AdvancedCounter;