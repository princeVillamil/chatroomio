import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
    //Hero - Add links to socials, Brand, Account, Login, Signup, Join ChatRoom
    //Hero - Add logic to join chat room
    //Hero - Add light and dark mode
		//Hero - Fix color scheme

import Hero from './pages/Hero'
import Login from './pages/Login'
import Signup from './pages/Signup';
import MainChatHome from './pages/MainChatHome';

function App() {
  return (
    <BrowserRouter>
        <Routes>

            <Route path='/' element={<Hero/>}/>

            <Route path='/login' element={<Login/>}/>

            <Route path='/signup' element={<Signup/>}/>

            <Route path='/messages' element={<MainChatHome/>}/>

            {/* <Route path='/login' element={<Login/>}/>

            <Route path='/menu' element={<Menu/>}/>

            <Route path='/game/:status' element={<Game/>}/> */}

        </Routes>
    </BrowserRouter>
  );
}
export default App;
