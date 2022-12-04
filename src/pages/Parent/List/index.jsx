import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Confirm from '../../../commons/components/Confirm';
import Table from '../../../commons/components/Table';
import Layout from '../../Layout';
import { listParents, deleteParent } from '../../../redux/actions/parent';
import { getFormValues } from '../../../utils/getFormValues';

const columns = [
    {
        type: 'checkbox',
        label: 'ID',
        key: 'parentId',
        pad: 10,
        prefix: 'PRN-'
    },
    {
        label: 'First Name',
        key: 'firstName'
    },
    {
        label: 'Email',
        key: 'email'
    },
    {
        label: 'Mobile No.',
        key: 'phone'
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
            view: {
                label: 'View',
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
    const parents = useSelector(state => state.parent.data || []);
    const [limit] = useState(10);
    const [id, setId] = useState('');
    const [deleteConfirmPopup] = useState('confirm-parent-delete');
    const [query, setQuery] = useState({});

    useEffect(() => {
        getParents();
    }, []);
    useEffect(() => {
        getParents();
    }, [query]);
    useEffect(() => {
        window.$(".checkAll").on("click", function () {
            window.$(this).parents('.table').find('input:checkbox').prop('checked', this.checked);
        });
        if (parents.length)
            setTimeout(() => {
                if (window.$.fn.DataTable !== undefined) {
                    if (window.$.fn.dataTable.isDataTable('.parent-table')) {
                        window.$('.parent-table').DataTable();
                    }
                    else {
                        window.$('.parent-table').DataTable({
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
    }, [parents])
    const getParents = () => {
        let obj = {};
        Object.keys(query).map(a => {
            if (query[a]) {
                obj[a] = query[a];
            }
            return a;
        })
        dispatch(listParents(obj, limit));
    }
    const search = e => {
        e.preventDefault();
        let obj = { searchFields: 'firstName,email,phone' };
        obj = { ...obj, ...getFormValues(e) };
        setQuery({ ...query, ...obj })
    }
    const editParent = e => {
        history.push('/parent-edit/' + e);
    }
    const viewParent = e => {
        history.push('/parent-detail/' + e);
    }
    const deleteConfirm = e => {
        setId(e);
        window.$('#' + deleteConfirmPopup).modal('show');
    }

    const deleteS = e => {
        if (e) {
            dispatch(deleteParent(id));
            getParents();
        }
        window.$('#' + deleteConfirmPopup).modal('hide');
    }
    return (
        <Layout>
            {/* <!-- Breadcubs Area Start Here --> */}
            <div className="breadcrumbs-area">
                <h3>Parents</h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>All Parents</li>
                </ul>
            </div>
            {/* <!-- Breadcubs Area End Here --> */}
            {/* <!-- Teacher Table Area Start Here --> */}
            <div className="card height-auto">
                <div className="card-body">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>All Parents Data</h3>
                        </div>
                        <div className="dropdown">
                            <Link className="dropdown-toggle" to="#" role="button"
                                data-toggle="dropdown" aria-expanded="false">...</Link>

                            <div className="dropdown-menu dropdown-menu-right">
                                {/* <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link> */}
                                <Link className="dropdown-item" to="#" onClick={getParents}><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                            </div>
                        </div>
                    </div>
                    <form className="mg-b-20" onSubmit={(e) => search(e)}>
                        <div className="row gutters-8">
                            <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                                <input type="text" placeholder="Search by ID ..." name='parentId' className="form-control" />
                            </div>
                            <div className="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                                <input type="text" placeholder="Search ..." className="form-control" name='search' />
                            </div>
                            <div className="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                                <input type="text" placeholder="Search by parent ..." className="form-control" name='email' />
                            </div>
                            <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
                                <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                            </div>
                        </div>
                    </form>
                    <div className="table-responsive p-1">
                        <Table className="table display parent-table text-nowrap" heading={columns} data={parents} edit={editParent} view={viewParent} delete={deleteConfirm}></Table>
                    </div>
                </div>
            </div>
            {/* <!-- Teacher Table Area End Here --> */}
            <Confirm id={deleteConfirmPopup} message="Are you sure?" confirm={deleteS}></Confirm>
        </Layout>
    );
}

export default Index;
