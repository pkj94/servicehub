import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { listSchools, deleteSchool } from "../../../redux/actions/school";
import Layout from "../../Layout";
import Table from "../../../commons/components/Table";
import { getFormValues } from "../../../utils/getFormValues";
import Confirm from "../../../commons/components/Confirm";
const columns = [
  {
    type: "checkbox",
    label: "ID",
    key: "schoolId",
    pad: 10,
    prefix: "SCH-",
  },
  {
    label: "Name",
    key: "name",
  },
  {
    label: "Email",
    key: "email",
  },
  {
    label: "Mobile No.",
    key: "phone",
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
  const history = useHistory();
  const dispatch = useDispatch();
  const schools = useSelector((state) => state.school.data || []);
  const [limit] = useState(10);
  const [id, setId] = useState("");
  const [deleteConfirmPopup] = useState("confirm-school-delete");
  const [query, setQuery] = useState({});

  useEffect(() => {
    getSchools();
  }, []);
  useEffect(() => {
    getSchools();
  }, [query]);
  useEffect(() => {
    window.$(".checkAll").on("click", function () {
      window
        .$(this)
        .parents(".table")
        .find("input:checkbox")
        .prop("checked", this.checked);
    });
    if (schools.length)
      setTimeout(() => {
        if (window.$.fn.DataTable !== undefined) {
          if (window.$.fn.dataTable.isDataTable(".school-table")) {
            window.$(".school-table").DataTable();
          } else {
            window.$(".school-table").DataTable({
              paging: true,
              searching: false,
              info: false,
              lengthChange: false,
              lengthMenu: [20, 50, 75, 100],
              columnDefs: [
                {
                  targets: [0, -1], // column or columns numbers
                  orderable: false, // set orderable for selected columns
                },
              ],
            });
          }
        }
      }, 100);
  }, [schools]);
  const getSchools = () => {
    let obj = {};
    Object.keys(query).map((a) => {
      if (query[a]) {
        obj[a] = query[a];
      }
      return a;
    });
    dispatch(listSchools(obj, limit));
  };
  const search = (e) => {
    e.preventDefault();
    let obj = { searchFields: "name,phone" };
    obj = { ...obj, ...getFormValues(e) };
    setQuery({ ...query, ...obj });
  };
  const editSchool = (e) => {
    history.push("/school-edit/" + e);
  };
  const deleteConfirm = (e) => {
    setId(e);
    window.$("#" + deleteConfirmPopup).modal("show");
  };

  const deleteS = (e) => {
    if (e) {
      dispatch(deleteSchool(id));
      getSchools();
    }
    window.$("#" + deleteConfirmPopup).modal("hide");
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
          <li>All Schools</li>
        </ul>
      </div>
      {/* <!-- Breadcubs Area End Here -->
            <!-- School Table Area Start Here --> */}
      <div className="card height-auto">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3>All School Schedules</h3>
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
                {/* <Link className="dropdown-item" to="#"><i className="fas fa-times text-orange-red"></i>Close</Link>
                                <Link className="dropdown-item" to="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link> */}
                <Link className="dropdown-item" to="#" onClick={getSchools}>
                  <i className="fas fa-redo-alt text-orange-peel"></i>Refresh
                </Link>
              </div>
            </div>
          </div>
          <form className="mg-b-20" onSubmit={(e) => search(e)}>
            <div className="row gutters-8">
              <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                <input
                  type="text"
                  placeholder="Search by ID ..."
                  name="schoolId"
                  className="form-control"
                />
              </div>
              <div className="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                <input
                  type="text"
                  placeholder="Search ..."
                  className="form-control"
                  name="search"
                />
              </div>
              <div className="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                <input
                  type="text"
                  placeholder="Search by Email ..."
                  className="form-control"
                  name="email"
                />
              </div>
              <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
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
              data={schools}
              edit={editSchool}
              delete={deleteConfirm}
            ></Table>
          </div>
        </div>
      </div>
      {/* <!-- School Table Area End Here --> */}
      <Confirm
        id={deleteConfirmPopup}
        message="Are you sure?"
        confirm={deleteS}
      ></Confirm>
    </Layout>
  );
};

export default Index;
