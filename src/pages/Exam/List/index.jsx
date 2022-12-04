import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../Layout";
import {
  addExam,
  deleteExam,
  getExam,
  listExam,
  updateExam,
} from "../../../redux/actions/exam.js";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import Table from "../../../commons/components/Table";
import Confirm from "../../../commons/components/Confirm";

const subjects = [
  { value: "hindi", label: "hindi" },
  { value: "english", label: "english" },
  { value: "mathematics", label: "mathematics" },
];
const classes = [
  { value: "Nursery", label: "Nursery" },
  { value: "First", label: "First" },
  { value: "Second", label: "Second" },
];
const sections = [
  { value: "A", label: "A" },
  { value: "B", label: "B" },
  { value: "C", label: "C" },
];

const columns = [
    {
      type: "checkbox",
      label: "Exam Name",
      key: "examName",
      prefix: "EX-"
     
    },
    {
      label: "Subject",
      key: "subjectType",
    },
    {
      label: "Class",
      key: "selectClass",
    },
    {
      label: "Section",
      key: "selectSection",
    },
    {
      label: "Time",
      key: "selectTime",
      postfix: "$"
    },
    {
      type: "action",
      actions: {
        edit: {
          label: "Edit",
          key: "_id",
        },
        delete: {
          label: "Delete",
          key: "_id",
        },
      },
    },
  ];

const Index = () => {
  const dispatch = useDispatch();
  const exam = useSelector((state) => state.exam.data);
  const [submit, setSubmit] = useState(false);
  const [formValue, setFormValue] = useState({});
  const [query] = useState({});
  const [limit] = useState(10);
  const [iD, setID] = useState("");

  const [deleteConfirmPopup] = useState("confirm-notice-delete");

  const { id } = useParams();

  useEffect(() => {
    if (window.$.fn.select2 !== undefined) {
      window.$(".select2").select2({
        width: "100%",
      });
    }
    if (id) {
      getExam();
    }
  }, []);
  useEffect(() => {
    setFormValue({ ...formValue, ...exam });
    if (exam && exam._id && submit) {
    }
  }, [exam]);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (formValue._id) dispatch(updateExam(formValue, formValue._id));
    else dispatch(addExam(formValue));
  };
  useEffect(() => {
    if (window.$.fn.select2 !== undefined) {
      window.$(".select2").select2({
        width: "100%",
      });
    }
    /*-------------------------------------
         Date Picker
     -------------------------------------*/
    if (window.$.fn.datepicker !== undefined) {
      window.$(".air-datepicker").datepicker({
        language: {
          days: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          monthsShort: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          today: "Today",
          clear: "Clear",
          dateFormat: "dd/mm/yyyy",
          firstDay: 0,
        },
      });
    }

  });

  // get Exams

  useEffect(() => {
    getExams();
  }, []);
  useEffect(() => {
    getExams();
  }, [query]);
  useEffect(() => {
    window.$(".checkAll").on("click", function () {
      window
        .$(this)
        .parents(".table")
        .find("input:checkbox")
        .prop("checked", this.checked);
    });
  }, [exam]);
  const getExams = () => {
    let obj = {};
    Object.keys(query).map((a) => {
      if (query[a]) {
        obj[a] = query[a];
      }
      return a;
    });
    dispatch(listExam(obj, limit));
  };

  // edit and delete Exam

  const editExam = (e) => {
    dispatch(getExam(e));
  };
  const deleteConfirm = (e) => {
    setID(e);
    window.$("#" + deleteConfirmPopup).modal("show");
  };

  const deleteS = (e) => {
    if (e) {
      setSubmit(true);
      dispatch(deleteExam(iD));
    }
    window.$("#" + deleteConfirmPopup).modal("hide");
  };


  return (
    <Layout>
      {/* <!-- Breadcubs Area Start Here --> */}
      <div className="breadcrumbs-area">
        <h3>Examination</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Exam Schedule</li>
        </ul>
      </div>
      {/* <!-- Breadcubs Area End Here --> */}
      {/* <!-- Exam Schedule Area Start Here --> */}
      <div className="row">
        <div className="col-4-xxxl col-12">
          <div className="card height-auto">
            <div className="card-body">
              <div className="heading-layout1">
                <div className="item-title">
                  <h3>Add New Exam</h3>
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
                      <i className="fas fa-redo-alt text-orange-peel"></i>
                      Refresh
                    </Link>
                  </div>
                </div>
              </div>
              <form onSubmit={(e) => onSubmit(e)} className="new-added-form">
                <div className="row">
                  <div className="col-12-xxxl col-lg-6 col-12 form-group">
                    <label>Exam Name</label>
                    <input
                      type="text"
                      placeholder="Exam Name"
                      className="form-control"
                      name="examName"
                      value={formValue.examName}
                      onChange={(e) =>
                        setFormValue({
                          ...formValue,
                          examName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="col-12-xxxl col-lg-6 col-12 form-group">
                    <label>Subject Type</label>
                    <Select
                      name="subjectType"
                      value={subjects.find(
                        (a) => a.value === formValue.subjectType
                      )}
                      options={subjects}
                      onChange={(e) => {
                        setFormValue({ ...formValue, subjectType: e.value });
                      }}
                      required
                    />
                  </div>
                  <div className="col-12-xxxl col-lg-6 col-12 form-group">
                    <label>Class Type</label>
                    <Select
                      name="selectClass"
                      value={classes.find(
                        (a) => a.value === formValue.selectClass
                      )}
                      options={classes}
                      onChange={(e) => {
                        setFormValue({ ...formValue, selectClass: e.value });
                      }}
                      required
                    />
                  </div>
                  <div className="col-12-xxxl col-lg-6 col-12 form-group">
                    <label>Section Type</label>
                    <Select
                      name="selectSection"
                      value={sections.find(
                        (a) => a.value === formValue.selectSection
                      )}
                      options={sections}
                      onChange={(e) => {
                        setFormValue({ ...formValue, selectSection: e.value });
                      }}
                      required
                    />
                  </div>
                  <div className="col-12-xxxl col-lg-6 col-12 form-group">
                    <label>Select Time</label>
                    <input
                      type="text"
                      placeholder="Select Time"
                      name="selectTime"
                      className="form-control"
                      value={formValue.selectTime}
                      onChange={(e) =>
                        setFormValue({
                          ...formValue,
                          selectTime: e.target.value,
                        })
                      }
                      required
                    />
                    <i className="far fa-clock"></i>
                  </div>

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
        <div className="col-8-xxxl col-12">
          <div className="card height-auto">
            <div className="card-body">
              <div className="heading-layout1">
                <div className="item-title">
                  <h3>All Exam Schedule</h3>
                </div>
                <div className="dropdown">
                  <Link
                    className="dropdown-toggle"
                    to="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                     onClick = {getExam}
                  >
                    ...
                  </Link>

                  <div className="dropdown-menu dropdown-menu-right">
                
                    <Link className="dropdown-item" to="#" onClick={getExam}>
                      <i className="fas fa-redo-alt text-orange-peel"></i>
                      Refresh
                    </Link>
                  </div>
                </div>
              </div>
              <form className="mg-b-20">
                <div className="row gutters-8">
                  <div className="col-lg-4 col-12 form-group">
                    <input
                      type="text"
                      placeholder="Search by Exam ..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-3 col-12 form-group">
                    <input
                      type="text"
                      placeholder="Search by Subject ..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-3 col-12 form-group">
                    <input
                      type="text"
                      placeholder="Search by Date ..."
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
              <div className="table-responsive">
              <Table
                  className="table display school-table text-nowrap"
                  heading={columns}
                  data={exam}
                  edit={editExam}
                  delete={deleteConfirm}
                ></Table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Exam Schedule Area End Here --> */}
      <Confirm
        id={deleteConfirmPopup}
        message="Are you sure?"
        confirm={deleteS}
      ></Confirm>
    </Layout>
  );
};

export default Index;
