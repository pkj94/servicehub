import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getParent } from '../../../redux/actions/parent';
import Layout from '../../Layout';

const Index = () => {
    const dispatch = useDispatch();
    const parent = useSelector(state => state.parent.data || {});
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            dispatch(getParent(id));
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
                <h3>Parents</h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>Parents Details</li>
                </ul>
            </div>
            {/* <!-- Breadcubs Area End Here --> */}
            {/* <!-- Student Details Area Start Here --> */}
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
                                {/* <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link> */}
                                <Link className="dropdown-item" to="#" onClick={() => dispatch(getParent(id))}><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                            </div>
                        </div>
                    </div>
                    <div className="single-info-details">
                        <div className="item-img">
                            <img src="/img/figure/parents.jpg" alt="student" />
                        </div>
                        <div className="item-content">
                            <div className="header-inline item-header">
                                <h3 className="text-dark-medium font-medium">{parent.firstName} {parent.lastName}</h3>
                                <div className="header-elements">
                                    <ul>
                                        <li><Link to={"/parent-edit/" + id}><i className="far fa-edit"></i></Link></li>
                                        <li><Link to="#"><i className="fas fa-print"></i></Link></li>
                                        <li><Link to="#"><i className="fas fa-download"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <p>{parent.shortBio}</p>
                            <div className="info-table table-responsive">
                                <table className="table text-nowrap">
                                    <tbody>
                                        <tr>
                                            <td>Name:</td>
                                            <td className="font-medium text-dark-medium">{parent.firstName} {parent.lastName}</td>
                                        </tr>
                                        <tr>
                                            <td>Gender:</td>
                                            <td className="font-medium text-dark-medium">{parent.gender}</td>
                                        </tr>
                                        <tr>
                                            <td>Occupation:</td>
                                            <td className="font-medium text-dark-medium">{parent.occupation}</td>
                                        </tr>
                                        <tr>
                                            <td>ID:</td>
                                            <td className="font-medium text-dark-medium">{parent.parentId?'PRN-'+pad(parent.parentId, 10):''}</td>
                                        </tr>
                                        <tr>
                                            <td>Address:</td>
                                            <td className="font-medium text-dark-medium">{parent.address}</td>
                                        </tr>
                                        <tr>
                                            <td>Religion:</td>
                                            <td className="font-medium text-dark-medium">{parent.religion}</td>
                                        </tr>
                                        <tr>
                                            <td>Phone:</td>
                                            <td className="font-medium text-dark-medium">{parent.phone}</td>
                                        </tr>
                                        <tr>
                                            <td>E-mail:</td>
                                            <td className="font-medium text-dark-medium"><Link to={'mailto:' + parent.email} className="__cf_email__" data-cfemail="b9d3dccacad0d8cbd6cadcf9ded4d8d0d597dad6d4">{parent.email}</Link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Student Details Area End Here --> */}
        </Layout>
    );
}

export default Index;
