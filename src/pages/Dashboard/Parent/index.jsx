import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Layout';

const Index = () => {
    useEffect(() => {
        /*-------------------------------------
                  Counter
              -------------------------------------*/
        var counterContainer = window.$(".counter");
        if (counterContainer.length) {
            counterContainer.counterUp({
                delay: 50,
                time: 1000
            });
        }
    }, []);
    return (
        <Layout>
            {/* <!-- Breadcubs Area Start Here --> */}
            <div className="breadcrumbs-area">
                <h3>Admin Dashboard</h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>Parents</li>
                </ul>
            </div>
            {/* <!-- Breadcubs Area End Here --> */}
            {/* <!-- Dashboard summery Start Here --> */}
            <div className="row">
                <div className="col-3-xxxl col-sm-6 col-12">
                    <div className="dashboard-summery-one">
                        <div className="row">
                            <div className="col-6">
                                <div className="item-icon bg-light-red">
                                    <i className="flaticon-money text-red"></i>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="item-content">
                                    <div className="item-title">Due Fees</div>
                                    <div className="item-number"><span>$</span><span className="counter" data-num="4503">4,503</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3-xxxl col-sm-6 col-12">
                    <div className="dashboard-summery-one">
                        <div className="row">
                            <div className="col-6">
                                <div className="item-icon bg-light-magenta">
                                    <i className="flaticon-shopping-list text-magenta"></i>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="item-content">
                                    <div className="item-title">Notifications</div>
                                    <div className="item-number"><span className="counter" data-num="12">12</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3-xxxl col-sm-6 col-12">
                    <div className="dashboard-summery-one">
                        <div className="row">
                            <div className="col-6">
                                <div className="item-icon bg-light-yellow">
                                    <i className="flaticon-mortarboard text-orange"></i>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="item-content">
                                    <div className="item-title">Result</div>
                                    <div className="item-number"><span className="counter" data-num="16">16</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3-xxxl col-sm-6 col-12">
                    <div className="dashboard-summery-one">
                        <div className="row">
                            <div className="col-6">
                                <div className="item-icon bg-light-blue">
                                    <i className="flaticon-money text-blue"></i>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="item-content">
                                    <div className="item-title">Expenses</div>
                                    <div className="item-number"><span>$</span><span className="counter" data-num="193000">1,93,000</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Dashboard summery End Here --> */}
            {/* <!-- Dashboard Content Start Here --> */}
            <div className="row">
                <div className="col-5-xxxl col-12">
                    <div className="card dashboard-card-twelve">
                        <div className="card-body">
                            <div className="heading-layout1">
                                <div className="item-title">
                                    <h3>My Kids</h3>
                                </div>
                                <div className="dropdown">
                                    <Link className="dropdown-toggle" to="#" role="button" data-toggle="dropdown"
                                        aria-expanded="false">...</Link>

                                    <div className="dropdown-menu dropdown-menu-right">
                                        <Link className="dropdown-item" to="#"><i
                                            className="fas fa-times text-orange-red"></i>Close</Link>
                                        <Link className="dropdown-item" to="#"><i
                                            className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                        <Link className="dropdown-item" to="#"><i
                                            className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="kids-details-wrap">
                                <div className="row">
                                    <div className="col-12-xxxl col-xl-6 col-12">
                                        <div className="kids-details-box mb-5">
                                            <div className="item-img">
                                                <img src="img/figure/student.png" alt="kids" />
                                            </div>
                                            <div className="item-content table-responsive">
                                                <table className="table text-nowrap">
                                                    <tbody>
                                                        <tr>
                                                            <td>Name:</td>
                                                            <td>Jessia Rose</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gender:</td>
                                                            <td>Female</td>
                                                        </tr>
                                                        <tr>
                                                            <td>className:</td>
                                                            <td>2</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Roll:</td>
                                                            <td>#2225</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Section:</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Admission Id:</td>
                                                            <td>#0021</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Admission Date:</td>
                                                            <td>07.08.2017</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12-xxxl col-xl-6 col-12">
                                        <div className="kids-details-box">
                                            <div className="item-img">
                                                <img src="img/figure/student1.png" alt="kids" />
                                            </div>
                                            <div className="item-content table-responsive">
                                                <table className="table text-nowrap">
                                                    <tbody>
                                                        <tr>
                                                            <td>Name:</td>
                                                            <td>Jack Steve</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gender:</td>
                                                            <td>Male</td>
                                                        </tr>
                                                        <tr>
                                                            <td>className:</td>
                                                            <td>3</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Roll:</td>
                                                            <td>#2205</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Section:</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Admission Id:</td>
                                                            <td>#0045</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Admission Date:</td>
                                                            <td>07.08.2017</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-7-xxxl col-12">
                    <div className="card dashboard-card-eleven">
                        <div className="card-body">
                            <div className="heading-layout1">
                                <div className="item-title">
                                    <h3>All Expenses</h3>
                                </div>
                                <div className="dropdown">
                                    <Link className="dropdown-toggle" to="#" role="button" data-toggle="dropdown"
                                        aria-expanded="false">...</Link>

                                    <div className="dropdown-menu dropdown-menu-right">
                                        <Link className="dropdown-item" to="#"><i
                                            className="fas fa-times text-orange-red"></i>Close</Link>
                                        <Link className="dropdown-item" to="#"><i
                                            className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                        <Link className="dropdown-item" to="#"><i
                                            className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-box-wrap">
                                <form className="search-form-box">
                                    <div className="row gutters-8">
                                        <div className="col-lg-4 col-md-3 form-group">
                                            <input type="text" placeholder="Search by Exam ..."
                                                className="form-control" />
                                        </div>
                                        <div className="col-lg-3 col-md-3 form-group">
                                            <input type="text" placeholder="Search by Subject ..."
                                                className="form-control" />
                                        </div>
                                        <div className="col-lg-3 col-md-3 form-group">
                                            <input type="text" placeholder="dd/mm/yyyy" className="form-control" />
                                        </div>
                                        <div className="col-lg-2 col-md-3 form-group">
                                            <button type="submit"
                                                className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="table-responsive expenses-table-box">
                                    <table className="table data-table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input checkAll" />
                                                        <label className="form-check-label">ID</label>
                                                    </div>
                                                </th>
                                                <th>Expanse</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                                <th>E-Mail</th>
                                                <th>Date</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">#0021</label>
                                                    </div>
                                                </td>
                                                <td>Exam Fees</td>
                                                <td>$150.00</td>
                                                <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                                <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="adccc6c6c5c2dfdecec5c2c2c1edcac0ccc4c183cec2c0">[email&#160;protected]</Link></td>
                                                <td>22/02/2019</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-times text-orange-red"></i>Close</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">#0022</label>
                                                    </div>
                                                </td>
                                                <td>Semister Fees</td>
                                                <td>$350.00</td>
                                                <td className="badge badge-pill badge-danger d-block mg-t-8">Due</td>
                                                <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="1c7d777774736e6f7f747373705c7b717d7570327f7371">[email&#160;protected]</Link></td>
                                                <td>22/02/2019</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-times text-orange-red"></i>Close</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">#0023</label>
                                                    </div>
                                                </td>
                                                <td>Exam Fees</td>
                                                <td>$150.00</td>
                                                <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                                <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="3b5a50505354494858535454577b5c565a525715585456">[email&#160;protected]</Link></td>
                                                <td>22/02/2019</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-times text-orange-red"></i>Close</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">#0024</label>
                                                    </div>
                                                </td>
                                                <td>Exam Fees</td>
                                                <td>$150.00</td>
                                                <td className="badge badge-pill badge-danger d-block mg-t-8">Due </td>
                                                <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="224349494a4d5051414a4d4d4e62454f434b4e0c414d4f">[email&#160;protected]</Link></td>
                                                <td>22/02/2019</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-times text-orange-red"></i>Close</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">#0025</label>
                                                    </div>
                                                </td>
                                                <td>Exam Fees</td>
                                                <td>$150.00</td>
                                                <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                                <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c2a3a9a9aaadb0b1a1aaadadae82a5afa3abaeeca1adaf">[email&#160;protected]</Link></td>
                                                <td>22/02/2019</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-times text-orange-red"></i>Close</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">#0026</label>
                                                    </div>
                                                </td>
                                                <td>Semister Fees</td>
                                                <td>$350.00</td>
                                                <td className="badge badge-pill badge-danger d-block mg-t-8">Due</td>
                                                <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="46272d2d2e293435252e29292a06212b272f2a6825292b">[email&#160;protected]</Link></td>
                                                <td>22/02/2019</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-times text-orange-red"></i>Close</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">#0027</label>
                                                    </div>
                                                </td>
                                                <td>Exam Fees</td>
                                                <td>$150.00</td>
                                                <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                                <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="61000a0a090e131202090e0e0d21060c00080d4f020e0c">[email&#160;protected]</Link></td>
                                                <td>22/02/2019</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-times text-orange-red"></i>Close</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-12">
                    <div className="card dashboard-card-six">
                        <div className="card-body">
                            <div className="heading-layout1 mg-b-17">
                                <div className="item-title">
                                    <h3>Notifications</h3>
                                </div>
                                <div className="dropdown">
                                    <Link className="dropdown-toggle" to="#" role="button" data-toggle="dropdown"
                                        aria-expanded="false">...</Link>

                                    <div className="dropdown-menu dropdown-menu-right">
                                        <Link className="dropdown-item" to="#"><i
                                            className="fas fa-times text-orange-red"></i>Close</Link>
                                        <Link className="dropdown-item" to="#"><i
                                            className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                        <Link className="dropdown-item" to="#"><i
                                            className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="notice-box-wrap m-height-660">
                                <div className="notice-list">
                                    <div className="post-date bg-skyblue">16 June, 2019</div>
                                    <h6 className="notice-title"><Link to="#">Great School manag mene esom tus eleifend
                                        lectus
                                        sed maximus mi faucibusnting.</Link></h6>
                                    <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                                </div>
                                <div className="notice-list">
                                    <div className="post-date bg-yellow">16 June, 2019</div>
                                    <h6 className="notice-title"><Link to="#">Great School manag printing.</Link></h6>
                                    <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                                </div>
                                <div className="notice-list">
                                    <div className="post-date bg-pink">16 June, 2019</div>
                                    <h6 className="notice-title"><Link to="#">Great School manag Nulla rhoncus eleifensed
                                        mim
                                        us mi faucibus id. Mauris vestibulum non purus lobortismenearea</Link></h6>
                                    <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                                </div>
                                <div className="notice-list">
                                    <div className="post-date bg-blue">16 June, 2019</div>
                                    <h6 className="notice-title"><Link to="#">Great School manag mene esom text of the
                                        printing.</Link></h6>
                                    <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                                </div>
                                <div className="notice-list">
                                    <div className="post-date bg-yellow">16 June, 2019</div>
                                    <h6 className="notice-title"><Link to="#">Great School manag printing.</Link></h6>
                                    <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                                </div>
                                <div className="notice-list">
                                    <div className="post-date bg-blue">16 June, 2019</div>
                                    <h6 className="notice-title"><Link to="#">Great School manag meneesom.</Link></h6>
                                    <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                                </div>
                                <div className="notice-list">
                                    <div className="post-date bg-pink">16 June, 2019</div>
                                    <h6 className="notice-title"><Link to="#">Great School manag meneesom.</Link></h6>
                                    <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8 col-12">
                    <div className="card dashboard-card-eleven">
                        <div className="card-body">
                            <div className="heading-layout1">
                                <div className="item-title">
                                    <h3>All Exam Results</h3>
                                </div>
                                <div className="dropdown">
                                    <Link className="dropdown-toggle" to="#" role="button" data-toggle="dropdown"
                                        aria-expanded="false">...</Link>

                                    <div className="dropdown-menu dropdown-menu-right">
                                        <Link className="dropdown-item" to="#"><i
                                            className="fas fa-times text-orange-red"></i>Close</Link>
                                        <Link className="dropdown-item" to="#"><i
                                            className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                        <Link className="dropdown-item" to="#"><i
                                            className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-box-wrap">
                                <form className="search-form-box">
                                    <div className="row gutters-8">
                                        <div className="col-lg-4 col-md-3 form-group">
                                            <input type="text" placeholder="Search by Exam ..."
                                                className="form-control" />
                                        </div>
                                        <div className="col-lg-3 col-md-3 form-group">
                                            <input type="text" placeholder="Search by Subject ..."
                                                className="form-control" />
                                        </div>
                                        <div className="col-lg-3 col-md-3 form-group">
                                            <input type="text" placeholder="dd/mm/yyyy" className="form-control" />
                                        </div>
                                        <div className="col-lg-2 col-md-3 form-group">
                                            <button type="submit"
                                                className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="table-responsive result-table-box">
                                    <table className="table display data-table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input checkAll" />
                                                        <label className="form-check-label">ID</label>
                                                    </div>
                                                </th>
                                                <th>Exam Name</th>
                                                <th>Subject</th>
                                                <th>className</th>
                                                <th>Roll</th>
                                                <th>Grade</th>
                                                <th>Percent</th>
                                                <th>Date</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">#0021</label>
                                                    </div>
                                                </td>
                                                <td>className Test</td>
                                                <td>English</td>
                                                <td>2</td>
                                                <td>#0045</td>
                                                <td>A</td>
                                                <td>99.00 {'>'} 100</td>
                                                <td>22/02/2019</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-times text-orange-red"></i>Close</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">#0022</label>
                                                    </div>
                                                </td>
                                                <td>className Test</td>
                                                <td>English</td>
                                                <td>1</td>
                                                <td>#0025</td>
                                                <td>A</td>
                                                <td>99.00 {'>'} 100</td>
                                                <td>22/02/2019</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-times text-orange-red"></i>Close</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">#0023</label>
                                                    </div>
                                                </td>
                                                <td>className Test</td>
                                                <td>Drawing</td>
                                                <td>2</td>
                                                <td>#0045</td>
                                                <td>A</td>
                                                <td>99.00 {'>'} 100</td>
                                                <td>22/02/2019</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-times text-orange-red"></i>Close</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">#0024</label>
                                                    </div>
                                                </td>
                                                <td>className Test</td>
                                                <td>English</td>
                                                <td>1</td>
                                                <td>#0048</td>
                                                <td>A</td>
                                                <td>99.00 {'>'} 100</td>
                                                <td>22/02/2019</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-times text-orange-red"></i>Close</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">#0025</label>
                                                    </div>
                                                </td>
                                                <td>className Test</td>
                                                <td>Chemistry</td>
                                                <td>8</td>
                                                <td>#0050</td>
                                                <td>A</td>
                                                <td>99.00 {'>'} 100</td>
                                                <td>22/02/2019</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-times text-orange-red"></i>Close</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">#0025</label>
                                                    </div>
                                                </td>
                                                <td>className Test</td>
                                                <td>Bangla</td>
                                                <td>4</td>
                                                <td>#0035</td>
                                                <td>D</td>
                                                <td>70.00 {'>'} 100</td>
                                                <td>22/02/2019</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-times text-orange-red"></i>Close</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">#0025</label>
                                                    </div>
                                                </td>
                                                <td>className Test</td>
                                                <td>Drawing</td>
                                                <td>2</td>
                                                <td>#0045</td>
                                                <td>C</td>
                                                <td>80.00 {'>'} 100</td>
                                                <td>22/02/2019</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-times text-orange-red"></i>Close</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">#0025</label>
                                                    </div>
                                                </td>
                                                <td>className Test</td>
                                                <td>English</td>
                                                <td>4</td>
                                                <td>#0048</td>
                                                <td>B</td>
                                                <td>99.00 {'>'} 100</td>
                                                <td>22/02/2019</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-times text-orange-red"></i>Close</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">#0025</label>
                                                    </div>
                                                </td>
                                                <td>First Semister</td>
                                                <td>English</td>
                                                <td>2</td>
                                                <td>#0045</td>
                                                <td>A</td>
                                                <td>99.00 {'>'} 100</td>
                                                <td>22/02/2019</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-times text-orange-red"></i>Close</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                            <Link className="dropdown-item" to="#"><i
                                                                className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Index;
