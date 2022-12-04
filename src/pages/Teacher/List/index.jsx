import React, { useEffect, useState } from 'react';
import Layout from '../../Layout';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { deleteTeacher, listTeachers } from '../../../redux/actions/teacher';
import { getFormValues } from '../../../utils/getFormValues';
import Confirm from '../../../commons/components/Confirm';
import Table from '../../../commons/components/Table';

const columns = [
    {
        type: 'checkbox',
        label: 'ID',
        key: 'teacherId',
        pad: 10,
        prefix: 'PRN-'
    },
    {
        label: 'Photo',
        key: 'photo',
        type: 'image'
    },
    {
        label: 'First Name',
        key: 'firstName'
    },
    {
        label: 'Gender',
        key: 'gender'
    },
    {
        label: 'Class',
        key: 'classId.name',
        type: 'array'
    },
    {
        label: 'Subject',
        key: 'subjectId.name',
        type: 'array'
    },
    {
        label: 'School',
        key: 'schoolId.name'
    },
    {
        label: 'Phone',
        key: 'phone'
    },
    {
        label: 'Email',
        key: 'email'
    },
    {
        type: 'action',
        actions: {
            edit: {
                label: 'Edit',
                key: '_id'
            },
            delete: {
                label: 'Delete',
                key: '_id'
            },

        }
    }
];
const Index = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const teachers = useSelector(state => state.teacher.data || []);
    const [limit] = useState(10);
    const [query, setQuery] = useState({});
    const [deleteConfirmPopup] = useState('confirm-parent-delete');
    const [id, setId] = useState('');
    useEffect(() => {
        getTeachers();
    }, []);
    useEffect(() => {
        getTeachers();
    }, [query]);
    useEffect(() => {
        window.$(".checkAll").on("click", function () {
            window.$(this).parents('.table').find('input:checkbox').prop('checked', this.checked);
        });
        if (teachers.length)
            setTimeout(() => {
                if (window.$.fn.DataTable !== undefined) {
                    if (window.$.fn.dataTable.isDataTable('.teacher-table')) {
                        window.$('.teacher-table').DataTable();
                    }
                    else {
                        window.$('.teacher-table').DataTable({
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
    }, [teachers])
    const getTeachers = () => {
        let obj = {};
        Object.keys(query).map(a => {
            if (query[a]) {
                obj[a] = query[a];
            }
            return a;
        })
        dispatch(listTeachers(obj, limit));
    }
    const search = e => {
        e.preventDefault();
        let obj = { searchFields: 'firstName,lastName,address,email' };
        obj = { ...obj, ...getFormValues(e) };
        setQuery({ ...query, ...obj })
    }
    const editTeacher = e => {
        history.push('/teacher-edit/' + e);
    }
    const viewTeacher = e => {
        history.push('/teacher-detail/' + e);
    }
    const deleteConfirm = e => {
        setId(e);
        window.$('#' + deleteConfirmPopup).modal('show');
    }
    const deleteS = e => {
        if (e) {
            dispatch(deleteTeacher(id));
            getTeachers();
        }
        window.$('#' + deleteConfirmPopup).modal('hide');
    }
    return (
        <Layout>
            {/* <!-- Breadcubs Area Start Here --> */}
            <div className="breadcrumbs-area">
                <h3>Teacher</h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>All Teachers</li>
                </ul>
            </div>
            {/* <!-- Breadcubs Area End Here --> */}
            {/* <!-- Teacher Table Area Start Here --> */}
            <div className="card height-auto">
                <div className="card-body">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>All Teachers Data</h3>
                        </div>
                        <div className="dropdown">
                            <Link className="dropdown-toggle" to="#" role="button"
                                data-toggle="dropdown" aria-expanded="false">...</Link>

                            <div className="dropdown-menu dropdown-menu-right">
                                {/* <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link> */}
                                <Link className="dropdown-item" to="#" onClick={getTeachers}><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                            </div>
                        </div>
                    </div>
                    <form className="mg-b-20" onSubmit={(e) => search(e)}>
                        <div className="row gutters-8">
                            <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                                <input type="text" name='teacherId' placeholder="Search by ID ..." className="form-control" />
                            </div>
                            <div className="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                                <input type="text" name='search' placeholder="Search by Name ..." className="form-control" />
                            </div>
                            <div className="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                                <input type="text" name='phone' placeholder="Search by Phone ..." className="form-control" />
                            </div>
                            <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
                                <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                            </div>
                        </div>
                    </form>
                    <div className="table-responsive">
                        <Table className="table display teacher-table text-nowrap" heading={columns} data={teachers} edit={editTeacher} view={viewTeacher} delete={deleteConfirm}></Table>
                    </div>
                </div>
            </div>
            {/* <!-- Teacher Table Area End Here --> */}
            <Confirm id={deleteConfirmPopup} message="Are you sure?" confirm={deleteS}></Confirm>
        </Layout>
    );
}

export default Index;
