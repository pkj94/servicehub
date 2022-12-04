import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import Layout from '../../Layout';
import { addTeacher, getTeacher, updateTeacher } from '../../../redux/actions/teacher';
import { listSchools } from '../../../redux/actions/school';
import { listClasses } from '../../../redux/actions/class';
import Select from 'react-select';
import { listSubjects } from '../../../redux/actions/subject';


const Index = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const teacher = useSelector(state => state.teacher.data || {});
    const schools = useSelector(state => state.school.data || []);
    const classes = useSelector(state => state.classes.data || []);
    const subjects = useSelector(state => state.subject.data || []);
    const defaultSchool = useSelector(state => state.defaultSchool || '');
    const [submitted, setSubmitted] = useState(false);
    const [formValue, setFormValue] = useState({
        firstName: '',
        lastName: '',
        schoolId: null,
        email: '',
        photo: '',
        gender: '',
        subjectId: [],
        bloodGroup: '',
        phone: '',
        classId: [],
        dob: '',
        shortBio: '',
        religion: '',
        address: '',
    });
    const genders = [{ value: 'Male', label: 'Male' }, { value: 'Female', label: 'Female' }];
    const religions = [{ value: 'Islam', label: 'Islam' }, { value: 'Hindu', label: 'Hindu' }, { value: 'Christian', label: 'Christian' }, { value: 'Buddish', label: 'Buddish' }, { value: 'Others', label: 'Others' }];
    const { id } = useParams();
    useEffect(() => {
        if (window.$ && window.$.fn && window.$.fn.datepicker !== undefined) {
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
        getSchools();
        getClasses();
        getSubjects();
        if (id) {
            dispatch(getTeacher(id));
        }
    }, [])


    useEffect(() => {
        // console.log(teacher)
        if (id && teacher._id)
            setFormValue({ ...formValue, ...teacher, schoolId: teacher.schoolId ? teacher.schoolId._id || '' : '', classId: teacher.classId ? teacher.classId.map(a => a._id) || [] : [], subjectId: teacher.subjectId ? teacher.subjectId.map(a => a._id) || [] : [] });

        if (teacher && teacher._id && submitted) {
            history.push('/teacher-list');
        }
    }, [teacher]);
    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // console.log(formValue)
        if (formValue._id)
            dispatch(updateTeacher(formValue, formValue._id));
        else
            dispatch(addTeacher(formValue));
    }
    const getSchools = () => {
        let obj = {};
        dispatch(listSchools(obj, 0));
    }
    const getClasses = () => {
        let obj = {};
        dispatch(listClasses(obj, 0));
    }
    const getSubjects = () => {
        let obj = {};
        dispatch(listSubjects(obj, 0));
    }
    const colourStyles = {
        control: (styles) => ({ ...styles, backgroundColor: '#f0f1f3', minHeight: 45, border: 'none' }),
        input: (styles) => ({ ...styles }),
    };
    return (
        <Layout>
            {/* <!-- Breadcubs Area Start Here --> */}
            <div className="breadcrumbs-area">
                <h3>Teacher</h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>Add New Teacher</li>
                </ul>
            </div>
            {/* <!-- Breadcubs Area End Here --> */}
            {/* <!-- Add New Teacher Area Start Here --> */}
            <div className="card height-auto">
                <div className="card-body">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>Add New Teacher</h3>
                        </div>
                        {/* <div className="dropdown">
                            <Link className="dropdown-toggle" to="#" role="button"
                                data-toggle="dropdown" aria-expanded="false">...</Link>

                            <div className="dropdown-menu dropdown-menu-right">
                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                            </div>
                        </div> */}
                    </div>
                    <form onSubmit={(e) => onSubmit(e)} className="new-added-form">
                        <div className="row">
                            {defaultSchool ? null :
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>School *</label>
                                    <Select
                                        name="schoolId"
                                        value={schools.map(a => { return { value: a._id, label: a.name } }).find(a => a.value === formValue.schoolId)}
                                        options={schools.map(a => { return { value: a._id, label: a.name } })}
                                        onChange={(e) => { setFormValue({ ...formValue, schoolId: e.value }) }}
                                        required
                                        styles={colourStyles}
                                    />
                                </div>
                            }
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>First Name *</label>
                                <input type="text" placeholder="First Name" name="firstName" className="form-control" required value={formValue.firstName} onChange={(e) => { setFormValue({ ...formValue, firstName: e.target.value }) }} onBlur={(e) => { setFormValue({ ...formValue, firstName: e.target.value }) }} />
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Last Name *</label>
                                <input type="text" placeholder="Last Name" name="lastName" className="form-control" value={formValue.lastName} onChange={(e) => { setFormValue({ ...formValue, lastName: e.target.value }) }} onBlur={(e) => { setFormValue({ ...formValue, lastName: e.target.value }) }} />
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Gender *</label>
                                <Select
                                    name="gender"
                                    value={genders.find(a => a.value === formValue.gender)}
                                    options={genders}
                                    onChange={(e) => { setFormValue({ ...formValue, gender: e.value }) }}
                                    required
                                    styles={colourStyles}
                                />
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Date Of Birth *</label>
                                <input type="text" placeholder="dd/mm/yyyy" className="form-control air-datepicker" name="dob" value={formValue.dob} onChange={(e) => { setFormValue({ ...formValue, dob: e.target.value }) }} onBlur={(e) => { setFormValue({ ...formValue, dob: e.target.value }) }} />
                                <i className="far fa-calendar-alt"></i>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Date Of Birth *</label>
                                <input type="text" placeholder="dd/mm/yyyy" className="form-control air-datepicker" name="joining" value={formValue.joining} onChange={(e) => { setFormValue({ ...formValue, joining: e.target.value }) }} onBlur={(e) => { setFormValue({ ...formValue, joining: e.target.value }) }} />
                                <i className="far fa-calendar-alt"></i>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Blood Group *</label>
                                <input type="text" placeholder="Blood Group" name="bloodGroup" className="form-control" required value={formValue.bloodGroup} onChange={(e) => { setFormValue({ ...formValue, bloodGroup: e.target.value }) }} onBlur={(e) => { setFormValue({ ...formValue, bloodGroup: e.target.value }) }} />
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Religion *</label>
                                <Select
                                    name="religion"
                                    value={religions.find(a => a.value === formValue.religion)}
                                    options={religions}
                                    onChange={(e) => { setFormValue({ ...formValue, religion: e.value }) }}
                                    required
                                    styles={colourStyles}
                                />
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>E-Mail</label>
                                <input type="email" placeholder="Email Id" name="email" className="form-control" value={formValue.email} onChange={(e) => { setFormValue({ ...formValue, email: e.target.value }) }} onBlur={(e) => { setFormValue({ ...formValue, email: e.target.value }) }} />
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Class *</label>
                                <Select
                                    name="classId"
                                    value={classes.map(a => { return { value: a._id, label: a.name } }).filter(a => (formValue.classId || []).indexOf(a.value) !== -1)}
                                    options={classes.map(a => { return { value: a._id, label: a.name } })}
                                    onChange={(e) => { setFormValue({ ...formValue, classId: e.map(a => a.value) }) }}
                                    required
                                    isMulti={true}
                                    styles={colourStyles}
                                />
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Subjects *</label>
                                <Select
                                    name="subjectId"
                                    value={subjects.map(a => { return { value: a._id, label: a.name } }).filter(a => (formValue.subjectId || []).indexOf(a.value) !== -1)}
                                    options={subjects.map(a => { return { value: a._id, label: a.name } })}
                                    onChange={(e) => { setFormValue({ ...formValue, subjectId: e.map(a => a.value) }) }}
                                    required
                                    isMulti={true}
                                    styles={colourStyles}
                                />
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Address</label>
                                <input type="text" placeholder="Address" name="address" className="form-control" value={formValue.address} onChange={(e) => { setFormValue({ ...formValue, address: e.target.value }) }} onBlur={(e) => { setFormValue({ ...formValue, address: e.target.value }) }} />
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Phone</label>
                                <input type="text" placeholder="Phone" name="phone" className="form-control" value={formValue.phone} onChange={(e) => { setFormValue({ ...formValue, phone: e.target.value }) }} onBlur={(e) => { setFormValue({ ...formValue, phone: e.target.value }) }} />
                            </div>
                            <div className="col-lg-6 col-12 form-group">
                                <label>Short BIO</label>
                                <textarea className="textarea form-control" name="shortBio" id="form-message" cols="10" rows="9" onChange={(e) => { setFormValue({ ...formValue, shortBio: e.target.value }) }} onBlur={(e) => { setFormValue({ ...formValue, shortBio: e.target.value }) }} value={formValue.shortBio}></textarea>
                            </div>
                            <div className="col-lg-6 col-12 form-group mg-t-30">
                                <label className="text-dark-medium">Upload Student Photo (150px X 150px)</label>
                                <input type="file" className="form-control-file" />
                            </div>
                            <div className="col-12 form-group mg-t-8">
                                <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                <button type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <!-- Add New Teacher Area End Here --> */}
        </Layout>
    );
}

export default Index;
