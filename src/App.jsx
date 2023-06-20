import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StateHook from './components/StateHook';
import EffectHook from './components/EffectHook';
import ContextHook from './components/ContextHook';
import ReducerHook from "./components/ReducerHook";
import CallbackHook from "./components/useCallback/CallbackHook";
import MemoHook from "./components/MemoHook";
import RefHook from "./components/RefHook";
import CounterHook from "./components/CounterHook";
import './App.css';

export const UserContext = React.createContext();

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<StateHook />} />
          <Route path="/useEffect" element={<EffectHook />} />
          <Route path="/useContext" element={
            <UserContext.Provider value={"Rahul"}>
              <ContextHook />
            </UserContext.Provider>
          } />
          <Route path="/useReducer" element={<ReducerHook />} />
          <Route path="/useCallback" element={<CallbackHook />} />
          <Route path="/useMemo" element={<MemoHook />} />
          <Route path="/useRef" element={<RefHook />} />
          <Route path="/customHook" element={<CounterHook />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
