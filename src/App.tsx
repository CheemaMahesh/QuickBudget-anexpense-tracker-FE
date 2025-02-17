import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Auth/Signup';
import SignIn from './Auth/Signin';
import Home from './Home';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
