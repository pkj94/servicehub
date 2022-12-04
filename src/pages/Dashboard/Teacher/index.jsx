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
        /*-------------------------------------
          Doughnut Chart 
      -------------------------------------*/
        if (window.$("#student-doughnut-chart").length) {

            var doughnutChartData = {
                labels: ["Female Students", "Male Students"],
                datasets: [{
                    backgroundColor: ["#304ffe", "#ffa601"],
                    data: [45000, 105000],
                    label: "Total Students"
                },]
            };
            var doughnutChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 65,
                rotation: -9.4,
                animation: {
                    duration: 2000
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: true
                },
            };
            var studentCanvas = window.$("#student-doughnut-chart").get(0).getContext("2d");
            new window.Chart(studentCanvas, {
                type: 'doughnut',
                data: doughnutChartData,
                options: doughnutChartOptions
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
                    <li>Teachers</li>
                </ul>
            </div>
            {/* <!-- Breadcubs Area End Here --> */}
            <div className="row">
                {/* <!-- Dashboard summery Start Here --> */}
                <div className="col-12 col-4-xxxl">
                    <div className="row">
                        <div className="col-6-xxxl col-lg-3 col-sm-6 col-12">
                            <div className="dashboard-summery-two">
                                <div className="item-icon bg-light-magenta">
                                    <i className="flaticon-classNamemates text-magenta"></i>
                                </div>
                                <div className="item-content">
                                    <div className="item-number"><span className="counter" data-num="35000">35,000</span></div>
                                    <div className="item-title">Total Students</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6-xxxl col-lg-3 col-sm-6 col-12">
                            <div className="dashboard-summery-two">
                                <div className="item-icon bg-light-blue">
                                    <i className="flaticon-shopping-list text-blue"></i>
                                </div>
                                <div className="item-content">
                                    <div className="item-number"><span className="counter" data-num="19050">19,050</span></div>
                                    <div className="item-title">Total Exams</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6-xxxl col-lg-3 col-sm-6 col-12">
                            <div className="dashboard-summery-two">
                                <div className="item-icon bg-light-yellow">
                                    <i className="flaticon-mortarboard text-orange"></i>
                                </div>
                                <div className="item-content">
                                    <div className="item-number"><span className="counter" data-num="23890">23,890</span></div>
                                    <div className="item-title">Graduate Studes</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6-xxxl col-lg-3 col-sm-6 col-12">
                            <div className="dashboard-summery-two">
                                <div className="item-icon bg-light-red">
                                    <i className="flaticon-money text-red"></i>
                                </div>
                                <div className="item-content">
                                    <div className="item-number"><span>$</span><span className="counter" data-num="2102050">21,02,050</span></div>
                                    <div className="item-title">Total Income</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Dashboard summery End Here --> */}
                {/* <!-- Students Chart End Here --> */}
                <div className="col-lg-6 col-4-xxxl col-xl-6">
                    <div className="card dashboard-card-three">
                        <div className="card-body">
                            <div className="heading-layout1">
                                <div className="item-title">
                                    <h3>Students</h3>
                                </div>
                                <div className="dropdown">
                                    <Link className="dropdown-toggle" to="#" role="button"
                                        data-toggle="dropdown" aria-expanded="false">...</Link>

                                    <div className="dropdown-menu dropdown-menu-right">
                                        <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                        <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                        <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="doughnut-chart-wrap">
                                <canvas id="student-doughnut-chart" width="100" height="270"></canvas>
                            </div>
                            <div className="student-report">
                                <div className="student-count pseudo-bg-blue">
                                    <h4 className="item-title">Female Students</h4>
                                    <div className="item-number">10,500</div>
                                </div>
                                <div className="student-count pseudo-bg-yellow">
                                    <h4 className="item-title">Male Students</h4>
                                    <div className="item-number">24,500</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Students Chart End Here --> */}
                {/* <!-- Notice Board Start Here --> */}
                <div className="col-lg-6 col-4-xxxl col-xl-6">
                    <div className="card dashboard-card-six">
                        <div className="card-body">
                            <div className="heading-layout1 mg-b-17">
                                <div className="item-title">
                                    <h3>Notifications</h3>
                                </div>
                                <div className="dropdown">
                                    <Link className="dropdown-toggle" to="#" role="button"
                                        data-toggle="dropdown" aria-expanded="false">...</Link>

                                    <div className="dropdown-menu dropdown-menu-right">
                                        <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                        <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                        <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="notice-box-wrap">
                                <div className="notice-list">
                                    <div className="post-date bg-skyblue">16 June, 2019</div>
                                    <h6 className="notice-title"><Link to="#">Great School manag mene esom tus eleifend lectus
                                        sed maximus mi faucibusnting.</Link></h6>
                                    <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
                                </div>
                                <div className="notice-list">
                                    <div className="post-date bg-yellow">16 June, 2019</div>
                                    <h6 className="notice-title"><Link to="#">Great School manag printing.</Link></h6>
                                    <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
                                </div>
                                <div className="notice-list">
                                    <div className="post-date bg-pink">16 June, 2019</div>
                                    <h6 className="notice-title"><Link to="#">Great School manag Nulla rhoncus eleifensed mim
                                        us mi faucibus id. Mauris vestibulum non purus lobortismenearea</Link></h6>
                                    <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
                                </div>
                                <div className="notice-list">
                                    <div className="post-date bg-skyblue">16 June, 2019</div>
                                    <h6 className="notice-title"><Link to="#">Great School manag mene esom  text of the printing.</Link></h6>
                                    <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
                                </div>
                                <div className="notice-list">
                                    <div className="post-date bg-yellow">16 June, 2019</div>
                                    <h6 className="notice-title"><Link to="#">Great School manag printing.</Link></h6>
                                    <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
                                </div>
                                <div className="notice-list">
                                    <div className="post-date bg-pink">16 June, 2019</div>
                                    <h6 className="notice-title"><Link to="#">Great School manag meneesom.</Link></h6>
                                    <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Notice Board End Here --> */}
            </div>
            {/* <!-- Student Table Area Start Here --> */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="card dashboard-card-eleven">
                        <div className="card-body">
                            <div className="heading-layout1">
                                <div className="item-title">
                                    <h3>My Students</h3>
                                </div>
                                <div className="dropdown">
                                    <Link className="dropdown-toggle" to="#" role="button"
                                        data-toggle="dropdown" aria-expanded="false">...</Link>

                                    <div className="dropdown-menu dropdown-menu-right">
                                        <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                        <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                        <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-box-wrap">
                                <form className="search-form-box">
                                    <div className="row gutters-8">
                                        <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                                            <input type="text" placeholder="Search by Roll ..." className="form-control" />
                                        </div>
                                        <div className="col-4-xxxl col-xl-4 col-lg-4 col-12 form-group">
                                            <input type="text" placeholder="Search by Name ..." className="form-control" />
                                        </div>
                                        <div className="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                                            <input type="text" placeholder="Search by className ..." className="form-control" />
                                        </div>
                                        <div className="col-1-xxxl col-xl-2 col-lg-2 col-12 form-group">
                                            <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="table-responsive student-table-box">
                                    <table className="table display data-table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input checkAll" />
                                                        <label className="form-check-label">Roll</label>
                                                    </div>
                                                </th>
                                                <th>Photo</th>
                                                <th>Name</th>
                                                <th>Gender</th>
                                                <th>className</th>
                                                <th>Section</th>
                                                <th>Parents</th>
                                                <th>Address</th>
                                                <th>Date Of Birth</th>
                                                <th>Phone</th>
                                                <th>E-mail</th>
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
                                                <td className="text-center"><img src="img/figure/student2.png" alt="student" /></td>
                                                <td>Mark Willy</td>
                                                <td>Male</td>
                                                <td>2</td>
                                                <td>A</td>
                                                <td>Jack Sparrow </td>
                                                <td>TA-107 Newyork</td>
                                                <td>02/05/2001</td>
                                                <td>+ 123 9988568</td>
                                                <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="472c263d2e21262f2e2a7e7407202a262e2b6924282a">[email&#160;protected]</Link></td>
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
                                                <td className="text-center"><img src="img/figure/student3.png" alt="student" /></td>
                                                <td>Jessia Rose</td>
                                                <td>Female</td>
                                                <td>1</td>
                                                <td>A</td>
                                                <td>Maria Jamans</td>
                                                <td>59 Australia, Sydney</td>
                                                <td>02/05/2001</td>
                                                <td>+ 123 9988568</td>
                                                <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="264d475c4f40474e4f4b1f1566414b474f4a0845494b">[email&#160;protected]</Link></td>
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
                                                <td className="text-center"><img src="img/figure/student4.png" alt="student" /></td>
                                                <td>Mark Willy</td>
                                                <td>Male</td>
                                                <td>2</td>
                                                <td>A</td>
                                                <td>Jack Sparrow </td>
                                                <td>TA-107 Newyork</td>
                                                <td>02/05/2001</td>
                                                <td>+ 123 9988568</td>
                                                <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="ddb6bca7b4bbbcb5b4b0e4ee9dbab0bcb4b1f3beb2b0">[email&#160;protected]</Link></td>
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
                                                <td className="text-center"><img src="img/figure/student5.png" alt="student" /></td>
                                                <td>Jessia Rose</td>
                                                <td>Female</td>
                                                <td>1</td>
                                                <td>A</td>
                                                <td>Maria Jamans</td>
                                                <td>59 Australia, Sydney</td>
                                                <td>02/05/2001</td>
                                                <td>+ 123 9988568</td>
                                                <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="0b606a71626d6a63626632384b6c666a626725686466">[email&#160;protected]</Link></td>
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
                                                <td className="text-center"><img src="img/figure/student6.png" alt="student" /></td>
                                                <td>Mark Willy</td>
                                                <td>Male</td>
                                                <td>2</td>
                                                <td>A</td>
                                                <td>Jack Sparrow </td>
                                                <td>TA-107 Newyork</td>
                                                <td>02/05/2001</td>
                                                <td>+ 123 9988568</td>
                                                <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="573c362d3e31363f3e3a6e6417303a363e3b7934383a">[email&#160;protected]</Link></td>
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
                                                        <label className="form-check-label">#0026</label>
                                                    </div>
                                                </td>
                                                <td className="text-center"><img src="img/figure/student7.png" alt="student" /></td>
                                                <td>Jessia Rose</td>
                                                <td>Female</td>
                                                <td>1</td>
                                                <td>A</td>
                                                <td>Maria Jamans</td>
                                                <td>59 Australia, Sydney</td>
                                                <td>02/05/2001</td>
                                                <td>+ 123 9988568</td>
                                                <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="38535942515e59505155010b785f55595154165b5755">[email&#160;protected]</Link></td>
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
                                                        <label className="form-check-label">#0027</label>
                                                    </div>
                                                </td>
                                                <td className="text-center"><img src="img/figure/student8.png" alt="student" /></td>
                                                <td>Mark Willy</td>
                                                <td>Male</td>
                                                <td>2</td>
                                                <td>A</td>
                                                <td>Jack Sparrow </td>
                                                <td>TA-107 Newyork</td>
                                                <td>02/05/2001</td>
                                                <td>+ 123 9988568</td>
                                                <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6c070d16050a0d040501555f2c0b010d0500420f0301">[email&#160;protected]</Link></td>
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
                                                        <label className="form-check-label">#0028</label>
                                                    </div>
                                                </td>
                                                <td className="text-center"><img src="img/figure/student9.png" alt="student" /></td>
                                                <td>Jessia Rose</td>
                                                <td>Female</td>
                                                <td>1</td>
                                                <td>A</td>
                                                <td>Maria Jamans</td>
                                                <td>59 Australia, Sydney</td>
                                                <td>02/05/2001</td>
                                                <td>+ 123 9988568</td>
                                                <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="563d372c3f30373e3f3b6f6516313b373f3a7835393b">[email&#160;protected]</Link></td>
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
                                                        <label className="form-check-label">#0029</label>
                                                    </div>
                                                </td>
                                                <td className="text-center"><img src="img/figure/student10.png" alt="student" /></td>
                                                <td>Mark Willy</td>
                                                <td>Male</td>
                                                <td>2</td>
                                                <td>A</td>
                                                <td>Jack Sparrow </td>
                                                <td>TA-107 Newyork</td>
                                                <td>02/05/2001</td>
                                                <td>+ 123 9988568</td>
                                                <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="533832293a35323b3a3e6a6013343e323a3f7d303c3e">[email&#160;protected]</Link></td>
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
                                                        <label className="form-check-label">#0030</label>
                                                    </div>
                                                </td>
                                                <td className="text-center"><img src="img/figure/student6.png" alt="student" /></td>
                                                <td>Jessia Rose</td>
                                                <td>Female</td>
                                                <td>1</td>
                                                <td>A</td>
                                                <td>Maria Jamans</td>
                                                <td>59 Australia, Sydney</td>
                                                <td>02/05/2001</td>
                                                <td>+ 123 9988568</td>
                                                <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="58333922313e39303135616b183f35393134763b3735">[email&#160;protected]</Link></td>
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
            </div>
            {/* <!-- Student Table Area End Here --> */}
        </Layout>
    );
}

export default Index;
