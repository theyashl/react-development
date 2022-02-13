//import logo from './logo.svg';
import './App.css';
import { useNavigate, Route, Routes } from 'react-router-dom';
import UserDetails from './UserDetails';
import Home from './Home'
import Users from './Users';
import Blogs from './Blogs';
import BlogDetails from './BlogDetails';

function App() {
    //let projects = undefined;
    //fetch("https://reqres.in/api/users").then(response => response.json()).then(data => projects = data.data)
    return (
        <>
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='users/details/:userId' element={<UserDetails />} />
                    <Route path='/blogs' element={<Blogs />} />
                    <Route path='/blogs/:blogId' element={<BlogDetails />} />
                </Routes>
            </div>
        </>
        )
}

export default App;
