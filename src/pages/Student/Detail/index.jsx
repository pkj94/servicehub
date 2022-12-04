import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Layout';

const Index = () => {
    return (
        <Layout>
            {/* <!-- Breadcubs Area Start Here --> */}
            <div className="breadcrumbs-area">
                <h3>Students</h3>
                <ul>
                    <li>
                        <Link to="index.html">Home</Link>
                    </li>
                    <li>Student Details</li>
                </ul>
            </div>
            {/* <!-- Breadcubs Area End Here -->
            <!-- Student Details Area Start Here --> */}
            <div className="card height-auto">
                <div className="card-body">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>About Me</h3>
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
                    <div className="single-info-details">
                        <div className="item-img">
                            <img src="img/figure/student1.jpg" alt="student" />
                        </div>
                        <div className="item-content">
                            <div className="header-inline item-header">
                                <h3 className="text-dark-medium font-medium">Jessia Rose</h3>
                                <div className="header-elements">
                                    <ul>
                                        <li><Link to="#"><i className="far fa-edit"></i></Link></li>
                                        <li><Link to="#"><i className="fas fa-print"></i></Link></li>
                                        <li><Link to="#"><i className="fas fa-download"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <p>Aliquam erat volutpat. Curabiene natis massa sedde lacu stiquen sodale
                                word moun taiery.Aliquam erat volutpaturabiene natis massa sedde  sodale
                                word moun taiery.</p>
                            <div className="info-table table-responsive">
                                <table className="table text-nowrap">
                                    <tbody>
                                        <tr>
                                            <td>Name:</td>
                                            <td className="font-medium text-dark-medium">Jessia Rose</td>
                                        </tr>
                                        <tr>
                                            <td>Gender:</td>
                                            <td className="font-medium text-dark-medium">Female</td>
                                        </tr>
                                        <tr>
                                            <td>Father Name:</td>
                                            <td className="font-medium text-dark-medium">Steve Jones</td>
                                        </tr>
                                        <tr>
                                            <td>Mother Name:</td>
                                            <td className="font-medium text-dark-medium">Naomi Rose</td>
                                        </tr>
                                        <tr>
                                            <td>Date Of Birth:</td>
                                            <td className="font-medium text-dark-medium">07.08.2016</td>
                                        </tr>
                                        <tr>
                                            <td>Religion:</td>
                                            <td className="font-medium text-dark-medium">Islam</td>
                                        </tr>
                                        <tr>
                                            <td>Father Occupation:</td>
                                            <td className="font-medium text-dark-medium">Graphic Designer</td>
                                        </tr>
                                        <tr>
                                            <td>E-mail:</td>
                                            <td className="font-medium text-dark-medium"><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="81ebe4f2f2e8e0f3eef2e4c1e6ece0e8edafe2eeec">[email&#160;protected]</Link></td>
                                        </tr>
                                        <tr>
                                            <td>Admission Date:</td>
                                            <td className="font-medium text-dark-medium">07.08.2019</td>
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
                                            <td>Address:</td>
                                            <td className="font-medium text-dark-medium">House #10, Road #6, Australia</td>
                                        </tr>
                                        <tr>
                                            <td>Phone:</td>
                                            <td className="font-medium text-dark-medium">+ 88 98568888418</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Student Details Area End Here --> */}
        </Layout>
    );
}

export default Index;
