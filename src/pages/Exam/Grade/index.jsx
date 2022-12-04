import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../Layout";
import {
  addExamgrade,
  deleteExamgrade,
  getExamgrade,
  listExamgrade,
  updateExamgrade,
} from "../../../redux/actions/examGrade.js";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import Table from "../../../commons/components/Table";
import Confirm from "../../../commons/components/Confirm";

const grades = [
   { value: "4.00", label: "4.00"},
   { value: "5.00", label: "5.00"},
   { value: "6.00", label: "6.00"} ,
   { value: "7.00", label: "7.00"},
   { value: "8.00", label: "8.00"},
   { value: "9.00", label: "9.00"},
   { value: "10.00", label: "10.00"}      
]
const columns = [
    {
      type: "checkbox",
      label: "Grade Name",
      key: "gradeName",
      prefix: "HOS-"
     
    },
    {
      label: "Grade Point",
      key: "gradePoint",
    },
    {
      label: "Percentage From",
      key: "percentageFrom",
    },
    {
      label: "Percentage From",
      key: "precentageupto",
    },
    {
        label: "Comments",
        key: "comments"
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
  const examGrade = useSelector((state) => state.examGrade.data);
  const [submit, setSubmit] = useState(false);
  const [formValue, setFormValue] = useState({});
  const [query] = useState({});
  const [limit] = useState(10);
  const [iD, setID] = useState("");
  const { id } = useParams();
  const [deleteConfirmPopup] = useState("confirm-notice-delete");

  useEffect(() => {
    if (window.$.fn.select2 !== undefined) {
      window.$(".select2").select2({
        width: "100%",
      });
    }
    if (id) {
      getExamgrade();
    }
  }, []);
  useEffect(() => {
    setFormValue({ ...formValue, ...examGrade });
    if (examGrade && examGrade._id && submit) {
    }
  }, [examGrade]);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (formValue._id) dispatch(updateExamgrade(formValue, formValue._id));
    else dispatch(addExamgrade(formValue));
  };
  useEffect(() => {
    if (window.$.fn.select2 !== undefined) {
      window.$(".select2").select2({
        width: "100%",
      });
    }
  });
//  getting grade and edit delete

useEffect(() => {
    getExamgrades();
  }, []);
  useEffect(() => {
    getExamgrades();
  }, [query]);
  useEffect(() => {
    window.$(".checkAll").on("click", function () {
      window
        .$(this)
        .parents(".table")
        .find("input:checkbox")
        .prop("checked", this.checked);
    });
  }, [examGrade]);
  const getExamgrades = () => {
    let obj = {};
    Object.keys(query).map((a) => {
      if (query[a]) {
        obj[a] = query[a];
      }
      return a;
    });
    dispatch(listExamgrade(obj, limit));
  };

  // edit and delete grades
  const editExamgrade = (e) => {
    dispatch(getExamgrade(e));
  };
  const deleteConfirm = (e) => {
    setID(e);
    window.$("#" + deleteConfirmPopup).modal("show");
  };

  const deleteS = (e) => {
    if (e) {
      setSubmit(true);
      dispatch(deleteExamgrade(iD));
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
          <li>Exam Grade</li>
        </ul>
      </div>
      {/* <!-- Breadcubs Area End Here --> */}
      <div className="row">
        {/* <!-- Exam Grade Add Area Start Here --> */}
        <div className="col-4-xxxl col-12">
          <div className="card height-auto">
            <div className="card-body">
              <div className="heading-layout1">
                <div className="item-title">
                  <h3>Add New Grade</h3>
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
              <form  onSubmit={(e) => onSubmit(e)} className="new-added-form">
                <div className="row">
                  <div className="col-12-xxxl col-lg-6 col-12 form-group">
                    <label>Grade Name</label>
                    <input
                      type="text"
                      placeholder="Grade Name"
                      name="gradeName"
                      className="form-control"
                      value={formValue.gradeName}
                      onChange={(e) =>
                        setFormValue({
                          ...formValue,
                          gradeName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="col-12-xxxl col-lg-6 col-12 form-group">
                    <label>Grade Point</label>
                    <Select
                      name="gradePoint"
                      value={grades.find(
                        (a) => a.value === formValue.gradePoint
                      )}
                      options={grades}
                      onChange={(e) => {
                        setFormValue({ ...formValue, gradePoint: e.value });
                      }}
                      required
                    />
                  </div>
                  <div className="col-12-xxxl col-lg-6 col-12 form-group">
                    <label>Percentage From</label>
                    <input
                      type="text"
                      placeholder="Percentage From "
                      name="percentageFrom"
                      className="form-control"
                      value={formValue.percentageFrom}
                      onChange={(e) =>
                        setFormValue({
                          ...formValue,
                          percentageFrom: e.target.value,
                        })
                      }
                      required
                    
                    />
                  </div>
                  <div className="col-12-xxxl col-lg-6 col-12 form-group">
                    <label>Percentage Upto</label>
                    <input
                      type="text"
                      placeholder="Percentage Upto"
                      name="precentageupto"
                      className="form-control"
                      value={formValue.precentageupto}
                      onChange={(e) =>
                        setFormValue({
                          ...formValue,
                          precentageupto: e.target.value,
                        })
                      }
                      required
                    
                    
                    />
                  </div>
                  <div className="col-12 form-group">
                    <label>Comments</label>
                    <textarea
                      className="textarea form-control"
                      name="comments"
                      id="form-message"
                      cols="10"
                      rows="4"
                      value={formValue.comments}
                      onChange={(e) =>
                        setFormValue({
                          ...formValue,
                          comments: e.target.value,
                        })
                      }
                      required
                    ></textarea>
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
        {/* <!-- Exam Grade Add Area End Here --> */}
        {/* <!-- Exam Grade List Area Start Here --> */}
        <div className="col-8-xxxl col-12">
          <div className="card height-auto">
            <div className="card-body">
              <div className="heading-layout1">
                <div className="item-title">
                  <h3>Exam Grade Lists</h3>
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
              <form className="mg-b-20">
                <div className="row gutters-8">
                  <div className="col-lg-5 col-sm-4 col-12 form-group">
                    <input
                      type="text"
                      placeholder="Search by Grade ..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-5 col-sm-5 col-12 form-group">
                    <input
                      type="text"
                      placeholder="Search by Point ..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-2 col-sm-3 col-12 form-group">
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
                  data={examGrade}
                  edit={editExamgrade}
                  delete={deleteConfirm}
                ></Table>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Exam Grade List Area End Here --> */}
      </div>
      {/* <!-- All Subjects Area End Here --> */}
      <Confirm
        id={deleteConfirmPopup}
        message="Are you sure?"
        confirm={deleteS}
      ></Confirm>
    </Layout>
  );
};

export default Index;
