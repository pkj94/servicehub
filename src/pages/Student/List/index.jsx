import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Layout from '../../Layout';
import Table from '../../../commons/components/Table';
import { getFormValues } from '../../../utils/getFormValues';
import { listStudents } from '../../../redux/actions/student';
const columns = [
    {
        type: 'checkbox',
        label: 'Roll'
    },
    {
        label: 'Name',
        key: 'name'
    },
    {
        label: 'Gender',
        key: 'gender'
    },
    {
        label: 'Class',
        key: 'class'
    },
    {
        label: 'Section',
        key: 'section'
    },
    {
        label: 'Parents',
        key: 'parent'
    },
    {
        label: 'Address',
        key: 'address'
    },
    {
        label: 'DOB',
        key: 'dob'
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
    const students = useSelector(state => state.student.data || []);
    const [limit] = useState(10);
    const [query, setQuery] = useState({});


    useEffect(() => {
        getStudent();
    }, []);
    useEffect(() => {
        getStudent();
    }, [query]);
    useEffect(() => {
        window.$(".checkAll").on("click", function () {
            window.$(this).parents('.table').find('input:checkbox').prop('checked', this.checked);
        });
        if (students.length)
            setTimeout(() => {
                if (window.$.fn.DataTable !== undefined) {
                    if (window.$.fn.dataTable.isDataTable('.student-table')) {
                        window.$('.student-table').DataTable();
                    }
                    else {
                        window.$('.student-table').DataTable({
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
    }, [students])
    const getStudent = () => {
        let obj = {};
        Object.keys(query).map(a => {
            if (query[a]) {
                obj[a] = query[a];
            }
            return a;
        })
        dispatch(listStudents(obj, limit));
    }
    const search = e => {
        e.preventDefault();
        let obj = { searchFields: 'name,address,phone' };
        obj = { ...obj, ...getFormValues(e) };
        setQuery({ ...query, ...obj })
    }
    const editStudent = e => {
        history.push('/student-edit/' + e);
    }
    const deleteStudent = (e) => { }
    return (
        <Layout>
            {/* <!-- Breadcubs Area Start Here --> */}
            <div className="breadcrumbs-area">
                <h3>Students</h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>All Students</li>
                </ul>
            </div>
            {/* <!-- Breadcubs Area End Here --> */}
            {/* <!-- Student Table Area Start Here --> */}
            <div className="card height-auto">
                <div className="card-body">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>All Students Data</h3>
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
                    <form className="mg-b-20" onSubmit={search}>
                        <div className="row gutters-8">
                            <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                                <input type="text" placeholder="Search by Roll ..." className="form-control" name='roll' />
                            </div>
                            <div className="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                                <input type="text" placeholder="Search by Name ..." className="form-control" name='search' />
                            </div>
                            <div className="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                                <input type="text" placeholder="Search by className ..." className="form-control" name='class' />
                            </div>
                            <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
                                <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                            </div>
                        </div>
                    </form>
                    <div className="table-responsive">
                        <Table className="table display student-table text-nowrap" heading={columns} data={students} edit={editStudent} delete={deleteStudent}></Table>
                        {/* <table className="table display student-table text-nowrap">
                            <thead>
                                <tr>
                                    <th>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input checkAll" />
                                            <label className="form-check-label">Roll</label>
                                        </div>
                                    </th>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>className</th>
                                    <th>Section</th>
                                    <th>Parents</th>
                                    <th>Address</th>
                                    <th>Date Of Birth</th>
                                    <th>Phone</th>
                                    <th>E-mail</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">#0021</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student2.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Jack Sparrow </td>
                                    <td>TA-107 Newyork</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="254e445f4c43444d4c481c16654248444c490b464a48">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0022</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student3.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>A</td>
                                    <td>Maria Jamans</td>
                                    <td>59 Australia, Sydney</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="5a313b20333c3b32333763691a3d373b333674393537">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0023</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student4.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Jack Sparrow </td>
                                    <td>TA-107 Newyork</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="deb5bfa4b7b8bfb6b7b3e7ed9eb9b3bfb7b2f0bdb1b3">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0024</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student5.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>A</td>
                                    <td>Maria Jamans</td>
                                    <td>59 Australia, Sydney</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="076c667d6e61666f6e6a3e3447606a666e6b2964686a">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0025</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student6.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Jack Sparrow </td>
                                    <td>TA-107 Newyork</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="92f9f3e8fbf4f3fafbffaba1d2f5fff3fbfebcf1fdff">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0026</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student7.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>A</td>
                                    <td>Maria Jamans</td>
                                    <td>59 Australia, Sydney</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="ddb6bca7b4bbbcb5b4b0e4ee9dbab0bcb4b1f3beb2b0">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0027</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student8.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Jack Sparrow </td>
                                    <td>TA-107 Newyork</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="eb808a91828d8a838286d2d8ab8c868a8287c5888486">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0028</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student9.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>A</td>
                                    <td>Maria Jamans</td>
                                    <td>59 Australia, Sydney</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="412a203b28272029282c787201262c20282d6f222e2c">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0029</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student10.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Jack Sparrow </td>
                                    <td>TA-107 Newyork</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="204b415a49464148494d191360474d41494c0e434f4d">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0030</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student6.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>A</td>
                                    <td>Maria Jamans</td>
                                    <td>59 Australia, Sydney</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="3c575d46555a5d545551050f7c5b515d5550125f5351">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0021</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student2.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Jack Sparrow </td>
                                    <td>TA-107 Newyork</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="ff949e8596999e979692c6ccbf98929e9693d19c9092">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0022</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student3.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>A</td>
                                    <td>Maria Jamans</td>
                                    <td>59 Australia, Sydney</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="7b101a01121d1a13121642483b1c161a121755181416">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0023</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student4.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Jack Sparrow </td>
                                    <td>TA-107 Newyork</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="abc0cad1c2cdcac3c2c69298ebccc6cac2c785c8c4c6">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0024</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student5.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>A</td>
                                    <td>Maria Jamans</td>
                                    <td>59 Australia, Sydney</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d7bcb6adbeb1b6bfbebaeee497b0bab6bebbf9b4b8ba">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0025</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student6.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Jack Sparrow </td>
                                    <td>TA-107 Newyork</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="a0cbc1dac9c6c1c8c9cd9993e0c7cdc1c9cc8ec3cfcd">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0026</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student7.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>A</td>
                                    <td>Maria Jamans</td>
                                    <td>59 Australia, Sydney</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="462d273c2f20272e2f2b7f7506212b272f2a6825292b">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0027</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student8.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Jack Sparrow </td>
                                    <td>TA-107 Newyork</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="dbb0baa1b2bdbab3b2b6e2e89bbcb6bab2b7f5b8b4b6">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0028</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student9.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>A</td>
                                    <td>Maria Jamans</td>
                                    <td>59 Australia, Sydney</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="dab1bba0b3bcbbb2b3b7e3e99abdb7bbb3b6f4b9b5b7">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0029</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student10.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Jack Sparrow </td>
                                    <td>TA-107 Newyork</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="432822392a25222b2a2e7a7003242e222a2f6d202c2e">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0030</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student6.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>A</td>
                                    <td>Maria Jamans</td>
                                    <td>59 Australia, Sydney</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="442f253e2d22252c2d297d77042329252d286a272b29">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0021</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student2.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Jack Sparrow </td>
                                    <td>TA-107 Newyork</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b9d2d8c3d0dfd8d1d0d4808af9ded4d8d0d597dad6d4">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0022</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student3.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>A</td>
                                    <td>Maria Jamans</td>
                                    <td>59 Australia, Sydney</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="39525843505f58515054000a795e54585055175a5654">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0023</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student4.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Jack Sparrow </td>
                                    <td>TA-107 Newyork</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="8be0eaf1e2edeae3e2e6b2b8cbece6eae2e7a5e8e4e6">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0024</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student5.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>A</td>
                                    <td>Maria Jamans</td>
                                    <td>59 Australia, Sydney</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="432822392a25222b2a2e7a7003242e222a2f6d202c2e">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0025</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student6.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Jack Sparrow </td>
                                    <td>TA-107 Newyork</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d2b9b3a8bbb4b3babbbfebe192b5bfb3bbbefcb1bdbf">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0026</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student7.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>A</td>
                                    <td>Maria Jamans</td>
                                    <td>59 Australia, Sydney</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="dcb7bda6b5babdb4b5b1e5ef9cbbb1bdb5b0f2bfb3b1">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0027</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student8.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Jack Sparrow </td>
                                    <td>TA-107 Newyork</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="7c171d06151a1d141511454f3c1b111d1510521f1311">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0028</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student9.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>A</td>
                                    <td>Maria Jamans</td>
                                    <td>59 Australia, Sydney</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="9ef5ffe4f7f8fff6f7f3a7addef9f3fff7f2b0fdf1f3">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0029</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student10.png" alt="student" /></td>
                                    <td>Mark Willy</td>
                                    <td>Male</td>
                                    <td>2</td>
                                    <td>A</td>
                                    <td>Jack Sparrow </td>
                                    <td>TA-107 Newyork</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="9cf7fde6f5fafdf4f5f1a5afdcfbf1fdf5f0b2fff3f1">[email&#160;protected]</Link></td>
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
                                            <label className="form-check-label">#0030</label>
                                        </div>
                                    </td>
                                    <td className="text-center"><img src="img/figure/student6.png" alt="student" /></td>
                                    <td>Jessia Rose</td>
                                    <td>Female</td>
                                    <td>1</td>
                                    <td>A</td>
                                    <td>Maria Jamans</td>
                                    <td>59 Australia, Sydney</td>
                                    <td>02/05/2001</td>
                                    <td>+ 123 9988568</td>
                                    <td><Link to="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="4b202a31222d2a23222672780b2c262a222765282426">[email&#160;protected]</Link></td>
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
                        </table> */}
                    </div>
                </div>
            </div>
            {/* <!-- Student Table Area End Here --> */}
        </Layout>
    );
}

export default Index;
