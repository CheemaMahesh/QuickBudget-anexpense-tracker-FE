import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Auth/Signup';
import SignIn from './Auth/Signin';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<div>Hi</div>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
