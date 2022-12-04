import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Layout';

const Index = () => {
    return (
        <Layout>
            {/* <!-- Breadcubs Area End Here --> */}
            {/* <!-- Student Promotion Area Start Here --> */}
            <div className="card height-auto">
                <div className="card-body">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>Search Student Promotion</h3>
                        </div>
                        <div className="dropdown">
                            <Link className="dropdown-toggle" to="#" role="button"
                                data-toggle="dropdown" aria-expanded="false">...</Link>

                            <div className="dropdown-menu dropdown-menu-right">
                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                            </div>
                        </div>
                    </div>
                    <form className="new-added-form">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Current Session *</label>
                                <select className="select2">
                                    <option value="">2017-2018</option>
                                    <option value="1">2018-2019</option>
                                    <option value="2">2015-2016</option>
                                    <option value="3">2014-2015</option>
                                </select>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Promote Session *</label>
                                <select className="select2">
                                    <option value="">2017-2018</option>
                                    <option value="1">2018-2019</option>
                                    <option value="2">2015-2016</option>
                                    <option value="3">2014-2015</option>
                                </select>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Promotion From Class *</label>
                                <select className="select2">
                                    <option value="">Please Select *</option>
                                    <option value="1">Play</option>
                                    <option value="2">Nursery</option>
                                    <option value="3">One</option>
                                    <option value="3">Two</option>
                                    <option value="3">Three</option>
                                    <option value="3">Four</option>
                                    <option value="3">Five</option>
                                </select>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Promotion To Class *</label>
                                <select className="select2">
                                    <option value="">Please Select *</option>
                                    <option value="1">Play</option>
                                    <option value="2">Nursery</option>
                                    <option value="3">One</option>
                                    <option value="3">Two</option>
                                    <option value="3">Three</option>
                                    <option value="3">Four</option>
                                    <option value="3">Five</option>
                                </select>
                            </div>
                            <div className="col-12 form-group mg-t-8">
                                <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                <button type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <!-- Student Promotion Area End Here --> */}
        </Layout>
    );
}

export default Index;
