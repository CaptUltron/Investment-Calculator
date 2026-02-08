import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <>
            <div className="jumbotron centered">
                <div className="container">
                    <i className="fas fa-key fa-6x"></i>
                    <h1 className="display-3">Grab-a-Bite</h1>
                    <p className="lead">One stop for your cravings!</p>
                    <hr></hr>
                    <Link className="btn btn-light btn-lg" to="/register">Register</Link>
                    <Link className="btn btn-dark btn-lg ms-2" to="/login">Login</Link>
                </div>
            </div>
        </>
    )
}

export default Home;




