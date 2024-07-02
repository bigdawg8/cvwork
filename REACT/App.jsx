import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import X from './X.jsx';
import Y from './Y.jsx';
import Z from './Z.jsx';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<X />} />
          <Route path='/y' element={<Y />} />
          <Route path='/z' element={<Z />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
