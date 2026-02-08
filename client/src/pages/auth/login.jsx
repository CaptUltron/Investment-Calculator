import React, { useState } from "react";
import { Button, Row, Col, Form, Label, Input } from "reactstrap";
// import { login } from "../../utils/apiCaller";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // const handleSubmit = async (e) => {
    //     try {
    //     e.preventDefault();
    //     const data = await login(username, password);
    //     console.log(data);
    //         if (data?.success) {
    //             navigate("/secret");
    //         } else alert("Login failed");
    //     }
    //     catch (error) {
    //         console.error(error);
    //     }
    // }

    return (
        <>
            <div className="container mt-5">
                <Row>
                    <Col xs="12">
                        {/* Makes POST request to /login route */}
                        <Form action="/login" method="POST">
                            <h1 className="h3 mb-3 font-weight-normal" >Login</h1>
                            <Label for="email" className="sr-only">Email address</Label>
                            <Input
                                type="email"
                                className="form-control mb-2"
                                placeholder="Email address"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                autoFocus
                            >
                            </Input>
                            <Label for="password" className="sr-only">Password</Label>
                            <Input
                                type="password"
                                className="form-control mb-2"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            >
                            </Input>
                            <Button type="submit" className="btn btn-dark" 
                            // onClick={handleSubmit}
                            >Login</Button>
                        </Form>
                    </Col>

                    {/* <Col xs="4">
                        <div className="card">
                            <div className="card-body">
                                <a className="btn btn-block" href="/auth/google" role="button">
                                    <i class="fab fa-google"></i>
                                    Sign In with Google
                                </a>
                            </div>
                        </div>
                    </Col> */}
            <Col xs="12">
                <p className="text-muted text-center mt-3">Don't have an Account
                    <span className="fw-semibold text-primary ms-2">
                        <Link to="/auth/register">Register</Link>
                    </span>
                </p>
            </Col>
                </Row>
            </div>
        </>
    )
};


export default Login;

