import { useDispatch } from 'react-redux';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { loginFailed, loginSuccess } from './redux/login/actions';
/*
 * bring state as prop and set it here
 * like prop = setstate(...) blah blah blah
 * */

const Login = (props) => {
    const { setShowLoginPage } = props
    const dispatch = useDispatch();

    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();

        var { email, password } = document.forms[0];

        // Find user login info
        postData("https://reqres.in/api/login", {
            "email": email.value,
            "password": password.value
        }).then((data) => {
            console.log(data)
            if (data.token) {
                localStorage.setItem('loggedIn', true);
                localStorage.setItem('username', email);
                localStorage.setItem('password', password);
                dispatch(loginSuccess(document.forms[0]));
            }
            else {
                dispatch(loginFailed());
            }
        });
        /*userData.then(
            setShowLoginPage(false)
        )

        // Compare user info
        if (userData) {
            if (userData["token"]) {
                setShowLoginPage(false);
            }
            /*if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }*\
        } else {
            // Username not found
            console.log("Umnn uhh");
            //setErrorMessages({ name: "uname", message: errors.uname });
        }*/
    };

    return (
        <>
            <Form inline onSubmit={handleSubmit}>
                <FormGroup floating>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Email"
                        type="email"
                    />
                    <Label for="exampleEmail">
                        Email
                    </Label>
                </FormGroup>
                {' '}
                <FormGroup floating>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Password"
                        type="password"
                    />
                    <Label for="examplePassword">
                        Password
                    </Label>
                </FormGroup>
                {' '}
                <Button>
                    Submit
                </Button>
                <button type="button" onClick={() => setShowLoginPage(false)}>Toggle</button>
            </Form>
        </>
        )
}

export default Login;