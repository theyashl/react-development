import { useState } from 'react';
import Login from './login'
import Users from './Users'


const Home = () => {
    const [showLoginPage, setShowLoginPage] = useState(true);
    let meResponse;
    const title = showLoginPage ? "Login" : "Project Card";
    if (showLoginPage) {
        meResponse =
            <div>
                <h1>{title}</h1>
                <Login setShowLoginPage={setShowLoginPage} />
            </div>
    }
    else {
        meResponse =
            <div>
                <h1>{title}</h1>
                <div>
                    <Users />
                </div>
            </div>
    }
    return (meResponse);
}

export default Home;