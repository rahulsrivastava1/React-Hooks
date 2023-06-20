import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">React Hooks</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">useState</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/useEffect">useEffect</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/useContext">useContext</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/useReducer">useReducer</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/useCallback">useCallback</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/useMemo">useMemo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/useRef">useRef</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/customHook">Custom Hook</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;