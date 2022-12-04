import React from 'react';
import { ROLES } from '../commons/constants';
import PrivateRoute from '../commons/interceptors/hoc/PrivateRoute';
import { ExpenseAdd, ExpenseList, FeeList } from '../pages/Accounting';
import { SchoolAdd, SchoolList } from '../pages/School';
import { Attendence } from '../pages/Attendence';
import { BookAdd, BookList } from '../pages/Book';
import { ClassAdd, ClassList } from '../pages/Class';
import { Admin, Parent, Student, Teacher } from '../pages/Dashboard';
import { ExamGrade, ExamList } from '../pages/Exam';
import { HostelList } from '../pages/Hostel';
import { NoticeList } from '../pages/Notice';
import { ParentAdd, ParentDetail, ParentList } from '../pages/Parent';
import { StudentAdmission, StudentDetail, StudentList, StudentPoromotion } from '../pages/Student';
import { SubjectList } from '../pages/Subject';
import { TeacherList, TeacherAdd, TeacherPayment, TeacherDetail } from '../pages/Teacher';
import { Timetable } from '../pages/Timetable';
import { Transport } from '../pages/Transport';
import { Profile, UserList } from '../pages/User';


const Routes = () => {
    return (
        <>
            {/* Dashboards */}
            <PrivateRoute exact path='/admin-dashboard' component={Admin} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/student-dashboard' component={Student} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/teacher-dashboard' component={Teacher} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/parent-dashboard' component={Parent} accessLevel={ROLES.Admin} />
            {/* Student */}
            <PrivateRoute exact path='/student-list' component={StudentList} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/student-detail' component={StudentDetail} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/student-admission' component={StudentAdmission} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/student-promotion' component={StudentPoromotion} accessLevel={ROLES.Admin} />
            {/* Teacher */}
            <PrivateRoute exact path='/teacher-list' component={TeacherList} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/teacher-detail' component={TeacherDetail} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/teacher-add' component={TeacherAdd} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/teacher-edit/:id' component={TeacherAdd} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/teacher-payment' component={TeacherPayment} accessLevel={ROLES.Admin} />
            {/* Parent */}
            <PrivateRoute exact path='/parent-list' component={ParentList} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/parent-detail/:id' component={ParentDetail} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/parent-add' component={ParentAdd} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/parent-edit/:id' component={ParentAdd} accessLevel={ROLES.Admin} />
            {/* Library */}
            <PrivateRoute exact path='/book-list' component={BookList} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/book-add' component={BookAdd} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/book-edit/:id' component={BookAdd} accessLevel={ROLES.Admin} />
            {/* Accounting */}
            <PrivateRoute exact path='/fee-list' component={FeeList} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/expense-add' component={ExpenseAdd} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/expense-edit/:id' component={ExpenseAdd} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/expense-list' component={ExpenseList} accessLevel={ROLES.Admin} />
            {/* Class */}
            <PrivateRoute exact path='/class-list' component={ClassList} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/class-add' component={ClassAdd} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/class-edit/:id' component={ClassAdd} accessLevel={ROLES.Admin} />
            {/* School */}
            <PrivateRoute exact path='/school-list' component={SchoolList} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/school-add' component={SchoolAdd} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/school-edit/:id' component={SchoolAdd} accessLevel={ROLES.Admin} />
            {/* Subject */}
            <PrivateRoute exact path='/subject-list' component={SubjectList} accessLevel={ROLES.Admin} />
            {/* Class Routine (Timetable) */}
            <PrivateRoute exact path='/class-routine' component={Timetable} accessLevel={ROLES.Admin} />
            {/* Class Attendence */}
            <PrivateRoute exact path='/attendence' component={Attendence} accessLevel={ROLES.Admin} />
            {/* Exam */}
            <PrivateRoute exact path='/exam-list' component={ExamList} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/exam-result-list' component={ExamGrade} accessLevel={ROLES.Admin} />
            {/* Transport */}
            <PrivateRoute exact path='/transport' component={Transport} accessLevel={ROLES.Admin} />
            {/* Hostel */}
            <PrivateRoute exact path='/hostels' component={HostelList} accessLevel={ROLES.Admin} />
            {/* Notice */}
            <PrivateRoute exact path='/notices' component={NoticeList} accessLevel={ROLES.Admin} />
            {/* User */}
            <PrivateRoute exact path='/users' component={UserList} accessLevel={ROLES.Admin} />
            <PrivateRoute exact path='/profile' component={Profile} accessLevel={ROLES.Admin} />
        </>
    )
}

export default Routes;