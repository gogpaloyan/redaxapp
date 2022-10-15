import { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './features/component/main/about/Register';
import Contact from './features/component/main/contact/Contact';
import Navbar from './features/component/navbar/Navbar';
import TodoApp from './features/todo/TodoApp';



function App() {

  const [value, setValue] = useState(true)

 
  
  return (

    <div className={value ? "App" : "app"}>

 
             
    <Navbar value={value}  setValue={setValue}/>
      <div>
    <Routes >
      <Route path='/' element={<Contact value={value}/>} />
      <Route path='posts' element={<Register value={value}/>} />
      <Route path='el'  element={<TodoApp value={value}/> } />

    </Routes>
     <div>
        <span  className={value ? "btn" : "Btn"}
         onClick={() => setValue(!value)}>{value ? "onFocus" : "offFocus"}
        </span>
        

        </div>
    </div>
  
    </div>
         
  );
}

export default App;
