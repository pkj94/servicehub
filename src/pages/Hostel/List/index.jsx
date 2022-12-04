import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../Layout";
import {
  addHostel,
  deleteHostel,
  getHostel,
  listHostel,
  updateHostel,
} from "../../../redux/actions/hostel.js";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import Table from "../../../commons/components/Table";
import Confirm from "../../../commons/components/Confirm";

const rooms = [
  { value: "Big", label: "Big" },
  { value: "Medium", label: "Medium" },
  { value: "Small", label: "Small" },
];

const bedsNumber = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
];

const columns = [
  {
    type: "checkbox",
    label: "Hostel Name",
    key: "hostelName",
    prefix: "HOS-"
   
  },
  {
    label: "ROOM No.",
    key: "roomNumber",
  },
  {
    label: "Room Type",
    key: "roomType",
  },
  {
    label: "No. Of Bed",
    key: "bedsNumber",
  },
  {
    label: "Cost Of Bed",
    key: "costBeds",
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
  const hostel = useSelector((state) => state.hostel.data);
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
     getHostels();
    }
  }, []);
  useEffect(() => {
    
    setFormValue({ ...formValue, ...hostel });
    if (hostel && hostel._id && submit) {
    }
  }, [hostel]);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (formValue._id) dispatch(updateHostel(formValue, formValue._id));
    else dispatch(addHostel(formValue));
  };

  // get hostel

  useEffect(() => {
    getHostels();
  }, []);
  useEffect(() => {
    getHostels();
  }, [query]);
  useEffect(() => {
    window.$(".checkAll").on("click", function () {
      window
        .$(this)
        .parents(".table")
        .find("input:checkbox")
        .prop("checked", this.checked);
    });
  }, [hostel]);
  const getHostels = () => {
    let obj = {};
    Object.keys(query).map((a) => {
      if (query[a]) {
        obj[a] = query[a];
      }
      return a;
    });
    dispatch(listHostel(obj, limit));
  };

  // edit and delete hostels
  const editHostel = (e) => {
    dispatch(getHostel(e));
  };
  const deleteConfirm = (e) => {
    setID(e);
    window.$("#" + deleteConfirmPopup).modal("show");
  };

  const deleteS = (e) => {
    if (e) {
      setSubmit(true);
      dispatch(deleteHostel(iD));
    }
    window.$("#" + deleteConfirmPopup).modal("hide");
  };

  return (
    <Layout>
      {/* <!-- Breadcubs Area Start Here --> */}
      <div className="breadcrumbs-area">
        <h3>Hostel List</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Hostel</li>
        </ul>
      </div>
      {/* <!-- Breadcubs Area End Here --> */}
      <div className="row">
        {/* <!-- Add Room Area Start Here --> */}
        <div className="col-4-xxxl col-12">
          <div className="card height-auto">
            <div className="card-body">
              <div className="heading-layout1">
                <div className="item-title">
                  <h3>Add New Room</h3>
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
                   
                    <Link className="dropdown-item" to="#" onClick={getHostels}>
                      <i className="fas fa-redo-alt text-orange-peel"></i>
                      Refresh
                    </Link>
                  </div>
                </div>
              </div>
              <form onSubmit={(e) => onSubmit(e)}className="new-added-form">
                <div className="row">
                  <div className="col-12-xxxl col-lg-6 col-12 form-group">
                    <label>Hostel Name</label>
                    <input
                      type="text"
                      placeholder="Hostel Name"
                      name="hostelName"
                      className="form-control"
                      value={formValue.hostelName}
                      onChange={(e) =>
                        setFormValue({
                          ...formValue,
                          hostelName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="col-12-xxxl col-lg-6 col-12 form-group">
                    <label>Room Number</label>
                    <input
                      type="text"
                      placeholder="Room Number"
                      name="roomNumber"
                      className="form-control"
                      value={formValue.roomNumber}
                      onChange={(e) =>
                        setFormValue({
                          ...formValue,
                          roomNumber: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="col-12-xxxl col-lg-4 col-12 form-group">
                    <label>Room Type</label>
                    <Select
                      name="roomType"
                      value={rooms.find((a) => a.value === formValue.roomType)}
                      options={rooms}
                      onChange={(e) => {
                        setFormValue({ ...formValue, roomType: e.value });
                      }}
                      required
                    />
                  </div>
                  <div className="col-12-xxxl col-lg-4 col-12 form-group">
                    <label>Number Of Beds</label>
                    <Select
                      name="roomNumber"
                      value={bedsNumber.find(
                        (a) => a.value === formValue.bedsNumber
                      )}
                      options={bedsNumber}
                      onChange={(e) => {
                        setFormValue({ ...formValue, bedsNumber: e.value });
                      }}
                      required
                    />
                  </div>

                  <div className="col-12-xxxl col-lg-6 col-12 form-group">
                    <label>Cost Per Bed</label>
                    <input
                      type="text"
                      placeholder="$00.00"
                      name="costBeds"
                      className="form-control"
                      value={formValue.costBeds}
                      onChange={(e) =>
                        setFormValue({ ...formValue, costBeds: e.target.value })
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
        {/* <!-- Add Room Area End Here --> */}
        {/* <!-- All Room List Area Start Here --> */}
        <div className="col-8-xxxl col-12">
          <div className="card height-auto">
            <div className="card-body">
              <div className="heading-layout1">
                <div className="item-title">
                  <h3>Hostel Room Lists</h3>
                </div>
                <div className="dropdown">
                  <Link
                    className="dropdown-toggle"
                    to="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    onClick={getHostels}
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
                    <Link className="dropdown-item" to="#" onClick={getHostels}>
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
                      placeholder="Search by Hostel ..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-3 col-12 form-group">
                    <input
                      type="text"
                      placeholder="Search by Room ..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-3 col-12 form-group">
                    <input
                      type="text"
                      placeholder="Search by Bed ..."
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
              <div className="table-responsive p-1">
                <Table
                  className="table display school-table text-nowrap"
                  heading={columns}
                  data={hostel}
                  edit={editHostel}
                  delete={deleteConfirm}
                ></Table>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- All Room List Area End Here --> */}
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
