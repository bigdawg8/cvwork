import React from 'react';
import axios from 'axios';
import X from './X.jsx';
import Y from './Y.jsx';
import Z from './Z.jsx';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
export default function App(){
    return(
        <>
        <Router>
            <Routes>
                <Route path='/' element={<X />} />
                <Route path='/y' element={<Y />} />
                <Route path='/z/:id' element={<Z />} />
            </Routes>
        </Router>
        </>
    );
}