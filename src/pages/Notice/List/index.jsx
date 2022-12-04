import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Layout from "../../Layout";
import {
  addNotice,
  deleteNotice,
  getNotice,
  listNotice,
  updateNotice,
} from "../../../redux/actions/notice";
import { useDispatch, useSelector } from "react-redux";
import { listSchools } from "../../../redux/actions/school";
import Confirm from "../../../commons/components/Confirm";
import { getFormValues } from "../../../utils/getFormValues";
import Select from "react-select";
import moment from "moment/moment";
const priorities = [{ value: '#f939a1', label: 'Pink' }, { value: '#fbd540', label: 'Orange' }, { value: '#40dfcd', label: 'Green' }]
const Index = () => {
  const dispatch = useDispatch();
  const notices = useSelector((state) => state.notice.data);
  const [submit, setSubmit] = useState(false);
  const [formValue, setFormValue] = useState({});
  const [limit] = useState(10);
  const [query, setQuery] = useState({});
  const event = new Date();
  const [iD, setID] = useState("");
  const defaultSchool = useSelector((state) => state.defaultSchool || "");
  const schools = useSelector((state) => state.school.data || []);
  const [deleteConfirmPopup] = useState(
    "confirm-notice-delete"
  );
  // Get Notice
  useEffect(() => {
    getSchools();
    getNotices();
  }, []);
  useEffect(() => {
    getNotices();
  }, [query]);
  useEffect(() => {

  }, [notices]);
  const getNotices = () => {
    let obj = {};
    Object.keys(query).map((a) => {
      if (query[a]) {
        obj[a] = query[a];
      }
      return a;
    });
    dispatch(listNotice(obj, limit));

  };

  // Add Notice

  useEffect(() => {
    // console.log(notices);
    if (!Array.isArray(notices)) {
      setFormValue({ ...formValue, ...notices, schoolId: notices && notices.schoolId ? notices.schoolId._id : '' });
      if (notices && (notices._id || notices._id==null) && submit) {
        getNotices();
      }
    } else {
      setFormValue({ ...formValue, notice: '', priority: '', schoolId: '', _id: null, createdBy: '', createdAt: '' })
    }
  }, [notices]);


  // edit and delete notice
  const search = (e) => {
    e.preventDefault();
    let obj = { searchFields: "date,title" };
    obj = { ...obj, ...getFormValues(e) };
    setQuery({ ...query, ...obj });
  };

  const editNotice = (e) => {
    dispatch(getNotice(e));
  };
  const deleteConfirm = (e) => {
    setID(e);
    window.$("#" + deleteConfirmPopup).modal("show");
  };

  const deleteS = (e) => {
    if (e) {
      setSubmit(true);
      dispatch(deleteNotice(iD));
    }
    window.$("#" + deleteConfirmPopup).modal("hide");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (formValue._id) dispatch(updateNotice(formValue, formValue._id));
    else dispatch(addNotice(formValue));
  };
  const getSchools = () => {
    let obj = {};
    dispatch(listSchools(obj, 0));
  };

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: '#f0f1f3', minHeight: 45, border:'none' }),
    input: (styles) => ({ ...styles }),
  };
  return (
    <Layout>
      {/* <!-- Breadcubs Area Start Here --> */}
      <div className="breadcrumbs-area">
        <h3>Notice Board</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Notice</li>
        </ul>
      </div>
      {/* <!-- Breadcubs Area End Here --> */}
      <div className="row">
        {/* <!-- Add Notice Area Start Here --> */}
        <div className="col-4-xxxl col-12">
          <div className="card height-auto">
            <div className="card-body">
              <div className="heading-layout1">
                <div className="item-title">
                  <h3>Create A Notice</h3>
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
                    {/* <Link className="dropdown-item" to="#">
                      <i className="fas fa-times text-orange-red"></i>Close
                    </Link>
                    <Link className="dropdown-item" to="#">
                      <i className="fas fa-cogs text-dark-pastel-green"></i>Edit
                    </Link> */}
                    <Link className="dropdown-item" to="#" onClick={getNotices}>
                      <i className="fas fa-redo-alt text-orange-peel"></i>
                      Refresh
                    </Link>
                  </div>
                </div>
              </div>
              <form onSubmit={(e) => onSubmit(e)} className="new-added-form">
                <div className="row">
                  <div className="col-12-xxxl col-lg-6 col-12 form-group">
                    <label>Notice</label>
                    <textarea
                      role={5}
                      placeholder="Notice"
                      name="notice"
                      className="form-control"
                      value={formValue.notice}
                      onChange={(e) =>
                        setFormValue({ ...formValue, notice: e.target.value })
                      }
                      onBlur={(e) =>
                        setFormValue({ ...formValue, notice: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <div className="col-12-xxxl col-lg-4 col-12 form-group">
                    <label>Color</label>
                    <Select
                      name="schoolId"
                      value={priorities.find(a => a.value === formValue.priority)}
                      options={priorities}
                      onChange={(e) => { setFormValue({ ...formValue, priority: e.value }) }}
                      required
                      styles={colourStyles}
                    />

                  </div>
                  {defaultSchool ? null : (
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>School ID *</label>
                      <Select
                        name="schoolId"
                        value={schools.map(a => { return { value: a._id, label: a.name } }).find(a => a.value === formValue.schoolId)}
                        options={schools.map(a => { return { value: a._id, label: a.name } })}
                        onChange={(e) => { setFormValue({ ...formValue, schoolId: e.value }) }}
                        required
                        styles={colourStyles}
                      />
                    </div>
                  )}

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
        </div>
        {/* <!-- Add Notice Area End Here --> */}
        {/* <!-- All Notice Area Start Here --> */}
        <div className="col-8-xxxl col-12">
          <div className="card height-auto">
            <div className="card-body">
              <div className="heading-layout1">
                <div className="item-title">
                  <h3>Notice Board</h3>
                </div>
                <div className="dropdown">
                  <Link
                    className="dropdown-toggle"
                    to="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    onClick={getNotices}
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
                      <i className="fas fa-redo-alt text-orange-peel"></i>
                      Refresh
                    </Link>
                  </div>
                </div>
              </div>
              <form className="mg-b-20" onSubmit={(e) => search(e)}>
                <div className="row gutters-8">
                  <div className="col-lg-5 col-12 form-group">
                    <input
                      type="text"
                      placeholder="Search by Date ..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-5 col-12 form-group">
                    <input
                      type="text"
                      placeholder="Search by Title ..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-2 col-12 form-group">
                    <button
                      type="submit"
                      className="fw-btn-fill btn-gradient-yellow"
                    >
                      SEARCH
                    </button>
                  </div>
                </div>
              </form>
              <div className="notice-board-wrap">
                {Array.isArray(notices) ? notices.map(item => (
                  <div className="notice-list " key={item._id}>
                    <div className="post-date" style={item.priority ? { backgroundColor: item.priority } : {}}>{`${moment(item.createdAt).format('DD MMM, YYYY')}`}</div>
                    <h6 className="notice-title">
                      {item.notice}
                      {/* <Link to="#">{`${item.notice}`}</Link> */}
                    </h6>
                    <div className="entry-meta">
                      {item.createdBy ? item.createdBy.firstName + ' ' + item.createdBy.lastName : ''}
                      {/* {``} */}
                    </div>
                    <div className="">
                      <button className="btn btn-outline-primary btn-lg mx-3" type="button" onClick={() => editNotice(item._id)}>Edit</button>
                      <button className="btn btn-outline-danger btn-lg" type="button" onClick={() => deleteConfirm(item._id)}>Delete</button>

                    </div>
                  </div>
                ))
                  : null
                }
              </div>

            </div>
          </div>
        </div>
        {/* <!-- All Notice Area End Here --> */}
      </div>
      <Confirm
        id={deleteConfirmPopup}
        message="Are you sure?"
        confirm={deleteS}
      ></Confirm>
    </Layout>
  );
};

export default Index;
