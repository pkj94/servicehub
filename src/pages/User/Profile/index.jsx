import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { me } from '../../../redux/actions/user';
import Layout from '../../Layout';
import moment from 'moment';
const Index = () => {
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth.data);

    useEffect(() => {

    }, [])
    useEffect(() => {
        if (window.$.fn.select2 !== undefined) {
            window.$('.select2').select2({
                width: '100%'
            });
        }
        /*-------------------------------------
         Date Picker
     -------------------------------------*/
        if (window.$.fn.datepicker !== undefined) {
            window.$('.air-datepicker').datepicker({
                language: {
                    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    today: 'Today',
                    clear: 'Clear',
                    dateFormat: 'dd/mm/yyyy',
                    firstDay: 0
                }
            });
        }
    })
    const refresh = () => {
        dispatch(me(auth));
    }
    return (
        <Layout>
            {/* <!-- Breadcubs Area Start Here --> */}
            <div className="breadcrumbs-area">
                <h3>Profile</h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>Profile</li>
                </ul>
            </div>
            {/* <!-- Breadcubs Area End Here --> */}
            {/* <!-- Account Settings Area Start Here --> */}
            <div className="row">
                {edit ?
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="heading-layout1">
                                    <div className="item-title">
                                        <h3>Add New User</h3>
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
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>First Name *</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Last Name *</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>User Type *</label>
                                            <select className="select2">
                                                <option value="">Please Select*</option>
                                                <option value="1">Super Admin</option>
                                                <option value="2">Admin</option>
                                                <option value="3">User</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Gender *</label>
                                            <select className="select2">
                                                <option value="">Please Select Gender *</option>
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                                <option value="3">Others</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Father's Name</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Mother's Name</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Date Of Birth *</label>
                                            <input type="text" placeholder="dd/mm/yyyy" className="form-control air-datepicker"
                                                data-position='bottom right' />
                                            <i className="far fa-calendar-alt"></i>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Religion *</label>
                                            <select className="select2">
                                                <option value="">Please Select *</option>
                                                <option value="1">Islam</option>
                                                <option value="2">Christian</option>
                                                <option value="3">Hindu</option>
                                                <option value="4">Buddhish</option>
                                                <option value="5">Others</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Joining Data *</label>
                                            <input type="text" placeholder="dd/mm/yyyy" className="form-control air-datepicker"
                                                data-position='bottom right' />
                                            <i className="far fa-calendar-alt"></i>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>E-Mail</label>
                                            <input type="email" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Subject *</label>
                                            <select className="select2">
                                                <option value="">Please Select*</option>
                                                <option value="1">Mathmetics</option>
                                                <option value="2">English</option>
                                                <option value="3">Chemistry</option>
                                                <option value="3">Biology</option>
                                                <option value="3">Others</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Class *</label>
                                            <select className="select2">
                                                <option value="">Please Select Class *</option>
                                                <option value="1">Play</option>
                                                <option value="2">Nursery</option>
                                                <option value="3">One</option>
                                                <option value="3">Two</option>
                                                <option value="3">Three</option>
                                                <option value="3">Four</option>
                                                <option value="3">Five</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Section *</label>
                                            <select className="select2">
                                                <option value="">Please Select Section *</option>
                                                <option value="1">Pink</option>
                                                <option value="2">Blue</option>
                                                <option value="3">Bird</option>
                                                <option value="3">Rose</option>
                                                <option value="3">Red</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>ID No *</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Phone</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-lg-6 col-12 form-group">
                                            <label>Adress *</label>
                                            <textarea className="textarea form-control" name="message" id="form-message" cols="10"
                                                rows="4"></textarea>
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
                    :
                    <div className="col-12-xxxl col-xl-12">
                        <div className="card account-settings-box">
                            <div className="card-body">
                                <div className="heading-layout1 mg-b-20">
                                    <div className="item-title">
                                        <h3>User Profile</h3>
                                    </div>
                                    <div className="dropdown">
                                        <Link className="dropdown-toggle" to="#" role="button"
                                            data-toggle="dropdown" aria-expanded="false">...</Link>

                                        <div className="dropdown-menu dropdown-menu-right">
                                            <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                            <Link className="dropdown-item" to="#" onClick={() => setEdit(true)}><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                            <Link className="dropdown-item" to="#" onClick={refresh}><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="user-details-box">
                                    <div className="item-img">
                                        <img src="img/figure/user.jpg" alt="user" />
                                    </div>
                                    <div className="item-content">
                                        <div className="info-table table-responsive">
                                            <table className="table text-nowrap">
                                                <tbody>
                                                    <tr>
                                                        <td>Name:</td>
                                                        <td className="font-medium text-dark-medium">{auth.firstName + (auth.lastName ? ' ' + auth.lastName : '')}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>User Type:</td>
                                                        <td className="font-medium text-dark-medium">{auth.role?.name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gender:</td>
                                                        <td className="font-medium text-dark-medium">{auth.gender === 'M' ? 'Male' : auth.gender === 'F' ? 'Female' : 'Other'}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Father Name:</td>
                                                        <td className="font-medium text-dark-medium">{auth.father ? (auth.father?.firstName + (auth.father?.lastName ? ' ' + auth.father?.lastName : '')) : ''}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mother Name:</td>
                                                        <td className="font-medium text-dark-medium">{auth.mother ? (auth.mother?.firstName + (auth.mother?.lastName ? ' ' + auth.mother?.lastName : '')) : ''}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Date Of Birth:</td>
                                                        <td className="font-medium text-dark-medium">{auth.dob ? moment(auth.dob).format('MMMM Do YYYY') : ''}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Joining Date:</td>
                                                        <td className="font-medium text-dark-medium">{auth.dob ? moment(auth.createdAt).format('MMMM Do YYYY') : ''}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>E-mail:</td>
                                                        <td className="font-medium text-dark-medium"><Link to={"mailto:" + auth.emailId} className="__cf_email__" data-cfemail="9eedeafbe8fbf0f4f1f6f0edf1f0def9f3fff7f2b0fdf1f3">{auth.emailId}</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Subject:</td>
                                                        <td className="font-medium text-dark-medium">{(auth.subjects || []).map(a => a.name).join()}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Class:</td>
                                                        <td className="font-medium text-dark-medium">{auth.class?.name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Section:</td>
                                                        <td className="font-medium text-dark-medium">{auth.section?.name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>ID No:</td>
                                                        <td className="font-medium text-dark-medium">{auth.id}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Address:</td>
                                                        <td className="font-medium text-dark-medium">{auth.address}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Phone:</td>
                                                        <td className="font-medium text-dark-medium">{auth.phoneNumber}</td>
                                                    </tr>
                                                    {Object.keys(auth.meta || {}).map((a) => (
                                                        <tr>
                                                            <td style={{ textTransform: 'capitalize' }}>{a}:</td>
                                                            <td className="font-medium text-dark-medium">{auth.meta[a]}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            {/* <!-- Account Settings Area End Here --> */}
        </Layout>
    );
}

export default Index;
