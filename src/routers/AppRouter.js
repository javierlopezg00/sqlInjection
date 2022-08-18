import React from 'react'

import { Routes, Route } from "react-router-dom";
import MainImage from '../components/MainImage/MainImage';
import SqlPage from '../components/SqlPage';


export default function AppRouter() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainImage />} />
                <Route path="/sqlI" element={<SqlPage />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
                   
            </Routes>
        </div>
    )
}
  