import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../Layout";
import Select from "react-select";
import { useHistory } from "react-router";
import {
  addLibrary,
  getLibrary,
  updateLibrary,
} from "../../../redux/actions/library";
import { useDispatch, useSelector } from "react-redux";


const classes = [
    {value: "Nursery", label: "Nursery"},
    {value: "First", label: "First"},
    {value: "Second", label: "Second"},
    {value: "Third", label: "Third"},
    {value: "Fourth", label: "Fourth"},
    {value: "Fifth", label: "Fifth"}

]

const Index = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const library = useSelector((state) => state.library.data);
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
      dispatch(getLibrary(id));
    }
  }, []);
  useEffect(() => {
    
    setFormValue({ ...formValue, ...library });
    if (library && library._id && submitted) {
      history.push("/book-list");
    }
  }, [library]);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (formValue._id) dispatch(updateLibrary(formValue, formValue._id));
    else dispatch(addLibrary(formValue));
  };
  return (
    <Layout>
      {/* <!-- Breadcubs Area Start Here --> */}
      <div className="breadcrumbs-area">
        <h3>Library</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Add New Book</li>
        </ul>
      </div>
      {/* <!-- Breadcubs Area End Here -->
            <!-- Add New Book Area Start Here --> */}
      <div className="card height-auto">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3>Add New Book</h3>
            </div>
            <div className="dropdown">
              <Link
                className="dropdown-toggle"
                to="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                ...
              </Link>

              <div className="dropdown-menu dropdown-menu-right">
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-times text-orange-red"></i>Close
                </Link>
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-cogs text-dark-pastel-green"></i>Edit
                </Link>
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-redo-alt text-orange-peel"></i>Refresh
                </Link>
              </div>
            </div>
          </div>
          <form onSubmit={(e) => onSubmit(e)} className="new-added-form">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>Book Name *</label>
                <input
                  type="text"
                  placeholder="Book Name"
                  name="bookName"
                  className="form-control"
                  value={formValue.bookName}
                  onChange={(e) =>
                    setFormValue({ ...formValue, bookName: e.target.value })
                  }
                  required
                />
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>Subject *</label>
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  className="form-control"
                  value={formValue.subject}
                  onChange={(e) =>
                    setFormValue({ ...formValue, subject: e.target.value })
                  }
                  required
                  
                />
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>Writter Name *</label>
                <input
                  type="text"
                  placeholder="Writter Name"
                  name="writterName"
                  className="form-control"
                  value={formValue.writterName}
                  onChange={(e) =>
                    setFormValue({ ...formValue, writterName: e.target.value })
                  }
                  required
                />
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>Class *</label>
                <Select
                      name="class"
                      value={classes.find((a) => a.value === formValue.class)}
                      options={classes}
                      onChange={(e) => {
                        setFormValue({ ...formValue, class: e.value });
                      }}
                      required
                    />
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>ID No</label>
                <input
                  type="text"
                  placeholder="ID No"
                  name="idNo"
                  className="form-control"
                  value={formValue.idNo}
                  onChange={(e) =>
                    setFormValue({ ...formValue, idNo: e.target.value })
                  }
                  required
                />
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>Publishing Date *</label>
                <input
                  type="text"
                  placeholder="Publishing Date"
                  name="publishingDate"
                  className="form-control"
                  value={formValue.publishingDate}
                  onChange={(e) =>
                    setFormValue({ ...formValue, publishingDate: e.target.value })
                  }
                  required
                />
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>Uploade Date *</label>
                <input
                  type="text"
                  placeholder="Upload Date"
                  name="uploadDate"
                  className="form-control"
                  value={formValue.uploadDate}
                  onChange={(e) =>
                    setFormValue({ ...formValue, uploadDate: e.target.value })
                  }
                  required
                />
              </div>
              <div className="col-md-3 d-none d-xl-block form-group"></div>
              <div className="col-12 form-group mg-t-8">
                <button
                  type="submit"
                  className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                >
                  Save
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
      {/* <!-- Add New Book Area End Here --> */}
    </Layout>
  );
};

export default Index;
