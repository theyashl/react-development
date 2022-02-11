import { useState } from 'react';
import { useSelector } from 'react-redux';
import Login from './login'
import Users from './Users'
import { Row, Col, Card, CardTitle, Button } from 'reactstrap';


const Home = () => {
    const [showLoginPage, setShowLoginPage] = useState(true);
    let meResponse;
    const isLoggedIn = useSelector((state) => state.login.loggedIn);
    console.log("isLoggedIn", isLoggedIn);
    if (!isLoggedIn) {
        meResponse =
            <div>
                <h1>Login</h1>
                <Login setShowLoginPage={setShowLoginPage} />
            </div>
    }
    else {
        meResponse =
            <div>
                <h1>Users</h1>
                <div>
                    <Users />
                </div>
            </div>            
    }
    return (meResponse);
}

export default Home;
