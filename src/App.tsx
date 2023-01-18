import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";

function App() {
    const {count} = useAppSelector(state => state.userReducer)
    const {increment} = userSlice.actions
    const dispacth = useAppDispatch()

  return (
    <div className="App">
      <h1>{count}</h1>
        <button onClick={() => dispacth(increment(1))}>
            INCREMENT
        </button>
    </div>
  );
}

export default App;
