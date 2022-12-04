import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../../../redux/actions/auth';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Input from '../../../commons/components/Input';
import Button from '../../../commons/components/Button';
const Index = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth.data);
    useEffect(() => {
        if (auth?.accessToken) {
            history.push('/admin-dashboard');
            // let temp = roles.find(item => item._id === (auth?.role?._id || auth?.role)) || null;
            // switch (temp?.name) {
            //     case 'Admin': history.push('/jobcard'); break;
            //     case 'Supervisor': history.push('/s_cars'); break;
            //     case 'Rework Engineer': history.push('/myjobs'); break;
            //     case 'Rework Manager': history.push('/cars'); break;
            //     default: break;
            // }
        }
    }, [auth, history]);
    const onSubmit = (e) => {
        e.preventDefault();
        let body = {
            emailId: e.target[0].value,
            password: e.target[1].value,
        }
        dispatch(signIn(body));
    }
    return (
        <div className="login-page-wrap">
            <div className="login-page-content">
                <div className="login-box">
                    <div className="item-logo">
                        <img src="img/logo2.png" alt="logo" />
                    </div>
                    <form onSubmit={(e) => onSubmit(e)} className="login-form">
                        <div className="form-group">
                            <label>Username</label>
                            <Input
                                type="email"
                                placeholder="Enter email id"
                                className="form-control"
                                name='emailId'
                            />
                            <i className="far fa-envelope"></i>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <Input
                                type="password"
                                placeholder="Enter password"
                                className="form-control"
                                name='password'
                            />
                            <i className="fas fa-lock"></i>
                        </div>
                        <div className="form-group d-flex align-items-center justify-content-between">
                            <div className="form-check">
                                <Input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="remember-me"
                                />
                                <label htmlFor="remember-me" className="form-check-label">Remember Me</label>
                            </div>
                            <Link to="/dashboard" className="forgot-btn">Forgot Password?</Link>
                        </div>
                        <div className="form-group">
                            <Button type="submit" className="login-btn">Login</Button>
                        </div>
                    </form>
                    <div className="login-social">
                        <p>or sign in with</p>
                        <ul>
                            <li><Link to="#" className="bg-fb"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link to="#" className="bg-twitter"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link to="#" className="bg-gplus"><i className="fab fa-google-plus-g"></i></Link></li>
                            <li><Link to="#" className="bg-git"><i className="fab fa-github"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="sign-up">Don't have an account ? <Link to="#">Signup now!</Link></div>
            </div>
        </div>
    );
}

export default Index;
