import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../Layout";
import Select from "react-select";
import { useHistory } from "react-router";
import {
  addAccounting,
  getAccounting,
  updateAccounting,
} from "../../../redux/actions/accounting";
import { useDispatch, useSelector } from "react-redux";

const statuses = [
  {value: "Paid", label: "Paid"},
  {value: "Due", label: "Due"},
  {value: "Others", label: "Others"}
];
 const expenses = [
  {value: "Salary", label: "Salary"},
  {value: "Transport", label: "Transport"},
  {value: "Maintanance", label: "Maintanance"},
  {value: "Purchase", label: "Purchase"},
  {value: "Utilizes", label: "Utilizes"},
   
 ]

const Index = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const accounting = useSelector((state) => state.accounting.data);
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
      dispatch(getAccounting(id));
    }
  }, []);
  useEffect(() => {
    
    setFormValue({ ...formValue, ...accounting });
    if (accounting && accounting._id && submitted) {
      history.push("/expense-list");
    }
  }, [accounting]);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (formValue._id) dispatch(updateAccounting(formValue, formValue._id));
    else dispatch(addAccounting(formValue));
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
          <li>Add New Expense</li>
        </ul>
      </div>
      {/* <!-- Breadcubs Area End Here --> */}
      {/* <!-- Add Expense Area Start Here --> */}
      <div className="card height-auto">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3>Add New Expense</h3>
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
          <form  onSubmit={(e) => onSubmit(e)} className="new-added-form">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>Name *</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="form-control"
                  value={formValue.name}
                  onChange={(e) =>
                    setFormValue({ ...formValue, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>ID No *</label>
                <input
                  type="text"
                  placeholder="ID No"
                  name="idno"
                  className="form-control"
                  value={formValue.idno}
                  onChange={(e) =>
                    setFormValue({ ...formValue, idno: e.target.value })
                  }
                  required
                />
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>Expanse Type *</label>
                <Select
                      name="expanseType"
                      value={expenses.find((a) => a.value === formValue.expanseType)}
                      options={expenses}
                      onChange={(e) => {
                        setFormValue({ ...formValue, expanseType: e.value });
                      }}
                      required
                    />
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>Amount *</label>
                <input
                  type="text"
                  placeholder="Amount"
                  name="amount"
                  className="form-control"
                  value={formValue.amount}
                  onChange={(e) =>
                    setFormValue({ ...formValue, amount: e.target.value })
                  }
                  required
                />
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  className="form-control"
                  value={formValue.phone}
                  onChange={(e) =>
                    setFormValue({ ...formValue, phone: e.target.value })
                  }
                  required
                />
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>E-Mail Address</label>
                <input
                  type="text"
                  placeholder="E-Mail Address"
                  name="email"
                  className="form-control"
                  value={formValue.email}
                  onChange={(e) =>
                    setFormValue({ ...formValue, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>Status</label>
                <Select
                      name="status"
                      value={statuses.find((a) => a.value === formValue.status)}
                      options={statuses}
                      onChange={(e) => {
                        setFormValue({ ...formValue, status: e.value });
                      }}
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
      {/* <!-- Add Expense Area End Here --> */}
    </Layout>
  );
};

export default Index;
