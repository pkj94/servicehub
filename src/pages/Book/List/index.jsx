import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  listLibrary,
  deleteLibrary,
  getLibrary,
} from "../../../redux/actions/library";
import Layout from "../../Layout";
import Table from "../../../commons/components/Table";
import { getFormValues } from "../../../utils/getFormValues";
import Confirm from "../../../commons/components/Confirm";
const columns = [
  {
    type: "checkbox",
    label: "Book Name",
    key: "bookName",
    pad: 10,
    prefix: "SCH-",
  },
  {
    label: "Subject",
    key: "subject",
  },
  {
    label: "Writter Name",
    key: "writterName",
  },
  {
    label: "Class",
    key: "class",
  },
  {
    label: "ID",
    key: "idNo",
  },
  {
    label: " Publish Date",
    key: "publishingDate",
  },
  {
    label: " Upload Date",
    key: "uploadDate",
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
  const library = useSelector((state) => state.library.data || []);
  const [limit] = useState(10);
  const [id, setId] = useState("");
  const [deleteConfirmPopup] = useState("confirm-school-delete");
  const [query, setQuery] = useState({});
  useEffect(() => {
    getLibraries();
  }, []);
  useEffect(() => {
    getLibraries();
  }, [query]);
  
  const getLibraries = () => {
    let obj = {};
    Object.keys(query).map((a) => {
      if (query[a]) {
        obj[a] = query[a];
      }
      return a;
    });
    dispatch(listLibrary(obj, limit));
  };

  const editLibrary = (e) => {
    history.push("/book-edit/" + e);
  };
  const deleteConfirm = (e) => {
    setId(e);
    window.$("#" + deleteConfirmPopup).modal("show");
  };

  const deleteS = (e) => {
    if (e) {
      dispatch(deleteLibrary(id));
      getLibrary();
    }
    window.$("#" + deleteConfirmPopup).modal("hide");
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
          <li>All Library Books</li>
        </ul>
      </div>
      {/* <!-- Breadcubs Area End Here -->
            <!-- Teacher Table Area Start Here --> */}
      <div className="card height-auto">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3>All Books</h3>
            </div>
            <div className="dropdown">
              <Link
                className="dropdown-toggle"
                to="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
                onClick={getLibraries}
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
          <form className="mg-b-20">
            <div className="row gutters-8">
              <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                <input
                  type="text"
                  placeholder="Search by ID ..."
                  className="form-control"
                />
              </div>
              <div className="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                <input
                  type="text"
                  placeholder="Search by Name ..."
                  className="form-control"
                />
              </div>
              <div className="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                <input
                  type="text"
                  placeholder="Search by Phone ..."
                  className="form-control"
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
          <div className="table-responsive">
          <Table
              className="table display school-table text-nowrap"
              heading={columns}
              data={library}
              edit={editLibrary}
              delete={deleteConfirm}
            ></Table>
           </div>
        </div>
      </div>
      {/* <!-- Teacher Table Area End Here --> */}
      <Confirm
        id={deleteConfirmPopup}
        message="Are you sure?"
        confirm={deleteS}
      ></Confirm>
    </Layout>
  );
};

export default Index;
