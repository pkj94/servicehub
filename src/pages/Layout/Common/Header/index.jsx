
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { setCurrentUser } from '../../../../redux/actions/auth';
const Index = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth.data);
    const logout = () => {
        dispatch(setCurrentUser(null));
        localStorage.removeItem('user');
        history.push('/login');
    }
    return (
        <div className="navbar navbar-expand-md header-menu-one bg-light">
            <div className="nav-bar-header-one">
                <div className="header-logo">
                    <Link to="/">
                        <img src="/img/logo.png" alt="logo" />
                    </Link>
                </div>
                <div className="toggle-button sidebar-toggle">
                    <button type="button" className="item-link">
                        <span className="btn-icon-wrap">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                </div>
            </div>
            <div className="d-md-none mobile-nav-bar">
                <button className="navbar-toggler pulse-animation" type="button" data-toggle="collapse" data-target="#mobile-navbar" aria-expanded="false">
                    <i className="far fa-arrow-alt-circle-down"></i>
                </button>
                <button type="button" className="navbar-toggler sidebar-toggle-mobile">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <div className="header-main-menu collapse navbar-collapse" id="mobile-navbar">
                <ul className="navbar-nav">
                    <li className="navbar-item header-search-bar">
                        <div className="input-group stylish-input-group">
                            <span className="input-group-addon">
                                <button type="submit">
                                    <span className="flaticon-search" aria-hidden="true"></span>
                                </button>
                            </span>
                            <input type="text" className="form-control" placeholder="Find Something . . ." />
                        </div>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="navbar-item dropdown header-admin">
                        <Link className="navbar-nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown"
                            aria-expanded="false">
                            <div className="admin-title">
                                <h5 className="item-title">{auth.firstName + (auth.lastName ? ' ' + auth.lastName : '')}</h5>
                                <span>{auth.role?.name}</span>
                            </div>
                            <div className="admin-img">
                                <img src="/img/figure/admin.jpg" alt="Admin" />
                            </div>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                            <div className="item-header">
                                <h6 className="item-title">{auth.firstName + (auth.lastName ? ' ' + auth.lastName : '')}</h6>
                            </div>
                            <div className="item-content">
                                <ul className="settings-list">
                                    <li><Link to="/profile"><i className="flaticon-user"></i>My Profile</Link></li>
                                    <li><Link to="#"><i className="flaticon-list"></i>Task</Link></li>
                                    <li><Link to="#"><i className="flaticon-chat-comment-oval-speech-bubble-with-text-lines"></i>Message</Link></li>
                                    <li><Link to="/users"><i className="flaticon-gear-loading"></i>Account Settings</Link></li>
                                    <li><Link to="#" onClick={logout}><i className="flaticon-turn-off"></i>Log Out</Link></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="navbar-item dropdown header-message">
                        <Link className="navbar-nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown"
                            aria-expanded="false">
                            <i className="far fa-envelope"></i>
                            <div className="item-title d-md-none text-16 mg-l-10">Message</div>
                            <span>5</span>
                        </Link>

                        <div className="dropdown-menu dropdown-menu-right">
                            <div className="item-header">
                                <h6 className="item-title">05 Message</h6>
                            </div>
                            <div className="item-content">
                                <div className="media">
                                    <div className="item-img bg-skyblue author-online">
                                        <img src="/img/figure/student11.png" alt="img" />
                                    </div>
                                    <div className="media-body space-sm">
                                        <div className="item-title">
                                            <Link to="#">
                                                <span className="item-name">Maria Zaman</span>
                                                <span className="item-time">18:30</span>
                                            </Link>
                                        </div>
                                        <p>What is the reason of buy this item.
                                            Is it usefull for me.....</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="item-img bg-yellow author-online">
                                        <img src="/img/figure/student12.png" alt="img" />
                                    </div>
                                    <div className="media-body space-sm">
                                        <div className="item-title">
                                            <Link to="#">
                                                <span className="item-name">Benny Roy</span>
                                                <span className="item-time">10:35</span>
                                            </Link>
                                        </div>
                                        <p>What is the reason of buy this item.
                                            Is it usefull for me.....</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="item-img bg-pink">
                                        <img src="/img/figure/student13.png" alt="img" />
                                    </div>
                                    <div className="media-body space-sm">
                                        <div className="item-title">
                                            <Link to="#">
                                                <span className="item-name">Steven</span>
                                                <span className="item-time">02:35</span>
                                            </Link>
                                        </div>
                                        <p>What is the reason of buy this item.
                                            Is it usefull for me.....</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="item-img bg-violet-blue">
                                        <img src="/img/figure/student11.png" alt="img" />
                                    </div>
                                    <div className="media-body space-sm">
                                        <div className="item-title">
                                            <Link to="#">
                                                <span className="item-name">Joshep Joe</span>
                                                <span className="item-time">12:35</span>
                                            </Link>
                                        </div>
                                        <p>What is the reason of buy this item.
                                            Is it usefull for me.....</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="navbar-item dropdown header-notification">
                        <Link className="navbar-nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown"
                            aria-expanded="false">
                            <i className="far fa-bell"></i>
                            <div className="item-title d-md-none text-16 mg-l-10">Notification</div>
                            <span>8</span>
                        </Link>

                        <div className="dropdown-menu dropdown-menu-right">
                            <div className="item-header">
                                <h6 className="item-title">03 Notifiacations</h6>
                            </div>
                            <div className="item-content">
                                <div className="media">
                                    <div className="item-icon bg-skyblue">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="media-body space-sm">
                                        <div className="post-title">Complete Today Task</div>
                                        <span>1 Mins ago</span>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="item-icon bg-orange">
                                        <i className="fas fa-calendar-alt"></i>
                                    </div>
                                    <div className="media-body space-sm">
                                        <div className="post-title">Director Metting</div>
                                        <span>20 Mins ago</span>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="item-icon bg-violet-blue">
                                        <i className="fas fa-cogs"></i>
                                    </div>
                                    <div className="media-body space-sm">
                                        <div className="post-title">Update Password</div>
                                        <span>45 Mins ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* <li className="navbar-item dropdown header-language">
                        <Link className="navbar-nav-link dropdown-toggle" to="#" role="button"
                            data-toggle="dropdown" aria-expanded="false"><i className="fas fa-globe-americas"></i>EN</Link>
                        <div className="dropdown-menu dropdown-menu-right">
                            <Link className="dropdown-item" to="#">English</Link>
                            <Link className="dropdown-item" to="#">Spanish</Link>
                            <Link className="dropdown-item" to="#">Franchis</Link>
                            <Link className="dropdown-item" to="#">Chiness</Link>
                        </div>
                    </li> */}
                </ul>
            </div>
        </div>
    );
}

export default Index;
