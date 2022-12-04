import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Layout';

const Index = () => {
    useEffect(() => {

        window.$(".checkAll").on("click", function () {
            window.$(this).parents('.table').find('input:checkbox').prop('checked', this.checked);
        });
        if (window.$.fn.DataTable !== undefined) {
            window.$('.timetable-table').DataTable({
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
    useEffect(() => {
        if (window.$.fn.select2 !== undefined) {
            window.$('.select2').select2({
                width: '100%'
            });
        }
    })
    return (
        <Layout>
            {/* <!-- Breadcubs Area Start Here --> */}
            <div className="breadcrumbs-area">
                <h3>Class Routine</h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>Routine ( Timetable )</li>
                </ul>
            </div>
            {/* <!-- Breadcubs Area End Here -->
            <!-- Class Routine Area Start Here --> */}
            <div className="row">
                <div className="col-4-xxxl col-12">
                    <div className="card height-auto">
                        <div className="card-body">
                            <div className="heading-layout1">
                                <div className="item-title">
                                    <h3>Add Class Routine</h3>
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
                            <form className="new-added-form">
                                <div className="row">
                                    <div className="col-12-xxxl col-lg-6 col-12 form-group">
                                        <label>Subject Name *</label>
                                        <input type="text" placeholder="Subject Name "  name="subjectName" className="form-control" />
                                    </div>
                                    <div className="col-12-xxxl col-lg-6 col-12 form-group">
                                        <label>Subject Type *</label>
                                        <select className="select2"  name="subjectType">
                                            <option value="">Please Select</option>
                                            <option value="1">Bangla</option>
                                            <option value="2">English</option>
                                            <option value="3">Mathematics</option>
                                            <option value="3">Economics</option>
                                            <option value="3">Chemistry</option>
                                        </select>
                                    </div>
                                    <div className="col-12-xxxl col-lg-6 col-12 form-group">
                                        <label>Select Class *</label>
                                        <select className="select2"  name="selectClass">
                                            <option value="0">Please Select</option>
                                            <option value="1">Play</option>
                                            <option value="2">Nursery</option>
                                            <option value="3">One</option>
                                            <option value="3">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="col-12-xxxl col-lg-6 col-12 form-group">
                                        <label>Select Code</label>
                                        <select className="select2"  name="selectCode">
                                            <option value="0">Please Select</option>
                                            <option value="1">00524</option>
                                            <option value="2">00525</option>
                                            <option value="3">00526</option>
                                            <option value="3">00527</option>
                                            <option value="3">00528</option>
                                        </select>
                                    </div>
                                    <div className="col-12 form-group mg-t-8">
                                        <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                        <button type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-8-xxxl col-12">
                    <div className="card height-auto">
                        <div className="card-body">
                            <div className="heading-layout1">
                                <div className="item-title">
                                    <h3>Class Routine</h3>
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
                            <form className="mg-b-20">
                                <div className="row gutters-8">
                                    <div className="col-lg-4 col-12 form-group">
                                        <input type="text" placeholder="Search by Day ..." className="form-control" />
                                    </div>
                                    <div className="col-lg-3 col-12 form-group">
                                        <input type="text" placeholder="Search by Class ..." className="form-control" />
                                    </div>
                                    <div className="col-lg-3 col-12 form-group">
                                        <input type="text" placeholder="Search by Section ..." className="form-control" />
                                    </div>
                                    <div className="col-lg-2 col-12 form-group">
                                        <button type="submit"
                                            className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                                    </div>
                                </div>
                            </form>
                            <div className="table-responsive">
                                <table className="table display timetable-table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input checkAll" />
                                                    <label className="form-check-label">Day</label>
                                                </div>
                                            </th>
                                            <th>Class</th>
                                            <th>Subject</th>
                                            <th>Section</th>
                                            <th>Teacher</th>
                                            <th>Time</th>
                                            <th>Date</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label">Sunday</label>
                                                </div>
                                            </td>
                                            <td>4</td>
                                            <td>Accounting</td>
                                            <td>A</td>
                                            <td>Mike John</td>
                                            <td>10.00 am-11.00 am</td>
                                            <td>20/06/2019</td>
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
                                                    <label className="form-check-label">Monday</label>
                                                </div>
                                            </td>
                                            <td>4</td>
                                            <td>English</td>
                                            <td>A</td>
                                            <td>Adam John</td>
                                            <td>10.00 am-11.00 am</td>
                                            <td>20/06/2019</td>
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
                                                    <label className="form-check-label">Tuesday</label>
                                                </div>
                                            </td>
                                            <td>4</td>
                                            <td>Economics</td>
                                            <td>A</td>
                                            <td>Johanthon Ray</td>
                                            <td>10.00 am-11.00 am</td>
                                            <td>20/06/2019</td>
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
                                                    <label className="form-check-label">Wednesday</label>
                                                </div>
                                            </td>
                                            <td>4</td>
                                            <td>Drawing</td>
                                            <td>A</td>
                                            <td>Mike Jonas</td>
                                            <td>10.00 am-11.00 am</td>
                                            <td>20/06/2019</td>
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
                                                    <label className="form-check-label">Thursday</label>
                                                </div>
                                            </td>
                                            <td>4</td>
                                            <td>English</td>
                                            <td>A</td>
                                            <td>Kate Well</td>
                                            <td>10.00 am-11.00 am</td>
                                            <td>20/06/2019</td>
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
                                                    <label className="form-check-label">Friday</label>
                                                </div>
                                            </td>
                                            <td>4</td>
                                            <td>Chemistry</td>
                                            <td>A</td>
                                            <td>Mike John</td>
                                            <td>10.00 am-11.00 am</td>
                                            <td>20/06/2019</td>
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
                                                    <label className="form-check-label">Saturday</label>
                                                </div>
                                            </td>
                                            <td>4</td>
                                            <td>English</td>
                                            <td>A</td>
                                            <td>Mike John</td>
                                            <td>10.00 am-11.00 am</td>
                                            <td>20/06/2019</td>
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
            {/* <!-- Class Routine Area End Here --> */}
        </Layout>
    );
}

export default Index;
