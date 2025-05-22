// Modified Login.js - Critical fixes to handle navigation correctly
import React, { useState, useEffect } from 'react';
import {
    Card, CardBody, Col, Container, Input, Label, Row, Button, Form, Alert, Spinner
} from 'reactstrap';

import { Link, useNavigate, useLocation } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Get the page user was trying to access before redirect (if any)
    const from = location.state?.from || "/dashboard";

    const [passwordShow, setPasswordShow] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState("admin@themesbrand.com");
    const [password, setPassword] = useState("123456");
    
    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        
        try {
            // Static login check
            if (email === "admin@themesbrand.com" && password === "123456") {
                console.log("Login successful, redirecting to:", from);
                
                // Set a small timeout to simulate authentication process
                setTimeout(() => {
                    // Store authentication state in localStorage or sessionStorage
                    localStorage.setItem("isAuthenticated", "true");
                    
                    // Use the navigate function to redirect to the original destination
                    navigate(from, { replace: true });
                }, 500);
            } else {
                setError("अवैध ईमेल किंवा पासवर्ड. कृपया पुन्हा प्रयत्न करा.");
                setLoading(false);
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("लॉगिन करताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.");
            setLoading(false);
        }
    };
    
    // Check if already authenticated on component mount - only once!
    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
        
        // If already logged in, redirect to dashboard or attempted page
        if (isAuthenticated) {
            console.log("Already authenticated, redirecting to:", from);
            navigate(from, { replace: true });
        }
        
        // No dependency array at all will cause it to run after every render
        // Empty array makes it run only on mount
    }, []);
    
    return (
        <>
            <div className="auth-page-content mt-lg-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5}>
                            <div style={{
                                padding: '20px',
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                backgroundColor: '#f9f9f9'
                            }}>
                                <div className="text-center mt-2">
                                    <h4 className="text-dark fw-bold fs-3">ई मान्यता प्रणाली</h4>
                                    <p className="fs-6 fw-medium" style={{ color: "#000", letterSpacing: "0.5px" }}>
                                        शाळेसाठी लॉगिन करा
                                    </p>
                                </div>

                                {error && <Alert color="danger">{error}</Alert>}

                                <div className="p-2 mt-4">
                                    <Form onSubmit={handleLogin}>
                                        <div className="mb-3">
                                            <Label htmlFor="email" className="form-label">मोबाईल किंवा ईमेल आयडी</Label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="ri-user-line"></i>
                                                </span>
                                                <Input
                                                    name="email"
                                                    type="email"
                                                    placeholder="ईमेल प्रविष्ट करा"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    autoComplete="username"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <Label htmlFor="password" className="form-label">पासवर्ड</Label>
                                            <div className="input-group auth-pass-inputgroup">
                                                <span className="input-group-text">
                                                    <i className="ri-lock-password-line"></i>
                                                </span>
                                                <Input
                                                    name="password"
                                                    type={passwordShow ? "text" : "password"}
                                                    placeholder="पासवर्ड प्रविष्ट करा"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    autoComplete="current-password"
                                                    required
                                                />
                                                <button
                                                    className="btn btn-light"
                                                    type="button"
                                                    onClick={() => setPasswordShow(!passwordShow)}
                                                >
                                                    <i className={passwordShow ? "ri-eye-off-line" : "ri-eye-line"} />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="form-check mb-3 d-flex justify-content-between align-items-center">
                                            <div>
                                                <Input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="auth-remember-check"
                                                />
                                                <Label className="form-check-label" htmlFor="auth-remember-check">पासवर्ड लक्षात ठेवा</Label>
                                            </div>
                                            <div>
                                                <Link to="/पासवर्ड_विसरला" className="text-primary">पासवर्ड विसरलात?</Link>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <Button
                                                className="btn text-center"
                                                type="submit"
                                                disabled={loading}
                                                style={{
                                                    backgroundColor: 'rgb(255, 128, 0)',
                                                    borderColor: 'rgb(255, 128, 0)',
                                                    color: '#fff',
                                                    width: '100%'
                                                }}
                                            >
                                                {loading ? (
                                                    <>
                                                        <Spinner size="sm" className="me-2" />
                                                        लॉगिन होत आहे...
                                                    </>
                                                ) : "लॉगिन करा"}
                                            </Button>
                                        </div>
                                    </Form>
                                </div>

                                <div className="mt-4 text-center">
                                    <p className="mb-4">
                                        नवीन खाते तयार करा
                                        <Link to="/साइनअप" className="fw-semibold text-primary ms-1">
                                            साइन अप
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Login;








// import React, { useEffect, useState } from 'react';
// import { Card, CardBody, Col, Container, Input, Label, Row, Button, Form, FormFeedback, Alert, Spinner } from 'reactstrap';
// import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";

// //redux
// import { useSelector, useDispatch } from "react-redux";

// import { Link } from "react-router-dom";
// import withRouter from "../../Components/Common/withRouter";
// // Formik validation
// import * as Yup from "yup";
// import { useFormik } from "formik";

// // actions
// import { loginUser, socialLogin, resetLoginFlag } from "../../slices/thunks";

// import logoLight from "../../assets/images/logo-light.png";
// import { createSelector } from 'reselect';
// //import images

// const Login = (props) => {
//     const dispatch = useDispatch();

//     const selectLayoutState = (state) => state;
//     const loginpageData = createSelector(
//         selectLayoutState,
//         (state) => ({
//             user: state.Account.user,
//             error: state.Login.error,
//             loading: state.Login.loading,
//             errorMsg: state.Login.errorMsg,
//         })
//     );
//     // Inside your component
//     const {
//         user, error, loading, errorMsg
//     } = useSelector(loginpageData);

//     const [userLogin, setUserLogin] = useState([]);
//     const [passwordShow, setPasswordShow] = useState(false);


//     useEffect(() => {
//         if (user && user) {
//             const updatedUserData = process.env.REACT_APP_DEFAULTAUTH === "firebase" ? user.multiFactor.user.email : user.user.email;
//             const updatedUserPassword = process.env.REACT_APP_DEFAULTAUTH === "firebase" ? "" : user.user.confirm_password;
//             setUserLogin({
//                 email: updatedUserData,
//                 password: updatedUserPassword
//             });
//         }
//     }, [user]);

//     const validation = useFormik({
//         // enableReinitialize : use this flag when initial values needs to be changed
//         enableReinitialize: true,

//         initialValues: {
//             email: userLogin.email || "admin@gmail.com" || '',
//             password: userLogin.password || "234@Ak" || '',
//         },
//         validationSchema: Yup.object({
//             email: Yup.string().required("Please Enter Your Email"),
//             password: Yup.string().required("Please Enter Your Password"),
//         }),
//         onSubmit: (values) => {
//             dispatch(loginUser(values, props.router.navigate));
//         }
//     });

//     const signIn = type => {
//         dispatch(socialLogin(type, props.router.navigate));
//     };

//     //handleTwitterLoginResponse
//     // const twitterResponse = e => {}

//     //for facebook and google authentication
//     const socialResponse = type => {
//         signIn(type);
//     };


//     useEffect(() => {
//         if (errorMsg) {
//             setTimeout(() => {
//                 dispatch(resetLoginFlag());
//             }, 3000);
//         }
//     }, [dispatch, errorMsg]);

//     document.title = "Basic SignIn | Velzon - React Admin & Dashboard Template";
//     return (
//         <React.Fragment>
//             <ParticlesAuth>
//                 <div className="auth-page-content mt-lg-5">
//                     <Container>
//                         <Row>
//                             <Col lg={12}>
//                                 <div className="text-center mt-sm-5 mb-4 text-white-50">
//                                     <div>
//                                         <Link to="/" className="d-inline-block auth-logo">
//                                             <img src={logoLight} alt="" height="20" />
//                                         </Link>
//                                     </div>
//                                     <p className="mt-3 fs-15 fw-medium">Premium Admin & Dashboard Template</p>
//                                 </div>
//                             </Col>
//                         </Row>

//                         <Row className="justify-content-center">
//                             <Col md={8} lg={6} xl={5}>
//                                 <Card className="mt-4">
//                                     <CardBody className="p-4">
//                                         <div className="text-center mt-2">
//                                             <h5 className="text-primary">Welcome Back !</h5>
//                                             <p className="text-muted">Sign in to continue to Velzon.</p>
//                                         </div>
//                                         {error && error ? (<Alert color="danger"> {error} </Alert>) : null}
//                                         <div className="p-2 mt-4">
//                                             <Form
//                                                 onSubmit={(e) => {
//                                                     e.preventDefault();
//                                                     validation.handleSubmit();
//                                                     return false;
//                                                 }}
//                                                 action="#">

//                                                 <div className="mb-3">
//                                                     <Label htmlFor="email" className="form-label">Email</Label>
//                                                     <Input
//                                                         name="email"
//                                                         className="form-control"
//                                                         placeholder="Enter email"
//                                                         type="email"
//                                                         onChange={validation.handleChange}
//                                                         onBlur={validation.handleBlur}
//                                                         value={validation.values.email || ""}
//                                                         invalid={
//                                                             validation.touched.email && validation.errors.email ? true : false
//                                                         }
//                                                     />
//                                                     {validation.touched.email && validation.errors.email ? (
//                                                         <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
//                                                     ) : null}
//                                                 </div>

//                                                 <div className="mb-3">
//                                                     <div className="float-end">
//                                                         <Link to="/forgot-password" className="text-muted">Forgot password?</Link>
//                                                     </div>
//                                                     <Label className="form-label" htmlFor="password-input">Password</Label>
//                                                     <div className="position-relative auth-pass-inputgroup mb-3">
//                                                         <Input
//                                                             name="password"
//                                                             value={validation.values.password || ""}
//                                                             type={passwordShow ? "text" : "password"}
//                                                             className="form-control pe-5"
//                                                             placeholder="Enter Password"
//                                                             onChange={validation.handleChange}
//                                                             onBlur={validation.handleBlur}
//                                                             invalid={
//                                                                 validation.touched.password && validation.errors.password ? true : false
//                                                             }
//                                                         />
//                                                         {validation.touched.password && validation.errors.password ? (
//                                                             <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
//                                                         ) : null}
//                                                         <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted" type="button" id="password-addon" onClick={() => setPasswordShow(!passwordShow)}><i className="ri-eye-fill align-middle"></i></button>
//                                                     </div>
//                                                 </div>

//                                                 <div className="form-check">
//                                                     <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
//                                                     <Label className="form-check-label" htmlFor="auth-remember-check">Remember me</Label>
//                                                 </div>

//                                                 <div className="mt-4">
//                                                     <Button color="secondary" disabled={error ? null : loading ? true : false} className="w-100" type="submit">
//                                                         {loading ? <Spinner size="sm" className='me-2'> Loading... </Spinner> : null}
//                                                         Sign In
//                                                     </Button>
//                                                 </div>

//                                                 <div className="mt-4 text-center">
//                                                     <div className="signin-other-title">
//                                                         <h5 className="fs-13 mb-4 title">Sign In with</h5>
//                                                     </div>
//                                                     <div>
//                                                         <Link
//                                                             to="#"
//                                                             className="btn btn-primary btn-icon me-1"
//                                                             onClick={e => {
//                                                                 e.preventDefault();
//                                                                 socialResponse("facebook");
//                                                             }}
//                                                             >
//                                                             <i className="ri-facebook-fill fs-16" />
//                                                         </Link>
//                                                         <Link
//                                                             to="#"
//                                                             className="btn btn-danger btn-icon me-1"
//                                                             onClick={e => {
//                                                                 e.preventDefault();
//                                                                 socialResponse("google");
//                                                             }}
//                                                             >
//                                                             <i className="ri-google-fill fs-16" />
//                                                         </Link>
//                                                         <Button color="dark" className="btn-icon"><i className="ri-github-fill fs-16"></i></Button>{" "}
//                                                         <Button color="info" className="btn-icon"><i className="ri-twitter-fill fs-16"></i></Button>
//                                                     </div>
//                                                 </div>
//                                             </Form>
//                                         </div>
//                                     </CardBody>
//                                 </Card>

//                                 <div className="mt-4 text-center">
//                                     <p className="mb-0">Don't have an account ? <Link to="/register" className="fw-semibold text-primary text-decoration-underline"> Signup </Link> </p>
//                                 </div>

//                             </Col>
//                         </Row>
//                     </Container>
//                 </div>
//             </ParticlesAuth>
//         </React.Fragment>
//     );
// };

// export default withRouter(Login);