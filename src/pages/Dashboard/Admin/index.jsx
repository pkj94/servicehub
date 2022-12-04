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
                  Line Chart 
              -------------------------------------*/
        if (window.$("#earning-line-chart").length) {

            var lineChartData = {
                labels: ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", ""],
                datasets: [{
                    data: [0, 5e4, 1e4, 5e4, 14e3, 7e4, 5e4, 75e3, 5e4],
                    backgroundColor: '#ff0000',
                    borderColor: '#ff0000',
                    borderWidth: 1,
                    pointRadius: 0,
                    pointBackgroundColor: '#ff0000',
                    pointBorderColor: '#ffffff',
                    pointHoverRadius: 6,
                    pointHoverBorderWidth: 3,
                    fill: 'origin',
                    label: "Total Collection"
                },
                {
                    data: [0, 3e4, 2e4, 6e4, 7e4, 5e4, 5e4, 9e4, 8e4],
                    backgroundColor: '#417dfc',
                    borderColor: '#417dfc',
                    borderWidth: 1,
                    pointRadius: 0,
                    pointBackgroundColor: '#304ffe',
                    pointBorderColor: '#ffffff',
                    pointHoverRadius: 6,
                    pointHoverBorderWidth: 3,
                    fill: 'origin',
                    label: "Fees Collection"
                }
                ]
            };
            var lineChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 2000
                },
                scales: {

                    xAxes: [{
                        display: true,
                        ticks: {
                            display: true,
                            fontColor: "#222222",
                            fontSize: 16,
                            padding: 20
                        },
                        gridLines: {
                            display: true,
                            drawBorder: true,
                            color: '#cccccc',
                            borderDash: [5, 5]
                        }
                    }],
                    yAxes: [{
                        display: true,
                        ticks: {
                            display: true,
                            autoSkip: true,
                            maxRotation: 0,
                            fontColor: "#646464",
                            fontSize: 16,
                            stepSize: 25000,
                            padding: 20,
                            callback: function (value) {
                                var ranges = [{
                                    divider: 1e6,
                                    suffix: 'M'
                                },
                                {
                                    divider: 1e3,
                                    suffix: 'k'
                                }
                                ];

                                function formatNumber(n) {
                                    for (var i = 0; i < ranges.length; i++) {
                                        if (n >= ranges[i].divider) {
                                            return (n / ranges[i].divider).toString() + ranges[i].suffix;
                                        }
                                    }
                                    return n;
                                }
                                return formatNumber(value);
                            }
                        },
                        gridLines: {
                            display: true,
                            drawBorder: false,
                            color: '#cccccc',
                            borderDash: [5, 5],
                            zeroLineBorderDash: [5, 5],
                        }
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                    enabled: true
                },
                elements: {
                    line: {
                        tension: .35
                    },
                    point: {
                        pointStyle: 'circle'
                    }
                }
            };
            var earningCanvas = window.$("#earning-line-chart").get(0).getContext("2d");
            new window.Chart(earningCanvas, {
                type: 'line',
                data: lineChartData,
                options: lineChartOptions
            });
        }
        /*-------------------------------------
          Bar Chart 
      -------------------------------------*/
        if (window.$("#expense-bar-chart").length) {

            var barChartData = {
                labels: ["Jan", "Feb", "Mar"],
                datasets: [{
                    backgroundColor: ["#40dfcd", "#417dfc", "#ffaa01"],
                    data: [125000, 100000, 75000, 50000, 150000],
                    label: "Expenses (millions)"
                },]
            };
            var barChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 2000
                },
                scales: {

                    xAxes: [{
                        display: false,
                        maxBarThickness: 100,
                        ticks: {
                            display: false,
                            padding: 0,
                            fontColor: "#646464",
                            fontSize: 14,
                        },
                        gridLines: {
                            display: true,
                            color: '#e1e1e1',
                        }
                    }],
                    yAxes: [{
                        display: true,
                        ticks: {
                            display: true,
                            autoSkip: false,
                            fontColor: "#646464",
                            fontSize: 14,
                            stepSize: 25000,
                            padding: 20,
                            beginAtZero: true,
                            callback: function (value) {
                                var ranges = [{
                                    divider: 1e6,
                                    suffix: 'M'
                                },
                                {
                                    divider: 1e3,
                                    suffix: 'k'
                                }
                                ];

                                function formatNumber(n) {
                                    for (var i = 0; i < ranges.length; i++) {
                                        if (n >= ranges[i].divider) {
                                            return (n / ranges[i].divider).toString() + ranges[i].suffix;
                                        }
                                    }
                                    return n;
                                }
                                return formatNumber(value);
                            }
                        },
                        gridLines: {
                            display: true,
                            drawBorder: true,
                            color: '#e1e1e1',
                            zeroLineColor: '#e1e1e1'

                        }
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: true
                },
                elements: {}
            };
            var expenseCanvas = window.$("#expense-bar-chart").get(0).getContext("2d");
            new window.Chart(expenseCanvas, {
                type: 'bar',
                data: barChartData,
                options: barChartOptions
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
        /*-------------------------------------
          Calender initiate 
      -------------------------------------*/
        if (window.$.fn.fullCalendar !== undefined) {
            window.$('#fc-calender').fullCalendar({
                header: {
                    center: 'basicDay,basicWeek,month',
                    left: 'title',
                    right: 'prev,next',
                },
                fixedWeekCount: false,
                navLinks: true, // can click day/week names to navigate views
                editable: true,
                eventLimit: true, // allow "more" link when too many events
                aspectRatio: 1.8,
                events: [{
                    title: 'All Day Event',
                    start: '2019-04-01'
                },

                {
                    title: 'Meeting',
                    start: '2019-04-12T14:30:00'
                },
                {
                    title: 'Happy Hour',
                    start: '2019-04-15T17:30:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2019-04-20T07:00:00'
                }
                ]
            });
        }
    })
    return (
        <Layout>
            {/* <!-- Breadcubs Area Start Here --> */}
            <div className="breadcrumbs-area">
                <h3>Admin Dashboard</h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>Admin</li>
                </ul>
            </div>
            {/* <!-- Breadcubs Area End Here --> */}
            {/* <!-- Dashboard summery Start Here --> */}
            <div className="row gutters-20">
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="dashboard-summery-one mg-b-20">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="item-icon bg-light-green ">
                                    <i className="flaticon-classmates text-green"></i>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="item-content">
                                    <div className="item-title">Students</div>
                                    <div className="item-number"><span className="counter" data-num="150000">1,50,000</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="dashboard-summery-one mg-b-20">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="item-icon bg-light-blue">
                                    <i className="flaticon-multiple-users-silhouette text-blue"></i>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="item-content">
                                    <div className="item-title">Teachers</div>
                                    <div className="item-number"><span className="counter" data-num="2250">2,250</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="dashboard-summery-one mg-b-20">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="item-icon bg-light-yellow">
                                    <i className="flaticon-couple text-orange"></i>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="item-content">
                                    <div className="item-title">Parents</div>
                                    <div className="item-number"><span className="counter" data-num="5690">5,690</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="dashboard-summery-one mg-b-20">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="item-icon bg-light-red">
                                    <i className="flaticon-money text-red"></i>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="item-content">
                                    <div className="item-title">Earnings</div>
                                    <div className="item-number"><span>$</span><span className="counter" data-num="193000">1,93,000</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Dashboard summery End Here --> */}
            {/* <!-- Dashboard Content Start Here --> */}
            <div className="row gutters-20">
                <div className="col-12 col-xl-8 col-6-xxxl">
                    <div className="card dashboard-card-one pd-b-20">
                        <div className="card-body">
                            <div className="heading-layout1">
                                <div className="item-title">
                                    <h3>Earnings</h3>
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
                            <div className="earning-report">
                                <div className="item-content">
                                    <div className="single-item pseudo-bg-blue">
                                        <h4>Total Collections</h4>
                                        <span>75,000</span>
                                    </div>
                                    <div className="single-item pseudo-bg-red">
                                        <h4>Fees Collection</h4>
                                        <span>15,000</span>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <Link className="date-dropdown-toggle" to="#" role="button" data-toggle="dropdown"
                                        aria-expanded="false">Jan 20, 2019</Link>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <Link className="dropdown-item" to="#">Jan 20, 2019</Link>
                                        <Link className="dropdown-item" to="#">Jan 20, 2021</Link>
                                        <Link className="dropdown-item" to="#">Jan 20, 2020</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="earning-chart-wrap">
                                <canvas id="earning-line-chart" width="660" height="320"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-4 col-3-xxxl">
                    <div className="card dashboard-card-two pd-b-20">
                        <div className="card-body">
                            <div className="heading-layout1">
                                <div className="item-title">
                                    <h3>Expenses</h3>
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
                            <div className="expense-report">
                                <div className="monthly-expense pseudo-bg-Aquamarine">
                                    <div className="expense-date">Jan 2019</div>
                                    <div className="expense-amount"><span>$</span> 15,000</div>
                                </div>
                                <div className="monthly-expense pseudo-bg-blue">
                                    <div className="expense-date">Feb 2019</div>
                                    <div className="expense-amount"><span>$</span> 10,000</div>
                                </div>
                                <div className="monthly-expense pseudo-bg-yellow">
                                    <div className="expense-date">Mar 2019</div>
                                    <div className="expense-amount"><span>$</span> 8,000</div>
                                </div>
                            </div>
                            <div className="expense-chart-wrap">
                                <canvas id="expense-bar-chart" width="100" height="300"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-6 col-3-xxxl">
                    <div className="card dashboard-card-three pd-b-20">
                        <div className="card-body">
                            <div className="heading-layout1">
                                <div className="item-title">
                                    <h3>Students</h3>
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
                                <canvas id="student-doughnut-chart" width="100" height="300"></canvas>
                            </div>
                            <div className="student-report">
                                <div className="student-count pseudo-bg-blue">
                                    <h4 className="item-title">Female Students</h4>
                                    <div className="item-number">45,000</div>
                                </div>
                                <div className="student-count pseudo-bg-yellow">
                                    <h4 className="item-title">Male Students</h4>
                                    <div className="item-number">1,05,000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-6 col-4-xxxl">
                    <div className="card dashboard-card-four pd-b-20">
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
                <div className="col-lg-6 col-xl-6 col-4-xxxl">
                    <div className="card dashboard-card-five pd-b-20">
                        <div className="card-body pd-b-14">
                            <div className="heading-layout1">
                                <div className="item-title">
                                    <h3>Website Traffic</h3>
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
                            <h6 className="traffic-title">Unique Visitors</h6>
                            <div className="traffic-number">2,590</div>
                            <div className="traffic-bar">
                                <div className="direct" data-toggle="tooltip" data-placement="top" title="Direct">
                                </div>
                                <div className="search" data-toggle="tooltip" data-placement="top" title="Search">
                                </div>
                                <div className="referrals" data-toggle="tooltip" data-placement="top" title="Referrals">
                                </div>
                                <div className="social" data-toggle="tooltip" data-placement="top" title="Social">
                                </div>
                            </div>
                            <div className="traffic-table table-responsive">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td className="t-title pseudo-bg-Aquamarine">Direct</td>
                                            <td>12,890</td>
                                            <td>50%</td>
                                        </tr>
                                        <tr>
                                            <td className="t-title pseudo-bg-blue">Search</td>
                                            <td>7,245</td>
                                            <td>27%</td>
                                        </tr>
                                        <tr>
                                            <td className="t-title pseudo-bg-yellow">Referrals</td>
                                            <td>4,256</td>
                                            <td>8%</td>
                                        </tr>
                                        <tr>
                                            <td className="t-title pseudo-bg-red">Social</td>
                                            <td>500</td>
                                            <td>7%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-6 col-4-xxxl">
                    <div className="card dashboard-card-six pd-b-20">
                        <div className="card-body">
                            <div className="heading-layout1 mg-b-17">
                                <div className="item-title">
                                    <h3>Notice Board</h3>
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
            {/* <!-- Dashboard Content End Here --> */}
            {/* <!-- Social Media Start Here --> */}
            <div className="row gutters-20">
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card dashboard-card-seven">
                        <div className="social-media bg-fb hover-fb">
                            <div className="media media-none--lg">
                                <div className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </div>
                                <div className="media-body space-sm">
                                    <h6 className="item-title">Like us on facebook</h6>
                                </div>
                            </div>
                            <div className="social-like">30,000</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card dashboard-card-seven">
                        <div className="social-media bg-twitter hover-twitter">
                            <div className="media media-none--lg">
                                <div className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </div>
                                <div className="media-body space-sm">
                                    <h6 className="item-title">Follow us on twitter</h6>
                                </div>
                            </div>
                            <div className="social-like">1,11,000</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card dashboard-card-seven">
                        <div className="social-media bg-gplus hover-gplus">
                            <div className="media media-none--lg">
                                <div className="social-icon">
                                    <i className="fab fa-google-plus-g"></i>
                                </div>
                                <div className="media-body space-sm">
                                    <h6 className="item-title">Follow us on googleplus</h6>
                                </div>
                            </div>
                            <div className="social-like">19,000</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card dashboard-card-seven">
                        <div className="social-media bg-linkedin hover-linked">
                            <div className="media media-none--lg">
                                <div className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                                <div className="media-body space-sm">
                                    <h6 className="item-title">Follow us on linked</h6>
                                </div>
                            </div>
                            <div className="social-like">45,000</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Social Media End Here --> */}
        </Layout>
    );
}

export default Index;
