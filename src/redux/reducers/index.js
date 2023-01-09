import { combineReducers } from "redux";
import auth from "./auth";
import classes from "./class";
import school from "./school";
import student from "./student";
import teacher from "./teacher";
import parent from "./parent";
import notice from "./notice";
import hostel from "./hostel";
import transport from "./transport";
import exam from "./exam";
import examGrade from "./examGrade";
import library from "./library";
import accounting from "./accounting";
import subject from "./subject";

export default combineReducers({
  auth,
  classes,
  school,
  student,
  teacher,
  parent,
  notice,
  hostel,
  transport,
  exam,
  examGrade,
  subject,
  library,
  accounting,
  subject,
});
