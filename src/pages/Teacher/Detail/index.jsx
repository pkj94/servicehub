import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getTeacher } from '../../../redux/actions/teacher';
import Layout from '../../Layout';
import moment from 'moment';
const Index = () => {
    const dispatch = useDispatch();
    const teacher = useSelector(state => state.teacher.data || {});
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            dispatch(getTeacher(id));
        }
    }, []);
    const pad = (num, places, pad = "0") => {
        var zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join(pad) + num;
    }
    return (
        <Layout>
            {/* <!-- Breadcubs Area Start Here --> */}
            <div className="breadcrumbs-area">
                <h3>Teacher</h3>
                <ul>
                    <li>
                        <Link to="index.html">Home</Link>
                    </li>
                    <li>Teacher Details</li>
                </ul>
            </div>
            {/* <!-- Breadcubs Area End Here --> */}
            {/* <!-- Student Table Area Start Here --> */}
            <div className="card height-auto">
                <div className="card-body">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>About Me</h3>
                        </div>
                        <div className="dropdown">
                            <Link className="dropdown-toggle" to="#" role="button"
                                data-toggle="dropdown" aria-expanded="false">...</Link>

                            <div className="dropdown-menu dropdown-menu-right">
                                {/* <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link> */}
                                <Link className="dropdown-item" to={"/teacher-edit/" + id}><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                <Link className="dropdown-item" to="#" onClick={() => dispatch(getTeacher(id))}><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                            </div>
                        </div>
                    </div>
                    <div className="single-info-details">
                        <div className="item-img">
                            <img src="img/figure/teacher.jpg" alt="teacher" />
                        </div>
                        <div className="item-content">
                            <div className="header-inline item-header">
                                <h3 className="text-dark-medium font-medium">{teacher.firstName} {teacher.lastName}</h3>
                                <div className="header-elements">
                                    <ul>
                                        <li><Link to={"/teacher-edit/"+id}><i className="far fa-edit"></i></Link></li>
                                        <li><Link to="#"><i className="fas fa-print"></i></Link></li>
                                        <li><Link to="#"><i className="fas fa-download"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <p>{teacher.shortBio}</p>
                            <div className="info-table table-responsive">
                                <table className="table text-nowrap">
                                    <tbody>
                                        <tr>
                                            <td>Name:</td>
                                            <td className="font-medium text-dark-medium">{teacher.firstName} {teacher.lastName}</td>
                                        </tr>
                                        <tr>
                                            <td>Gender:</td>
                                            <td className="font-medium text-dark-medium">{teacher.gender}</td>
                                        </tr>
                                        
                                        <tr>
                                            <td>Religion:</td>
                                            <td className="font-medium text-dark-medium">{teacher.religion}</td>
                                        </tr>
                                        <tr>
                                            <td>Joining Date:</td>
                                            <td className="font-medium text-dark-medium">{moment(teacher.joining).format('DD.MM.YYYY')}</td>
                                        </tr>
                                        <tr>
                                            <td>E-mail:</td>
                                            <td className="font-medium text-dark-medium"><Link to={"mailto:"+teacher.email} className="__cf_email__" >{teacher.religion}</Link></td>
                                        </tr>
                                        <tr>
                                            <td>Subject:</td>
                                            <td className="font-medium text-dark-medium">English</td>
                                        </tr>
                                        <tr>
                                            <td>Class:</td>
                                            <td className="font-medium text-dark-medium">2</td>
                                        </tr>
                                        <tr>
                                            <td>Section:</td>
                                            <td className="font-medium text-dark-medium">Pink</td>
                                        </tr>
                                        <tr>
                                            <td>ID No:</td>
                                            <td className="font-medium text-dark-medium">10005</td>
                                        </tr>
                                        <tr>
                                            <td>Address:</td>
                                            <td className="font-medium text-dark-medium">House #10, Road #6, Australia</td>
                                        </tr>
                                        <tr>
                                            <td>Phone:</td>
                                            <td className="font-medium text-dark-medium">+ 88 98568888418</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Student Table Area End Here --> */}
        </Layout>
    );
}

export default Index;
