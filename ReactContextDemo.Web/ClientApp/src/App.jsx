import React, { useState, useContext, createContext } from 'react';
import './App.css';

const CountContext = createContext();

const Parent = () => {
    const [count, setCount] = useState(0);

    const onClick = () => setCount(count + 1);

    const contextValues = {
        count,
        setCount
    }

    return <>
        <CountContext.Provider value={contextValues}>
            <h3>Parent</h3>
            <button className='btn btn-dark btn-lg w-50' onClick={onClick}>{count}</button>
            <Child />
        </CountContext.Provider>
    </>
}

const Child = () => {
    return <>
        <h2>Child Component</h2>
        <GrandChild />
    </>
}

const GrandChild = () => {

    const { count, setCount } = useContext(CountContext);

    return <>
        <h1>Grand Child Component - {count}</h1>
        <button className='btn btn-danger w-50' onClick={() => setCount(0)}>Reset</button>
    </>
}

const App = () => {
    return (
        <div className="app-container">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <Parent />
            </div>
        </div>
    );
};

export default App;