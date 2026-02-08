import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Form, Label, Input } from "reactstrap";

const Register = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="mx-auto w-100">
      <div className="text-center">
        <Row>
          <Col xs="12">
            {/* Makes POST request to /login route */}
            <Form action="auth/register" method="POST">
              <h1 className="mb-3 fw-normal" >Create New Account</h1>
              <Label for="First Name" className="sr-only">First Name</Label>
              <Input
                type="text"
                className="form-control mb-2"
                placeholder="First Name"
                name="firstName"
              >
              </Input>
              <Label for="Last Name" className="sr-only">Last Name</Label>
              <Input
                type="text"
                className="form-control mb-2"
                placeholder="Last Name"
                name="lastName"
              >
              </Input>
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
              <Label for="Confirm Password" className="sr-only">Confirm Password</Label>
              <Input
                type="password"
                className="form-control mb-2"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoFocus
              >
              </Input>
              <Button type="submit" className="btn btn-dark"
              // onClick={handleSubmit}
              >Register</Button>
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
            <p className="text-muted text-center mt-3">Already have an Account
              <span className="fw-semibold text-primary ms-2">
                <Link to="/auth/login">Login</Link>
              </span>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Register;
