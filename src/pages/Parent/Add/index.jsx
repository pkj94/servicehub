import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { addParent, getParent, updateParent } from '../../../redux/actions/parent';
import { listSchools } from '../../../redux/actions/school';
import Layout from '../../Layout';
import Select from 'react-select';

const Index = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const parent = useSelector(state => state.parent.data || {});
    const schools = useSelector(state => state.school.data || []);
    const defaultSchool = useSelector(state => state.defaultSchool || '');
    const [submitted, setSubmitted] = useState(false);
    const [formValue, setFormValue] = useState({});
    const genders = [{ value: 'Male', label: 'Male' }, { value: 'Female', label: 'Female' }];
    const religions = [{ value: 'Islam', label: 'Islam' }, { value: 'Hindu', label: 'Hindu' }, { value: 'Christian', label: 'Christian' }, { value: 'Buddish', label: 'Buddish' }, { value: 'Others', label: 'Others' }];
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            dispatch(getParent(id));
        }
        getSchools();
    }, []);
    useEffect(() => {
        // console.log(parent)
        setFormValue({ ...formValue, ...parent, schoolId: parent.schoolId ? parent.schoolId._id || '' : '' })
        if (parent && parent._id && submitted) {
            history.push('/parent-list');
        }
    }, [parent]);
    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // console.log(formValue)
        if (formValue._id)
            dispatch(updateParent(formValue, formValue._id));
        else
            dispatch(addParent(formValue));
    }
    const getSchools = () => {
        let obj = {};
        dispatch(listSchools(obj, 0));
    }
    const colourStyles = {
        control: (styles) => ({ ...styles, backgroundColor: '#f0f1f3', minHeight: 45, border:'none' }),
        input: (styles) => ({ ...styles }),
    };
    return (
        <Layout>
            {/* <!-- Breadcubs Area Start Here --> */}
            <div className="breadcrumbs-area">
                <h3>Parents</h3>
                <ul>
                    <li>
                        <Link to="index.html">Home</Link>
                    </li>
                    <li>Add New Parents</li>
                </ul>
            </div>
            {/* <!-- Breadcubs Area End Here --> */}
            {/* <!-- Add New Teacher Area Start Here --> */}
            <div className="card height-auto">
                <div className="card-body">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>Add New Parents</h3>
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
                    <form className="new-added-form" onSubmit={(e) => onSubmit(e)}>
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

                                </div>}
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>First Name *</label>
                                <input type="text" placeholder="First Name" name="firstName" className="form-control" required value={formValue.firstName} onChange={(e) => setFormValue({ ...formValue, firstName: e.target.value })} onBlur={(e) => setFormValue({ ...formValue, firstName: e.target.value })} />
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Last Name</label>
                                <input type="text" placeholder="Last Name" name="lastName" className="form-control" onBlur={(e) => setFormValue({ ...formValue, lastName: e.target.value })} onChange={(e) => setFormValue({ ...formValue, lastName: e.target.value })} />
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
                                <label>Occupation</label>
                                <input type="text" placeholder="Occupation" name="occupation" className="form-control" value={formValue.occupation} onChange={(e) => setFormValue({ ...formValue, occupation: e.target.value })} onBlur={(e) => setFormValue({ ...formValue, occupation: e.target.value })} />
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Blood Group *</label>
                                <input type="text" placeholder="Blood Group" name="bloodGroup" className="form-control" value={formValue.bloodGroup} onChange={(e) => setFormValue({ ...formValue, bloodGroup: e.target.value })} onBlur={(e) => setFormValue({ ...formValue, bloodGroup: e.target.value })} />

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
                                <input type="email" placeholder="E-Mail" name="email" className="form-control" value={formValue.email} onChange={(e) => setFormValue({ ...formValue, email: e.target.value })} onBlur={(e) => setFormValue({ ...formValue, email: e.target.value })} />
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Address</label>
                                <input type="text" placeholder="Address" name="address" className="form-control" value={formValue.address} onChange={(e) => setFormValue({ ...formValue, address: e.target.value })} onBlur={(e) => setFormValue({ ...formValue, address: e.target.value })} />
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Phone</label>
                                <input type="text" placeholder="Phone" name="phone" className="form-control" value={formValue.phone} onChange={(e) => setFormValue({ ...formValue, phone: e.target.value })} onBlur={(e) => setFormValue({ ...formValue, phone: e.target.value })} />
                            </div>
                            <div className="col-md-6 d-none d-xl-block">

                            </div>
                            <div className="col-lg-6 col-12 form-group">
                                <label>Short BIO</label>
                                <textarea className="textarea form-control" name="shortBio" id="form-message" cols="10" rows="9" value={formValue.shortBio} onChange={(e) => setFormValue({ ...formValue, shortBio: e.target.value })} onBlur={(e) => setFormValue({ ...formValue, shortBio: e.target.value })}></textarea>
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
