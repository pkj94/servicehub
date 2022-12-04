import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../Layout";
import {
    addTransport,
    deleteTransport,
    getTransport,
    listTransport,
    updateTransport,
  } from "../../../redux/actions/transport.js";
  import { useDispatch, useSelector } from "react-redux";
 
import Table from "../../../commons/components/Table";
import Confirm from "../../../commons/components/Confirm";

const columns = [
    {
      type: "checkbox",
      label: "Route Name",
      key: "routeName",
      prefix: "ROUTE-"
     
    },
    {
      label: "Vehicle Number",
      key: "vehicleNumber",
    },
    {
      label: "Driver Name",
      key: "driverName",
    },
    {
      label: "License Number",
      key: "licenseNumber",
    },
    {
      label: "Phone Number",
      key: "phoneNumber",
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
  const transport = useSelector((state) => state.transport.data);
  const [submit, setSubmit] = useState(false);
  const [formValue, setFormValue] = useState({});
  const [limit] = useState(10);
  const [query] = useState({});
  const { id } = useParams();
  const [iD, setID] = useState("");
  
  const [deleteConfirmPopup] = useState("confirm-notice-delete");


    // get transport
    useEffect(() => {
        getTransports();
      }, []);
      useEffect(() => {
        getTransports();
      }, [query]);
      useEffect(() => {
        window.$(".checkAll").on("click", function () {
          window
            .$(this)
            .parents(".table")
            .find("input:checkbox")
            .prop("checked", this.checked);
        });
      }, [transport]);
      const getTransports = () => {
        let obj = {};
        Object.keys(query).map((a) => {
          if (query[a]) {
            obj[a] = query[a];
          }
          return a;
        });
        dispatch(listTransport(obj, limit));
      };



  // add transport

  useEffect(() => {
    if (window.$.fn.select2 !== undefined) {
      window.$(".select2").select2({
        width: "100%",
      });
    }
    if (id) {
     getTransport();
    }
  }, []);
  useEffect(() => {
    
    setFormValue({ ...formValue, ...transport });
    if (transport && transport._id && submit) {
    }
  }, [transport]);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (formValue._id) dispatch(updateTransport(formValue, formValue._id));
    else dispatch(addTransport(formValue));
  };
  useEffect(() => {
    if (window.$.fn.select2 !== undefined) {
      window.$(".select2").select2({
        width: "100%",
      });
    }
  });


  // edit or delete transport
  const editTransport = (e) => {
    dispatch(getTransport(e));
  };
  const deleteConfirm = (e) => {
    setID(e);
    window.$("#" + deleteConfirmPopup).modal("show");
  };

  const deleteS = (e) => {
    if (e) {
      setSubmit(true);
      dispatch(deleteTransport(iD));
    }
    window.$("#" + deleteConfirmPopup).modal("hide");
  };


  return (
    <Layout>
      {/* <!-- Breadcubs Area Start Here --> */}
      <div className="breadcrumbs-area">
        <h3>Transport</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Transport</li>
        </ul>
      </div>
      {/* <!-- Breadcubs Area End Here --> */}
      <div className="row">
        {/* <!-- Add Transport Area Start Here --> */}
        <div className="col-4-xxxl col-12">
          <div className="card height-auto">
            <div className="card-body">
              <div className="heading-layout1">
                <div className="item-title">
                  <h3>Add New Transport</h3>
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
                  <div className="col-12-xxxl col-xl-4 col-sm-6 col-12 form-group">
                    <label>Route Name</label>
                    <input
                      type="text"
                      placeholder="Route Name"
                      name="routeName"
                      className="form-control"
                      value={formValue.routeName}
                      onChange={(e) =>
                        setFormValue({
                          ...formValue,
                          routeName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="col-12-xxxl col-xl-4 col-sm-6 col-12 form-group">
                    <label>Vehicle Number</label>
                    <input
                      type="text"
                      placeholder="Vehicle Number"
                      name="vehicleNumber"
                      className="form-control"
                      value={formValue.vehicleNumber}
                      onChange={(e) =>
                        setFormValue({
                          ...formValue,
                          vehicleNumber: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="col-12-xxxl col-xl-4 col-sm-6 col-12 form-group">
                    <label>Driver Name</label>
                    <input
                      type="text"
                      placeholder="Driver Name"
                      name="driverName"
                      className="form-control"
                      value={formValue.driverName}
                      onChange={(e) =>
                        setFormValue({
                          ...formValue,
                          driverName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="col-12-xxxl col-xl-4 col-sm-6 col-12 form-group">
                    <label>License Number</label>
                    <input
                      type="text"
                      placeholder="License Number"
                      name="licenseNumber"
                      className="form-control"
                      value={formValue.licenseNumber}
                      onChange={(e) =>
                        setFormValue({
                          ...formValue,
                          licenseNumber: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="col-12-xxxl col-xl-4 col-sm-6 col-12 form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      className="form-control"
                      value={formValue.phoneNumber}
                      onChange={(e) =>
                        setFormValue({
                          ...formValue,
                          phoneNumber: e.target.value,
                        })
                      }
                      required
                    />
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
        {/* <!-- Add Transport Area End Here --> */}
        {/* <!-- All Transport List Area Start Here --> */}
        <div className="col-8-xxxl col-12">
          <div className="card height-auto">
            <div className="card-body">
              <div className="heading-layout1">
                <div className="item-title">
                  <h3>All Transport Lists</h3>
                </div>
                <div className="dropdown">
                  <Link
                    className="dropdown-toggle"
                    to="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    onClick={getTransports}
                  >
                    ...
                  </Link>

                  <div className="dropdown-menu dropdown-menu-right">
                   
                    <Link className="dropdown-item" to="#" onClick={getTransports}>
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
                      placeholder="Search by Route ..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-3 col-12 form-group">
                    <input
                      type="text"
                      placeholder="Search by Car Number ..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-3 col-12 form-group">
                    <input
                      type="text"
                      placeholder="Search by Phone ..."
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
                  data={transport}
                  edit={editTransport}
                  delete={deleteConfirm}
                ></Table>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- All Transport List Area End Here --> */}
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
