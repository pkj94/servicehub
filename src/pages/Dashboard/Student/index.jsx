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
                    <li>Student</li>
                </ul>
            </div>
            {/* <!-- Breadcubs Area End Here --> */}
            <div className="row">
                {/* <!-- Student Info Area Start Here --> */}
                <div className="col-4-xxxl col-12">
                    <div className="card dashboard-card-ten">
                        <div className="card-body">
                            <div className="heading-layout1">
                                <div className="item-title">
                                    <h3>About Me</h3>
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
                            <div className="student-info">
                                <div className="media media-none--xs">
                                    <div className="item-img">
                                        <img src="img/figure/student.png" className="media-img-auto" alt="student" />
                                    </div>
                                    <div className="media-body">
                                        <h3 className="item-title">SONU</h3>
                                        <p>Aliquam erat volutpat. Curabiene natis massa
                                            sedde lacustiquen sodale word moun taiery.</p>
                                    </div>
                                </div>
                                <div className="table-responsive info-table">
                                    <table className="table text-nowrap">
                                        <tbody>
                                            <tr>
                                                <td>Name:</td>
                                                <td className="font-medium text-dark-medium">Sonu</td>
                                            </tr>
                                            <tr>
                                                <td>Gender:</td>
                                                <td className="font-medium text-dark-medium">Male</td>
                                            </tr>
                                            <tr>
                                                <td>Father Name:</td>
                                                <td className="font-medium text-dark-medium">Mr.Pardeep</td>
                                            </tr>
                                            <tr>
                                                <td>Mother Name:</td>
                                                <td className="font-medium text-dark-medium">Mrs.Sunita</td>
                                            </tr>
                                            <tr>
                                                <td>Date Of Birth:</td>
                                                <td className="font-medium text-dark-medium">04.12.2002</td>
                                            </tr>
                                            <tr>
                                                <td>Religion:</td>
                                                <td className="font-medium text-dark-medium">Hindu</td>
                                            </tr>
                                            <tr>
                                                <td>Father Occupation:</td>
                                                <td className="font-medium text-dark-medium">Graphic Designer</td>
                                            </tr>
                                            <tr>
                                                <td>E-Mail:</td>
                                                <td className="font-medium text-dark-medium"><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="a4cec1d7d7cdc5d6cbd7c1e4c3c9c5cdc88ac7cbc9">[email&#160;protected]</Link></td>
                                            </tr>
                                            <tr>
                                                <td>Admission Date:</td>
                                                <td className="font-medium text-dark-medium">05.01.2019</td>
                                            </tr>
                                            <tr>
                                                <td>className:</td>
                                                <td className="font-medium text-dark-medium">2</td>
                                            </tr>
                                            <tr>
                                                <td>Section:</td>
                                                <td className="font-medium text-dark-medium">Pink</td>
                                            </tr>
                                            <tr>
                                                <td>Roll:</td>
                                                <td className="font-medium text-dark-medium">10005</td>
                                            </tr>
                                            <tr>
                                                <td>Adress:</td>
                                                <td className="font-medium text-dark-medium">House #10, Road #6,
                                                    Australia</td>
                                            </tr>
                                            <tr>
                                                <td>Phone:</td>
                                                <td className="font-medium text-dark-medium">+ 88 9856418</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Student Info Area End Here --> */}
                <div className="col-8-xxxl col-12">
                    <div className="row">
                        {/* <!-- Summery Area Start Here --> */}
                        <div className="col-lg-4">
                            <div className="dashboard-summery-one">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="item-icon bg-light-magenta">
                                            <i className="flaticon-shopping-list text-magenta"></i>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="item-content">
                                            <div className="item-title">Notification</div>
                                            <div className="item-number"><span className="counter" data-num="12">12</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="dashboard-summery-one">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="item-icon bg-light-blue">
                                            <i className="flaticon-calendar text-blue"></i>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="item-content">
                                            <div className="item-title">Events</div>
                                            <div className="item-number"><span className="counter" data-num="06">06</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="dashboard-summery-one">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="item-icon bg-light-yellow">
                                            <i className="flaticon-percentage-discount text-orange"></i>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="item-content">
                                            <div className="item-title">Attendance</div>
                                            <div className="item-number"><span className="counter" data-num="94">94</span><span>%</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Summery Area End Here --> */}
                        {/* <!-- Exam Result Area Start Here --> */}
                        <div className="col-lg-12">
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
                                                <div className="col-lg-4 col-12 form-group">
                                                    <input type="text" placeholder="Search by Exam ..."
                                                        className="form-control" />
                                                </div>
                                                <div className="col-lg-3 col-12 form-group">
                                                    <input type="text" placeholder="Search by Subject ..."
                                                        className="form-control" />
                                                </div>
                                                <div className="col-lg-3 col-12 form-group">
                                                    <input type="text" placeholder="dd/mm/yyyy"
                                                        className="form-control" />
                                                </div>
                                                <div className="col-lg-2 col-12 form-group">
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
                                                                <input type="checkbox"
                                                                    className="form-check-input checkAll" />
                                                                <label className="form-check-label">ID</label>
                                                            </div>
                                                        </th>
                                                        <th>Exam Name</th>
                                                        <th>Subject</th>
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
                                                        <td>A</td>
                                                        <td>99.00 {'>'} 100</td>
                                                        <td>22/02/2019</td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <Link to="#" className="dropdown-toggle"
                                                                    data-toggle="dropdown" aria-expanded="false">
                                                                    <span
                                                                        className="flaticon-more-button-of-three-dots"></span>
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
                                                        <td>A</td>
                                                        <td>99.00 {'>'} 100</td>
                                                        <td>22/02/2019</td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <Link to="#" className="dropdown-toggle"
                                                                    data-toggle="dropdown" aria-expanded="false">
                                                                    <span
                                                                        className="flaticon-more-button-of-three-dots"></span>
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
                                                        <td>Chemistry</td>
                                                        <td>A</td>
                                                        <td>99.00 {'>'} 100</td>
                                                        <td>22/02/2019</td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <Link to="#" className="dropdown-toggle"
                                                                    data-toggle="dropdown" aria-expanded="false">
                                                                    <span
                                                                        className="flaticon-more-button-of-three-dots"></span>
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
                                                        <td>A</td>
                                                        <td>99.00 {'>'} 100</td>
                                                        <td>22/02/2019</td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <Link to="#" className="dropdown-toggle"
                                                                    data-toggle="dropdown" aria-expanded="false">
                                                                    <span
                                                                        className="flaticon-more-button-of-three-dots"></span>
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
                                                        <td>A</td>
                                                        <td>99.00 {'>'} 100</td>
                                                        <td>22/02/2019</td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <Link to="#" className="dropdown-toggle"
                                                                    data-toggle="dropdown" aria-expanded="false">
                                                                    <span
                                                                        className="flaticon-more-button-of-three-dots"></span>
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
                                                        <td>D</td>
                                                        <td>70.00 {'>'} 100</td>
                                                        <td>22/02/2019</td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <Link to="#" className="dropdown-toggle"
                                                                    data-toggle="dropdown" aria-expanded="false">
                                                                    <span
                                                                        className="flaticon-more-button-of-three-dots"></span>
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
                                                        <td>C</td>
                                                        <td>80.00 {'>'} 100</td>
                                                        <td>22/02/2019</td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <Link to="#" className="dropdown-toggle"
                                                                    data-toggle="dropdown" aria-expanded="false">
                                                                    <span
                                                                        className="flaticon-more-button-of-three-dots"></span>
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
                                                        <td>B</td>
                                                        <td>99.00 {'>'} 100</td>
                                                        <td>22/02/2019</td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <Link to="#" className="dropdown-toggle"
                                                                    data-toggle="dropdown" aria-expanded="false">
                                                                    <span
                                                                        className="flaticon-more-button-of-three-dots"></span>
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
                                                        <td>A</td>
                                                        <td>99.00 {'>'} 100</td>
                                                        <td>22/02/2019</td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <Link to="#" className="dropdown-toggle"
                                                                    data-toggle="dropdown" aria-expanded="false">
                                                                    <span
                                                                        className="flaticon-more-button-of-three-dots"></span>
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
                        {/* <!-- Exam Result Area End Here --> */}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4-xxxl col-xl-6 col-12">
                    <div className="card dashboard-card-three">
                        <div className="card-body">
                            <div className="heading-layout1">
                                <div className="item-title">
                                    <h3>Attendence</h3>
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
                            <div className="doughnut-chart-wrap">
                                <canvas id="student-doughnut-chart" width="100" height="270"></canvas>
                            </div>
                            <div className="student-report">
                                <div className="student-count pseudo-bg-blue">
                                    <h4 className="item-title">Absent</h4>
                                    <div className="item-number">28.2%</div>
                                </div>
                                <div className="student-count pseudo-bg-yellow">
                                    <h4 className="item-title">Present</h4>
                                    <div className="item-number">65.8%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4-xxxl col-xl-6 col-12">
                    <div className="card dashboard-card-thirteen">
                        <div className="card-body">
                            <div className="heading-layout1">
                                <div className="item-title">
                                    <h3>Event Calender</h3>
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
                            <div className="calender-wrap">
                                <div id="fc-calender" className="fc-calender"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4-xxxl col-12">
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
                            <div className="notice-box-wrap">
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
                                    <div className="post-date bg-skyblue">16 June, 2019</div>
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
                                    <div className="post-date bg-pink">16 June, 2019</div>
                                    <h6 className="notice-title"><Link to="#">Great School manag meneesom.</Link></h6>
                                    <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
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
