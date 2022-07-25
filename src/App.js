import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Chat from './components/Chat';
import Aboutus from './components/Aboutus';
import { BrowserRouter,Routes,Route,Redirect, Router} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/chat" element={<Chat/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
