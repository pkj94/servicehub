import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Layout';

const Index = () => {
    useEffect(() => {
        window.$(".checkAll").on("click", function () {
            window.$(this).parents('.table').find('input:checkbox').prop('checked', this.checked);
        });
        if (window.$.fn.DataTable !== undefined) {
            window.$('.fee-table').DataTable({
                paging: true,
                searching: false,
                info: false,
                lengthChange: false,
                lengthMenu: [20, 50, 75, 100],
                columnDefs: [{
                    targets: [0, -1], // column or columns numbers
                    orderable: false // set orderable for selected columns
                }],
            });
        }
    }, [])
    return (
        <Layout>
            {/* <!-- Breadcubs Area Start Here --> */}
            <div className="breadcrumbs-area">
                <h3>Accounts</h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>Fees Collection</li>
                </ul>
            </div>
            {/* <!-- Breadcubs Area End Here -->
            <!-- Fees Table Area Start Here --> */}
            <div className="card height-auto">
                <div className="card-body">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>All Fees Collection</h3>
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
                    <form className="mg-b-20">
                        <div className="row gutters-8">
                            <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                                <input type="text" placeholder="Search by ID ..." className="form-control"/>
                            </div>
                            <div className="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                                <input type="text" placeholder="Search by Name ..." className="form-control"/>
                            </div>
                            <div className="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                                <input type="text" placeholder="Search by Phone" className="form-control"/>
                            </div>
                            <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
                                <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                            </div>
                        </div>
                    </form>
                    <div className="table-responsive">
                        <table className="table fee-table text-nowrap">
                            <thead>
                                <tr>
                                    <th>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input checkAll" />
                                                <label className="form-check-label">ID</label>
                                        </div>
                                    </th>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Class</th>
                                    <th>Section</th>
                                    <th>Expense</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Phone</th>
                                    <th>E-mail</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0021</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student2.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="98f3f9e2f1fef9f0f1f5a1abd8fff5f9f1f4b6fbf7f5">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0022</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student3.png" alt="student" /></td>
                                    <td>Jessia</td>
                                    <td>Female</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-danger d-block mg-t-8">Unpaid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="e18a809b88878089888cd8d2a1868c80888dcf828e8c">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0023</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student4.png" alt="student" /></td>
                                    <td>Mike John</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="3d565c47545b5c555450040e7d5a505c5451135e5250">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0024</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student6.png" alt="student" /></td>
                                    <td>Maria Jaman</td>
                                    <td>Female</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$4,0000.00</td>
                                    <td className="badge badge-pill badge-danger d-block mg-t-8">Unpaid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c9a2a8b3a0afa8a1a0a4f0fa89aea4a8a0a5e7aaa6a4">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0025</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student2.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="076c667d6e61666f6e6a3e3447606a666e6b2964686a">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0026</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student3.png" alt="student" /></td>
                                    <td>Jessia</td>
                                    <td>Female</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-danger d-block mg-t-8">Unpaid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="660d071c0f00070e0f0b5f5526010b070f0a4805090b">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0027</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student4.png" alt="student" /></td>
                                    <td>Mike John</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="f59e948f9c93949d9c98ccc6b59298949c99db969a98">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0028</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student6.png" alt="student" /></td>
                                    <td>Maria Jaman</td>
                                    <td>Female</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$4,0000.00</td>
                                    <td className="badge badge-pill badge-danger d-block mg-t-8">Unpaid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="87ece6fdeee1e6efeeeabeb4c7e0eae6eeeba9e4e8ea">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0029</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student2.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="3a515b40535c5b52535703097a5d575b535614595557">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0030</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student3.png" alt="student" /></td>
                                    <td>Jessia</td>
                                    <td>Female</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-danger d-block mg-t-8">Unpaid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d2b9b3a8bbb4b3babbbfebe192b5bfb3bbbefcb1bdbf">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0031</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student4.png" alt="student" /></td>
                                    <td>Mike John</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="670c061d0e01060f0e0a5e5427000a060e0b4904080a">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0032</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student6.png" alt="student" /></td>
                                    <td>Maria Jaman</td>
                                    <td>Female</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$4,0000.00</td>
                                    <td className="badge badge-pill badge-danger d-block mg-t-8">Unpaid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="0a616b70636c6b62636733394a6d676b636624696567">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0033</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student8.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6e050f1407080f060703575d2e09030f0702400d0103">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0034</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student3.png" alt="student" /></td>
                                    <td>Jessia</td>
                                    <td>Female</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-danger d-block mg-t-8">Unpaid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="234842594a45424b4a4e1a1063444e424a4f0d404c4e">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0035</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student4.png" alt="student" /></td>
                                    <td>Mike John</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="305b514a59565158595d090370575d51595c1e535f5d">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0036</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student6.png" alt="student" /></td>
                                    <td>Maria Jaman</td>
                                    <td>Female</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$4,0000.00</td>
                                    <td className="badge badge-pill badge-danger d-block mg-t-8">Unpaid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="dab1bba0b3bcbbb2b3b7e3e99abdb7bbb3b6f4b9b5b7">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0037</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student2.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="4a212b30232c2b22232773790a2d272b232664292527">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0038</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student3.png" alt="student" /></td>
                                    <td>Jessia</td>
                                    <td>Female</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-danger d-block mg-t-8">Unpaid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="19727863707f78717074202a597e74787075377a7674">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0039</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student4.png" alt="student" /></td>
                                    <td>Mike John</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="274c465d4e41464f4e4a1e1467404a464e4b0944484a">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0040</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student6.png" alt="student" /></td>
                                    <td>Maria Jaman</td>
                                    <td>Female</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$4,0000.00</td>
                                    <td className="badge badge-pill badge-danger d-block mg-t-8">Unpaid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6e050f1407080f060703575d2e09030f0702400d0103">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0041</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student2.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="fe959f8497989f969793c7cdbe99939f9792d09d9193">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0042</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student3.png" alt="student" /></td>
                                    <td>Jessia</td>
                                    <td>Female</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-danger d-block mg-t-8">Unpaid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="8be0eaf1e2edeae3e2e6b2b8cbece6eae2e7a5e8e4e6">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0043</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student4.png" alt="student" /></td>
                                    <td>Mike John</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b3d8d2c9dad5d2dbdade8a80f3d4ded2dadf9dd0dcde">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">#0044</label>
                                        </div>
                                    </td>
                                    <td><img src="img/figure/student6.png" alt="student" /></td>
                                    <td>Maria Jaman</td>
                                    <td>Female</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Class Test</td>
                                    <td>$4,0000.00</td>
                                    <td className="badge badge-pill badge-danger d-block mg-t-8">Unpaid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b4dfd5ceddd2d5dcddd98d87f4d3d9d5ddd89ad7dbd9">[email&#160;protected]</Link></td>
                                    <td>
                                        <div className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="flaticon-more-button-of-three-dots"></span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <!-- Fees Table Area End Here --> */}
        </Layout>
    );
}

export default Index;
