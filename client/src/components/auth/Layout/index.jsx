import React from "react";
import { Outlet } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";
import "./Layout.css";


const AuthLayout = () => {
    return (
        <>
            <Container fluid className="vh-100 p-1 overflow-hidden">
                <Row className="h-100 g-0">
                    {/* LEFT PANEL */}
                    <Col
                        md="6"
                        className="d-flex flex-column justify-content-center align-items-center text-center bg-dark text-white"
                    >
                        <h1 className="fs-bold fs-1">Welcome to Mistanna</h1>
                        <p className="fs-5 text-muted mt-3">
                            वह मिष्ठान जो आपकी आत्मा को तृप्त करे।
                        </p>
                    </Col>

                    {/* RIGHT PANEL */}
                    <Col md="5" className="d-flex flex-column align-items-center justify-content-center mx-3" >  
                         <Outlet />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AuthLayout;