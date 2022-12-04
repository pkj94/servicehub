import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Layout from "../../Layout";
import {
  addSchool,
  getSchool,
  updateSchool,
} from "../../../redux/actions/school";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const school = useSelector((state) => state.school.data);
  const [submitted, setSubmitted] = useState(false);
  const [formValue, setFormValue] = useState({});
  const { id } = useParams();
  useEffect(() => {
    if (window.$.fn.select2 !== undefined) {
      window.$(".select2").select2({
        width: "100%",
      });
    }
    if (id) {
      dispatch(getSchool(id));
    }
  }, []);
  useEffect(() => {
    console.log(school);
    setFormValue({ ...formValue, ...school });
    if (school && school._id && submitted) {
      history.push("/school-list");
    }
  }, [school]);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (formValue._id) dispatch(updateSchool(formValue, formValue._id));
    else dispatch(addSchool(formValue));
  };
  return (
    <Layout>
      {/* <!-- Breadcubs Area Start Here --> */}
      <div className="breadcrumbs-area">
        <h3>Schools</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Add New School</li>
        </ul>
      </div>
      {/* <!-- Breadcubs Area End Here -->
            <!-- Add School Area Start Here --> */}
      <div className="card height-auto">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3>Add New School</h3>
            </div>
            {/* <div className="dropdown">
                            <Link className="dropdown-toggle" to="#" role="button"
                                data-toggle="dropdown" aria-expanded="false">...</Link>

                            <div className="dropdown-menu dropdown-menu-right">
                                <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                <Link className="dropdown-item" to="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                            </div>
                        </div> */}
          </div>
          <form onSubmit={(e) => onSubmit(e)} className="new-added-form">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-12 form-group">
                <label>Name *</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formValue.name}
                  onChange={(e) =>
                    setFormValue({ ...formValue, name: e.target.value })
                  }
                  required
                  className="form-control"
                />
              </div>

              <div className="col-xl-4 col-lg-6 col-12 form-group">
                <label>E-Mail *</label>
                <input
                  type="email"
                  placeholder="E-Mail"
                  name="email"
                  value={formValue.email}
                  onChange={(e) =>
                    setFormValue({ ...formValue, email: e.target.value })
                  }
                  required
                  className="form-control"
                />
              </div>

              <div className="col-xl-4 col-lg-6 col-12 form-group">
                <label>Phone *</label>
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  onChange={(e) =>
                    setFormValue({ ...formValue, phone: e.target.value })
                  }
                  value={formValue.phone}
                  required
                  className="form-control"
                />
              </div>
              <div className="col-lg-6 col-12 form-group">
                <label>About Us</label>
                <textarea
                  className="textarea form-control"
                  required
                  placeholder="About Us"
                  name="description"
                  id="form-message"
                  cols="10"
                  onChange={(e) =>
                    setFormValue({ ...formValue, description: e.target.value })
                  }
                  rows="9"
                  value={formValue.description}
                ></textarea>
              </div>

              <div className="col-lg-6 col-12 form-group">
                <label>Address</label>
                <textarea
                  className="textarea form-control"
                  required
                  placeholder="Address"
                  name="address"
                  id="form-message"
                  cols="10"
                  onChange={(e) =>
                    setFormValue({ ...formValue, address: e.target.value })
                  }
                  rows="9"
                  value={formValue.address}
                ></textarea>
              </div>
              <div className="col-md-6 form-group"></div>
              <div className="col-12 form-group mg-t-8">
                <button
                  type="submit"
                  className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="btn-fill-lg bg-blue-dark btn-hover-yellow"
                >
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- Add School Area End Here --> */}
    </Layout>
  );
};

export default Index;
