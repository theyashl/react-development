//import logo from './logo.svg';
import './App.css';
import { useNavigate, Route, Routes } from 'react-router-dom';
import UserDetails from './UserDetails';
import Home from './Home'

function App() {
    //let projects = undefined;
    //fetch("https://reqres.in/api/users").then(response => response.json()).then(data => projects = data.data)
    return (
        <>
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/details/:userId' element={<UserDetails />} />
                </Routes>
            </div>
        </>
        )
}

export default App;
