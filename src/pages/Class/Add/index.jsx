import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { addClass, getClass, updateClass } from '../../../redux/actions/class';
import Layout from '../../Layout';
import { listSchools } from '../../../redux/actions/school';
import Select from 'react-select';

const Index = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const class1 = useSelector(state => state.classes.data || {});
    const schools = useSelector(state => state.school.data || []);
    const defaultSchool = useSelector(state => state.defaultSchool || '');
    const [submitted, setSubmitted] = useState(false);
    const [formValue, setFormValue] = useState({});
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            dispatch(getClass(id));
        }
        getSchools();
        initSelect2();
    }, []);
    const initSelect2 = () => {
        if (window.$.fn.select2 !== undefined) {
            window.$('.select2').select2({
                width: '100%'
            });
        }
    }
    useEffect(() => {
        // console.log(class1)
        setFormValue({ ...formValue, ...class1, schoolId: class1.schoolId ? class1.schoolId._id : '' })
        if (class1 && class1._id && submitted) {
            history.push('/class-list');
        }
        initSelect2();
    }, [class1]);
    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (formValue._id)
            dispatch(updateClass(formValue, formValue._id));
        else
            dispatch(addClass(formValue));
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
                <h3>Classes</h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>Add New Class</li>
                </ul>
            </div>
            {/* <!-- Breadcubs Area End Here -->
            <!-- Add Class Area Start Here --> */}
            <div className="card height-auto">
                <div className="card-body">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>Add New Class</h3>
                        </div>
                        <div className="dropdown">
                            <Link className="dropdown-toggle" to="#" role="button"
                                data-toggle="dropdown" aria-expanded="false">...</Link>

                            <div className="dropdown-menu dropdown-menu-right">
                                /* <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link> */
                                <Link className="dropdown-item" to="#" onClick={() => dispatch(getClass(id))}><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} className="new-added-form">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Name *</label>
                                <input type="text" placeholder="Name" value={formValue.name} onChange={(e) => setFormValue({ ...formValue, name: e.target.value })} onBlur={(e) => setFormValue({ ...formValue, name: e.target.value })} name="name" className="form-control" />
                            </div>
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
                                <label>Description</label>
                                <textarea placeholder="Desctiption" name="description" value={formValue.description} onChange={(e) => setFormValue({ ...formValue, description: e.target.value })} onBlur={(e) => setFormValue({ ...formValue, name: e.target.value })} className="form-control"></textarea>
                            </div>
                            <div className="col-md-6 form-group"></div>
                            <div className="col-12 form-group mg-t-8">
                                <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                <button type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <!-- Add Class Area End Here --> */}
        </Layout>
    );
}

export default Index;
