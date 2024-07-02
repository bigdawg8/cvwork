import React from 'react';
import {BrowserRouter as BrowserRouter,Routes,Route} from 'react-router-dom';
import ContactList from './components/ContactList.jsx';
import AddContact from './components/AddContact.jsx';


const App = () =>{
    return(
        <>
            <BrowserRouter>
            <div>
                <Routes>
                    <Route path='/' element={<ContactList />} />
                    <Route path='/add-contact' element={<AddContact />} />
                </Routes>
            </div>
            </BrowserRouter>
        </>
    );

}
export default App;