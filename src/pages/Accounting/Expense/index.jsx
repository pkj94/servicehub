import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Layout from "../../Layout";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
    listAccounting,
    deleteAccounting,
    getAccounting,
    listAcconting,
  } from "../../../redux/actions/accounting";
  import Table from "../../../commons/components/Table";
  import { getFormValues } from "../../../utils/getFormValues";
  import Confirm from "../../../commons/components/Confirm";
  const columns = [
    {
      type: "checkbox",
      label: "Name",
      key: "name",
      pad: 10,
      prefix: "EXP",
    },
    {
      label: "Expense Type",
      key: "expanseType",
    },
    {
      label: "Id No.",
      key: "idno",
    },
    
    {
        label: "Email",
        key: "email",
      },
    {
      label: "Phone",
      key: "phone",
    },
    {
      label: "  Status",
      key: "status",
    },
    {
        label: "Amount",
        key: "amount",
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
    const accounting = useSelector((state) => state.accounting.data || []);
    const [limit] = useState(10);
    const [id, setId] = useState("");
    const [deleteConfirmPopup] = useState("confirm-school-delete");
    const [query, setQuery] = useState({});
    useEffect(() => {
      getAccountings();
    }, []);
    useEffect(() => {
      getAccountings();
    }, [query]);
    
    const getAccountings = () => {
      let obj = {};
      Object.keys(query).map((a) => {
        if (query[a]) {
          obj[a] = query[a];
        }
        return a;
      });
      dispatch(listAcconting(obj, limit));
    };
  
    const editAccounting = (e) => {
      history.push("/expense-edit/" + e);
    };
    const deleteConfirm = (e) => {
      setId(e);
      window.$("#" + deleteConfirmPopup).modal("show");
    };
  
    const deleteS = (e) => {
      if (e) {
        dispatch(deleteAccounting(id));
        getAccounting();
      }
      window.$("#" + deleteConfirmPopup).modal("hide");
    };
  return (
    <Layout>
      {/* <!-- Breadcubs Area Start Here --> */}
      <div className="breadcrumbs-area">
        <h3>Accounts</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>All Expense</li>
        </ul>
      </div>
      {/* <!-- Breadcubs Area End Here --> */}
      {/* <!-- Expanse Table Area Start Here --> */}
      <div className="card height-auto">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3>All Expenses</h3>
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
                  placeholder="Search by Phone"
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
              data={accounting}
              edit={editAccounting}
              delete={deleteConfirm}
            ></Table>
           </div>
        </div>
      </div>
      {/* <!-- Expanse Table Area End Here --> */}
      <Confirm
        id={deleteConfirmPopup}
        message="Are you sure?"
        confirm={deleteS}
      ></Confirm>
    </Layout>
  );
};

export default Index;
