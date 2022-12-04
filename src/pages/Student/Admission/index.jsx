import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../Layout';
import {addStudent} from '../../../redux/actions/student'
import { getFormValues } from '../../../utils/getFormValues';
import { Link, useHistory } from 'react-router-dom';


const Index = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const student = useSelector(state => state.student.data);
    useEffect(() => {
        if (window.$.fn.select2 !== undefined) {
            window.$('.select2').select2({
                width: '100%'
            });
        }
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
    });
    useEffect(() => {
        console.log(student)
        if(student && student._id){
            history.push('/student-list');
        }
    },[student]);
    const onSubmit = (e) => {
        e.preventDefault();
        let obj = { };
        obj = {...obj,...getFormValues(e)};
        dispatch(addStudent(obj));
        
    }
    return (
        <Layout>
            {/* <!-- Breadcubs Area Start Here --> */}
            <div className="breadcrumbs-area">
                <h3>Students</h3>
                <ul>
                    <li>
                        <Link to="index.html">Home</Link>
                    </li>
                    <li>Student Admit Form</li>
                </ul>
            </div>
            {/* <!-- Breadcubs Area End Here --> */}
            {/* <!-- Admit Form Area Start Here --> */}
            <div className="card height-auto">
                <div className="card-body">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>Add New Students</h3>
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
                    <form onSubmit={(e) => onSubmit(e)} className="new-added-form">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>First Name *</label>
                                <input type="text" placeholder="First Name" name="firstName" required className="form-control" />
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Last Name *</label>
                                <input type="text" placeholder="Last Name"name="lastName" required className="form-control" />
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Gender *</label>
                                <select className="select2"required name="gender">
                                    <option value="">Please Select Gender *</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">Others</option>
                                </select>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Date Of Birth *</label>
                                <input type="text" placeholder="dd/mm/yyyy" required name="dob" className="form-control air-datepicker"
                                    data-position='bottom right' />
                                <i className="far fa-calendar-alt"></i>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Roll</label>
                                <input type="text" placeholder="Roll" required name="roll" className="form-control" />
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Blood Group *</label>
                                <select className="select2"required name="bloodGroup">
                                    <option value="">Please Select Group *</option>
                                    <option value="1">A+</option>
                                    <option value="2">A-</option>
                                    <option value="3">B+</option>
                                    <option value="3">B-</option>
                                    <option value="3">O+</option>
                                    <option value="3">O-</option>
                                </select>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Religion *</label>
                                <select className="select2" required name="religion">
                                    <option value="">Please Select Religion *</option>
                                    <option value="1">Islam</option>
                                    <option value="2">Hindu</option>
                                    <option value="3">Christian</option>
                                    <option value="3">Buddish</option>
                                    <option value="3">Others</option>
                                </select>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>E-Mail</label>
                                <input type="email" placeholder="email" required name="email" className="form-control" />
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Class *</label>
                                <select className="select2" required name='class'>
                                    <option value="">Please Select className *</option>
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
                                <select className="select2" required name='section'>
                                    <option value="">Please Select Section *</option>
                                    <option value="1">Pink</option>
                                    <option value="2">Blue</option>
                                    <option value="3">Bird</option>
                                    <option value="3">Rose</option>
                                    <option value="3">Red</option>
                                </select>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Admission ID</label>
                                <input type="text" placeholder="Admission ID" name="addmisionId" required className="form-control" />
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Phone</label>
                                <input type="text" placeholder="Phone" name="phone" required className="form-control" />
                            </div>
                            <div className="col-lg-6 col-12 form-group">
                                <label>Short BIO</label>
                                <textarea className="textarea form-control" placeholder="Short Bio"  required name="message" id="form-message" cols="10"
                                    rows="9"></textarea>
                            </div>
                            <div className="col-lg-6 col-12 form-group mg-t-30">
                                <label className="text-dark-medium">Upload Student Photo (150px X 150px)</label>
                                <input type="file" required className="form-control-file" />
                            </div>
                            <div className="col-12 form-group mg-t-8">
                                <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                <button type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <!-- Admit Form Area End Here --> */}
        </Layout>
    );
}

export default Index;
