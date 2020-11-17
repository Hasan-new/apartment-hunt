import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNavbar from '../Header/HeaderNavbar/HeaderNavbar';
import './Login.css';

const Login = () => {
    return (
        <>
        <HeaderNavbar></HeaderNavbar>
            <div className="loginArea">
            <form className="loginCreateForm detailFormArea" action="">
                <h2 className="text-dark">Login</h2>
                <input className="loginCreateFormInput" name="email" type="text" id="origin" placeholder="Username or Email" required/>
                <input className="loginCreateFormInput" name="password" type="password" id="Password" placeholder="Password" required/>
                <div className="d-flex align-items-center justify-content-between my-3">
                    <div className="d-flex align-items-center">
                        <input className="checkboxRemember" type="checkbox" name="Remember me" id="remember"/>
                        <label className="rememberMe" htmlFor="remember">Remember Me</label>
                    </div>
                    <div>
                        <Link className="forgotPassword" to='/login'>Forgot Password</Link>
                    </div>
                </div>
                {/* {
                    data.success ? <p></p> : <p className="text-danger m-0 text-center" style={{fontSize: '14px'}}>{data.error}</p>
                } */}
                <button type="submit" className="btn loginCreateBtn">Login</button>
                <p className="text-dark dontHaveAccount text-center">Don't have an account? <Link to="/register" className="createAccountTxt">Create an account</Link></p>
                    </form>
                    <div className="orSection">
                        <hr style={{width: '45%', float: 'left'}}/><span>Or</span><hr style={{width: '45%', float: 'right'}}/>
                    </div>
                    <div className="googleFbSignIn">
                        <img className="googleFbImage" src="https://i.ibb.co/ZhnqwJs/fb.png" alt=""/>
                        <p className="m-0 text-center">Continue with Facebook</p>
                    </div>
                    <div className="googleFbSignIn">
                        <img className="googleFbImage" src="https://i.ibb.co/68y93F9/google.png" alt=""/>
                        <p className="m-0 text-center">Continue with Google</p>
                    </div>
                </div>
        </>
    );
};

export default Login;