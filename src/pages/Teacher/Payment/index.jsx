import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Layout';

const Index = () => {
    useEffect(() => {
        window.$(".checkAll").on("click", function () {
            window.$(this).parents('.table').find('input:checkbox').prop('checked', this.checked);
        });
        if (window.$.fn.DataTable !== undefined) {
            window.$('.teacher-payment-table').DataTable({
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
                <h3>Teachers</h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>Teacher Payment</li>
                </ul>
            </div>
            {/* <!-- Breadcubs Area End Here --> */}
            {/* <!-- Teacher Payment Area Start Here --> */}
            <div className="card height-auto">
                <div className="card-body">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>All Teachers Payment History</h3>
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
                                <input type="text" placeholder="Search by ID ..." className="form-control" />
                            </div>
                            <div className="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                                <input type="text" placeholder="Search by Name ..." className="form-control" />
                            </div>
                            <div className="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                                <input type="text" placeholder="Search by Phone" className="form-control" />
                            </div>
                            <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
                                <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                            </div>
                        </div>
                    </form>
                    <div className="table-responsive">
                        <table className="table teacher-payment-table text-nowrap">
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
                                    <th>Class</th>
                                    <th>Subject</th>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0021</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student2.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>English</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="701b110a19161118191d494330171d11191c5e131f1d">[email&#160;protected]</Link></td>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0022</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student3.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>Mathematics</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-danger d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="731812091a15121b1a1e4a4033141e121a1f5d101c1e">[email&#160;protected]</Link></td>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0023</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student4.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>Mathematics</td>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0024</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student5.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>Mathematics</td>
                                    <td>$5,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="bcd7ddc6d5daddd4d5d1858ffcdbd1ddd5d092dfd3d1">[email&#160;protected]</Link></td>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0021</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student2.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>English</td>
                                    <td>$4,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="7f141e0516191e171612464c3f18121e1613511c1012">[email&#160;protected]</Link></td>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0022</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student3.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>Mathematics</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-danger d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="513a302b38373039383c686211363c30383d7f323e3c">[email&#160;protected]</Link></td>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0023</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student4.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>Mathematics</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="1d767c67747b7c757470242e5d7a707c7471337e7270">[email&#160;protected]</Link></td>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0024</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student5.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>Mathematics</td>
                                    <td>$1,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6b000a11020d0a03020652582b0c060a020745080406">[email&#160;protected]</Link></td>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0021</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student2.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>English</td>
                                    <td>$3,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="cca7adb6a5aaada4a5a1f5ff8caba1ada5a0e2afa3a1">[email&#160;protected]</Link></td>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0022</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student3.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>Mathematics</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-danger d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="caa1abb0a3acaba2a3a7f3f98aada7aba3a6e4a9a5a7">[email&#160;protected]</Link></td>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0023</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student4.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>Mathematics</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="1d767c67747b7c757470242e5d7a707c7471337e7270">[email&#160;protected]</Link></td>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0024</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student5.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>Mathematics</td>
                                    <td>$8,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="056e647f6c63646d6c683c36456268646c692b666a68">[email&#160;protected]</Link></td>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0021</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student2.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>English</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="711a100b18171019181c484231161c10181d5f121e1c">[email&#160;protected]</Link></td>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0022</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student3.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>Mathematics</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-danger d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="7d161c07141b1c151410444e3d1a101c1411531e1210">[email&#160;protected]</Link></td>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0023</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student4.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>Mathematics</td>
                                    <td>$5,000.00</td>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0024</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student5.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>Mathematics</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="97fcf6edfef1f6fffefaaea4d7f0faf6fefbb9f4f8fa">[email&#160;protected]</Link></td>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0021</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student2.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>English</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="620903180b04030a0b0f5b5122050f030b0e4c010d0f">[email&#160;protected]</Link></td>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0022</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student3.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>Mathematics</td>
                                    <td>$2,000.00</td>
                                    <td className="badge badge-pill badge-danger d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="7f141e0516191e171612464c3f18121e1613511c1012">[email&#160;protected]</Link></td>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0023</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student4.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>Mathematics</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0024</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student5.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>Mathematics</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="0f646e7566696e676662363c4f68626e6663216c6062">[email&#160;protected]</Link></td>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0021</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student2.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>English</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b8d3d9c2d1ded9d0d1d5818bf8dfd5d9d1d496dbd7d5">[email&#160;protected]</Link></td>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0022</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student3.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>Mathematics</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-danger d-block mg-t-8">Paid</td>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0023</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student4.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>Mathematics</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="533832293a35323b3a3e6a6013343e323a3f7d303c3e">[email&#160;protected]</Link></td>
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
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0024</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student5.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>Mathematics</td>
                                    <td>$2,0000.00</td>
                                    <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="046f657e6d62656c6d693d37446369656d682a676b69">[email&#160;protected]</Link></td>
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
            {/* <!-- Teacher Payment Area End Here --> */}
        </Layout>
    );
}

export default Index;
