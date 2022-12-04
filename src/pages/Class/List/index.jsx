
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../Layout';
import { Link, useHistory } from 'react-router-dom';
import { deleteClass, listClasses } from '../../../redux/actions/class';
import { getFormValues } from '../../../utils/getFormValues';
import Confirm from '../../../commons/components/Confirm';
import Table from '../../../commons/components/Table';
const columns = [
    {
        type: 'checkbox',
        label: 'ID',
        key: 'classId',
        pad: 10,
        prefix: 'CLS-'
    },
    {
        label: 'Name',
        key: 'name'
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
    const classes = useSelector(state => state.classes.data || []);
    const [limit, setLimit] = useState(10);
    const [id, setId] = useState('');
    const [deleteConfirmPopup, setDeleteConfirmPopup] = useState('confirm-class-delete');
    const [query, setQuery] = useState({});

    useEffect(() => {
        getClasses();
    }, []);
    useEffect(() => {
        getClasses();
    }, [query]);
    useEffect(() => {
        window.$(".checkAll").on("click", function () {
            window.$(this).parents('.table').find('input:checkbox').prop('checked', this.checked);
        });
        if (classes._id) {
            getClasses();
        } else
            if (classes.length)
                setTimeout(() => {
                    if (window.$.fn.DataTable !== undefined) {
                        if (window.$.fn.dataTable.isDataTable('.class-table')) {
                            window.$('.class-table').DataTable();
                        }
                        else {
                            window.$('.class-table').DataTable({
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
    }, [classes])
    const getClasses = () => {
        let obj = {};
        Object.keys(query).map(a => {
            if (query[a]) {
                obj[a] = query[a];
            }
            return a;
        })
        dispatch(listClasses(obj, limit));
    }
    const search = e => {
        e.preventDefault();
        let obj = { searchFields: 'name,phone' };
        obj = { ...obj, ...getFormValues(e) };
        setQuery({ ...query, ...obj })
    }
    const editClass = e => {
        history.push('/class-edit/' + e);
    }
    const deleteConfirm = e => {
        setId(e);
        window.$('#' + deleteConfirmPopup).modal('show');
    }

    const deleteS = e => {
        if (e) {
            dispatch(deleteClass(id));
        }
        window.$('#' + deleteConfirmPopup).modal('hide');
    }
    return (
        <Layout>
            {/* <!-- Breadcubs Area Start Here --> */}
            <div className="breadcrumbs-area">
                <h3>Classes</h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>All Classes</li>
                </ul>
            </div>
            {/* <!-- Breadcubs Area End Here -->
            <!-- Class Table Area Start Here --> */}
            <div className="card height-auto">
                <div className="card-body">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>All Class Schedules</h3>
                        </div>
                        <div className="dropdown">
                            <Link className="dropdown-toggle" to="#" role="button"
                                data-toggle="dropdown" aria-expanded="false">...</Link>

                            <div className="dropdown-menu dropdown-menu-right">
                                {/* <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link> */}
                                <Link className="dropdown-item" to="#" onClick={getClasses}><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                            </div>
                        </div>

                    </div>
                    <form className="mg-b-20" onSubmit={(e) => search(e)}>
                        <div className="row gutters-8">
                            <div className="col-5-xxxl col-xl-5 col-lg-5 col-12 form-group">
                                <input type="text" placeholder="Search by ID ..." name='classId' className="form-control" />
                            </div>
                            <div className="col-5-xxxl col-xl-5 col-lg-5 col-12 form-group">
                                <input type="text" placeholder="Search ..." className="form-control" name='search' />
                            </div>
                            <div className="col-2-xxxl col-xl-2 col-lg-2 col-12 form-group">
                                <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                            </div>
                        </div>
                    </form>
                    <div className="table-responsive p-1">
                        <Table className="table display class-table text-nowrap" heading={columns} data={classes} edit={editClass} delete={deleteConfirm}></Table>
                    </div>
                </div>
            </div>
            {/* <!-- Class Table Area End Here --> */}
            <Confirm id={deleteConfirmPopup} message="Are you sure?" confirm={deleteS}></Confirm>
        </Layout>
    );
}

export default Index;
