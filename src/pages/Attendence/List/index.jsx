import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Layout';

const Index = () => {
    useEffect(() => {

        
    }, [])
    useEffect(() => {
        if (window.$.fn.select2 !== undefined) {
            window.$('.select2').select2({
                width: '100%'
            });
        }
    })
    return (
        <Layout>
            {/* <!-- Breadcubs Area Start Here --> */}
            <div className="breadcrumbs-area">
                <h3>Student Attendence</h3>
                <ul>
                    <li>
                        <Link to="index.html">Home</Link>
                    </li>
                    <li>Attendence</li>
                </ul>
            </div>
            {/* <!-- Breadcubs Area End Here --> */}
            <div className="row">
                {/* <!-- Student Attendence Search Area Start Here --> */}
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="heading-layout1">
                                <div className="item-title">
                                    <h3>Student Attendence</h3>
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
                                        <label>Select Class</label>
                                        <select className="select2"  name="selectClass">
                                            <option value="">Select Class</option>
                                            <option value="1">Nursery</option>
                                            <option value="2">Play</option>
                                            <option value="3">One</option>
                                            <option value="4">Two</option>
                                            <option value="5">Three</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                                        <label>Select Section</label>
                                        <select className="select2"  name="selectSection">
                                            <option value="0">Select Section</option>
                                            <option value="1">A</option>
                                            <option value="2">B</option>
                                            <option value="3">C</option>
                                            <option value="4">D</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                                        <label>Select Month</label>
                                        <select className="select2"  name="selectMonth">
                                            <option value="0">Select Month</option>
                                            <option value="1">January</option>
                                            <option value="2">February</option>
                                            <option value="3">March</option>
                                            <option value="4">April</option>
                                            <option value="5">May</option>
                                            <option value="6">June</option>
                                            <option value="7">July</option>
                                            <option value="8">August</option>
                                            <option value="9">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                                        <label>Select Session</label>
                                        <select className="select2"  name="selectSession">
                                            <option value="0">Select Session</option>
                                            <option value="1">2016-2017</option>
                                            <option value="2">2017-20108</option>
                                            <option value="3">2018-2019</option>
                                            <option value="4">2020-2021</option>
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
                </div>
                {/* <!-- Student Attendence Search Area End Here --> */}
                {/* <!-- Student Attendence Area Start Here --> */}
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="heading-layout1">
                                <div className="item-title">
                                    <h3>Attendence Sheet Of Class One: Section A, April 2019</h3>
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
                            <div className="table-responsive">
                                <table className="table bs-table table-striped table-bordered text-nowrap">
                                    <thead>
                                        <tr>
                                            <th className="text-left">Students</th>
                                            <th>1</th>
                                            <th>2</th>
                                            <th>3</th>
                                            <th>4</th>
                                            <th>5</th>
                                            <th>6</th>
                                            <th>7</th>
                                            <th>8</th>
                                            <th>9</th>
                                            <th>10</th>
                                            <th>11</th>
                                            <th>12</th>
                                            <th>13</th>
                                            <th>14</th>
                                            <th>15</th>
                                            <th>16</th>
                                            <th>17</th>
                                            <th>18</th>
                                            <th>19</th>
                                            <th>20</th>
                                            <th>21</th>
                                            <th>22</th>
                                            <th>23</th>
                                            <th>24</th>
                                            <th>25</th>
                                            <th>26</th>
                                            <th>27</th>
                                            <th>28</th>
                                            <th>29</th>
                                            <th>30</th>
                                            <th>31</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-left">Michele Johnson</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Richi Akon</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Amanda Kherr</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Michele Johnson</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Richi Akon</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Amanda Kherr</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Michele Johnson</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Richi Akon</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Amanda Kherr</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Michele Johnson</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Richi Akon</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Amanda Kherr</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Michele Johnson</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Richi Akon</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Amanda Kherr</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Michele Johnson</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Richi Akon</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Amanda Kherr</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-times text-danger"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td><i className="fas fa-check text-success"></i></td>
                                            <td>-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Student Attendence Area End Here --> */}
        </Layout>
    );
}

export default Index;
