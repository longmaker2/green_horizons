import React, { useState, useContext, useEffect } from "react";

import Cookies from "js-cookie";

import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import Loading from "./Loading";

import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";

import { AuthContext } from "./../context/AuthContext";
import { BASE_URL } from "./../utils/config";

const Login = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  const [credentials, setCredentials] = useState({
    identifier: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) {
        alert(result.message);
      } else {
        // Set the accessToken cookie
        Cookies.set("accessToken", result.token, { path: "/" });

        console.log("Received Token:", result.token); // Log the received token

        dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
        navigate("/");
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section>
          <Container>
            <Row>
              <Col lg="8" className="m-auto">
                <div className="login__container d-flex justify-content-between">
                  <div className="login__img">
                    <img src={loginImg} alt="login" />
                  </div>

                  <div className="login__form">
                    <div className="user">
                      <img src={userIcon} alt="" />
                    </div>
                    <h2>Login</h2>

                    <Form onSubmit={handleClick}>
                      <FormGroup>
                        <input
                          type="text"
                          placeholder="Enter your username or email"
                          required
                          id="identifier"
                          onChange={handleChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <input
                          type="password"
                          placeholder="Enter your password"
                          required
                          id="password"
                          onChange={handleChange}
                        />
                      </FormGroup>
                      <Button
                        className="btn secondary__btn auth__btn"
                        type="submit"
                      >
                        Login
                      </Button>
                    </Form>
                    <p>
                      Don't have an account? <Link to="/register">Create</Link>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </>
  );
};

export default Login;
