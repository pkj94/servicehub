import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../../Layout';
import {
    addSubject,
    deleteSubject,
    getSubject,
    listSubjects,
    updateSubject,
} from "../../../redux/actions/subject";
import { listSchools } from '../../../redux/actions/school';
import { getFormValues } from '../../../utils/getFormValues';
import Select from 'react-select';
import Confirm from '../../../commons/components/Confirm';
import Table from '../../../commons/components/Table';

const columns = [
    {
        type: 'checkbox',
        label: 'ID',
        key: 'subjectId',
        pad: 10,
        prefix: 'SUB-'
    },
    {
        label: 'Subject Name',
        key: 'name'
    },
    {
        label: 'Subject Code',
        key: 'subjectCode'
    },
    {
        label: 'School',
        key: 'schoolId.name'
    },
    {
        type: 'action',
        actions: {
            edit: {
                label: 'Edit',
                key: '_id'
            },
            // view: {
            //     label: 'View',
            //     key: '_id'
            // },
            delete: {
                label: 'Delete',
                key: '_id'
            },
        }
    }
];
const Index = () => {
    const dispatch = useDispatch();
    const subjects = useSelector((state) => state.subject.data);
    const [submit, setSubmit] = useState(false);
    const [formValue, setFormValue] = useState({});
    const [list, setList] = useState([]);
    const [limit] = useState(10);
    const [query, setQuery] = useState({});
    const [iD, setID] = useState("");
    const defaultSchool = useSelector((state) => state.defaultSchool || "");
    const schools = useSelector((state) => state.school.data || []);
    const [deleteConfirmPopup] = useState(
        "confirm-subject-delete"
    );
    // Get Subject
    useEffect(() => {
        window.$(".checkAll").on("click", function () {
            window.$(this).parents('.table').find('input:checkbox').prop('checked', this.checked);
        });

        getSchools();
        getSubjects();
    }, []);
    useEffect(() => {
        getSubjects();
    }, [query]);
    const getSubjects = () => {
        let obj = {};
        Object.keys(query).map((a) => {
            if (query[a]) {
                obj[a] = query[a];
            }
            return a;
        });
        dispatch(listSubjects(obj, limit));

    };
    useEffect(() => {
        if (list.length) {
            setTimeout(() => {
                if (window.$.fn.DataTable !== undefined) {
                    if (window.$.fn.dataTable.isDataTable('.subject-table')) {
                        window.$('.subject-table').DataTable();
                    }
                    else {
                        window.$('.subject-table').DataTable({
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
                }
            }, 100);
        }
    }, [list]);
    // Add Subject
    useEffect(() => {
        // console.log(subjects);
        if (!Array.isArray(subjects)) {
            setFormValue({ ...formValue, ...subjects, schoolId: subjects && subjects.schoolId ? subjects.schoolId._id : '' });
            if (subjects && (subjects._id || subjects._id == null) && submit) {
                getSubjects();
            }
        } else {
            setList(subjects);
            setFormValue({ ...formValue, name: '',subjectCode: '', schoolId: '', _id: null, createdBy: '', createdAt: '' })
        }
    }, [subjects]);

    // Edit and delete subject
    const search = (e) => {
        e.preventDefault();
        let obj = { searchFields: "date,title" };
        obj = { ...obj, ...getFormValues(e) };
        setQuery({ ...query, ...obj });
    };

    const editSubject = (e) => {
        dispatch(getSubject(e));
    };
    const deleteConfirm = (e) => {
        setID(e);
        window.$("#" + deleteConfirmPopup).modal("show");
    };

    const deleteS = (e) => {
        if (e) {
            setSubmit(true);
            dispatch(deleteSubject(iD));
        }
        window.$("#" + deleteConfirmPopup).modal("hide");
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        if (formValue._id) dispatch(updateSubject(formValue, formValue._id));
        else dispatch(addSubject(formValue));
    };
    const getSchools = () => {
        let obj = {};
        dispatch(listSchools(obj, 0));
    };

    const colourStyles = {
        control: (styles) => ({ ...styles, backgroundColor: '#f0f1f3', minHeight: 45, border: 'none' }),
        input: (styles) => ({ ...styles }),
    };
    return (
        <Layout>
            {/* <!-- Breadcubs Area Start Here --> */}
            <div className="breadcrumbs-area">
                <h3>All Subjects</h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>Subjects</li>
                </ul>
            </div>
            {/* <!-- Breadcubs Area End Here -->
            <!-- All Subjects Area Start Here --> */}
            <div className="row">
                <div className="col-4-xxxl col-12">
                    <div className="card height-auto">
                        <div className="card-body">
                            <div className="heading-layout1">
                                <div className="item-title">
                                    <h3>Add New Subject</h3>
                                </div>

                            </div>
                            <form className="new-added-form" onSubmit={(e) => onSubmit(e)}>
                                <div className="row">
                                    <div className="col-12-xxxl col-lg-6 col-12 form-group">
                                        <label>Subject *</label>
                                        <input type="text" placeholder="Subject" name="name" className="form-control" value={formValue.name}
                                            onChange={(e) =>
                                                setFormValue({ ...formValue, name: e.target.value })
                                            }
                                            onBlur={(e) =>
                                                setFormValue({ ...formValue, name: e.target.value })
                                            } />
                                    </div>
                                    <div className="col-12-xxxl col-lg-6 col-12 form-group">
                                        <label>Subject Code *</label>
                                        <input type="text" placeholder="Subject Code" name="subjectCode" className="form-control" value={formValue.subjectCode}
                                            onChange={(e) =>
                                                setFormValue({ ...formValue, subjectCode: e.target.value })
                                            }
                                            onBlur={(e) =>
                                                setFormValue({ ...formValue, subjectCode: e.target.value })
                                            } />
                                    </div>
                                    {defaultSchool ? null : (
                                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
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
                                    )}

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
                                    <h3>All Subjects</h3>
                                </div>
                                <div className="dropdown">
                                    <Link className="dropdown-toggle" to="#" role="button" data-toggle="dropdown"
                                        aria-expanded="false">...</Link>

                                    <div className="dropdown-menu dropdown-menu-right">
                                        {/* <Link className="dropdown-item" to="#"><i
                                            className="fas fa-times text-orange-red"></i>Close</Link>
                                        <Link className="dropdown-item" to="#"><i
                                            className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link> */}
                                        <Link className="dropdown-item" to="#" onClick={getSubjects}><i
                                            className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                    </div>
                                </div>
                            </div>
                            <form className="mg-b-20" onSubmit={(e) => search(e)}>
                                <div className="row gutters-8">
                                    <div className="col-lg-4 col-12 form-group">
                                        <input type="text" placeholder="Search ID" name='subjectId' className="form-control" />
                                    </div>
                                    <div className="col-lg-3 col-12 form-group">
                                        <input type="text" placeholder="Search by Subject ..." name='search' className="form-control" />
                                    </div>
                                    <div className="col-lg-3 col-12 form-group">
                                        <Select
                                            name="schoolId"
                                            value={schools.map(a => { return { value: a._id, label: a.name } }).find(a => a.value === formValue.schoolId)}
                                            options={schools.map(a => { return { value: a._id, label: a.name } })}
                                            onChange={(e) => { setFormValue({ ...formValue, schoolId: e.value }) }}
                                            required
                                            styles={colourStyles}
                                        />
                                    </div>
                                    <div className="col-lg-2 col-12 form-group">
                                        <button type="submit"
                                            className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                                    </div>
                                </div>
                            </form>
                            <div className="table-responsive">
                                <Table className="table display subject-table text-nowrap" heading={columns} data={list} edit={editSubject} delete={deleteConfirm}></Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- All Subjects Area End Here --> */}
            <Confirm id={deleteConfirmPopup} message="Are you sure?" confirm={deleteS}></Confirm>
        </Layout>
    );
}

export default Index;
