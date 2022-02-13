import { useState } from 'react';
import { useSelector } from 'react-redux';
import Login from './login'
import Users from './Users'
import { Row, Col, Card, CardTitle, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
    const [showLoginPage, setShowLoginPage] = useState(true);
    const navigate = useNavigate();
    const navigateToUsers = () => navigate('/users');
    const navigateToBlogs = () => navigate('/blogs');
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
        <Row>
  <Col sm="6">
    <Card body>
      <CardTitle tag="h5">
        Users
                    </CardTitle>
                    <Button onClick={() => navigateToUsers()}>
        See Users
      </Button>
    </Card>
  </Col>
  <Col sm="6">
    <Card body>
      <CardTitle tag="h5">
        Blogs
                    </CardTitle>
                    <Button onClick={() => navigateToBlogs() }>
        See Blogs
      </Button>
    </Card>
  </Col>
</Row>
    }
    return (meResponse);
}

export default Home;


/*
<div>
                <h1>Users</h1>
                <div>
                    <Users />
                </div>
            </div>
 */