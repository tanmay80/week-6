import { useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. 
//Pass these functions to a child component which has buttons to perform the increment and decrement actions. 
//Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    //This dosen't work cuz The useState hook's state updates are asynchronous, 
    //meaning that calling setCount does not immediately update the count variable. 
    //Instead, it schedules an update to the state, and React will re-render the component with the new state value.

        // const handleIncrement=useCallback(()=>{
        //    setCount(count+1) 
        // },[]) 

        // const handleDecrement=useCallback(()=>{
        //     setCount(count-1)
        // },[])

    const handleIncrement = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);
    
    const handleDecrement = useCallback(() => {
        setCount(prevCount => prevCount - 1);
    }, []);


    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = ({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
);
