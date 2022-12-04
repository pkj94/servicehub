import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Index = (props) => {
    const menu = [
        {
            label: "Dashboard",
            link: "#",
            icon: "flaticon-dashboard",
            children: [
                {
                    label: "Admin",
                    link: "/admin-dashboard",
                },
                {
                    label: "Students",
                    link: "/student-dashboard",
                },
                {
                    label: "Parents",
                    link: "/parent-dashboard",
                },
                {
                    label: "Teachers",
                    link: "/teacher-dashboard",
                },
            ]
        },
        {
            label: "School",
            link: "#",
            icon: "flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler",
            children: [
                {
                    label: "All Schools",
                    link: "/school-list"
                },
                {
                    label: "Add School",
                    link: "/school-add"
                },
            ]
        },
        {
            label: "Students",
            link: "#",
            icon: "flaticon-classmates",
            children: [
                {
                    label: "All Students",
                    link: "/student-list"
                },
                {
                    label: "Student Details",
                    link: "/student-detail"
                },
                {
                    label: "Admission Form",
                    link: "/student-admission"
                },
                {
                    label: "Student Promotion",
                    link: "/student-promotion"
                },
            ]
        },
        {
            label: "Teachers",
            link: "#",
            icon: "flaticon-multiple-users-silhouette",
            children: [
                {
                    label: "All Teachers",
                    link: "/teacher-list"
                },
                {
                    label: "Teacher Details",
                    link: "/teacher-detail"
                },
                {
                    label: "Add Teacher",
                    link: "/teacher-add"
                },
                {
                    label: "Payment",
                    link: "/teacher-payment"
                },
            ]
        },
        {
            label: "Parents",
            link: "#",
            icon: "flaticon-couple",
            children: [
                {
                    label: "All Parents",
                    link: "/parent-list"
                },
                {
                    label: "Parent Details",
                    link: "/parent-detail"
                },
                {
                    label: "Add Parent",
                    link: "/parent-add"
                },
            ]
        },
        {
            label: "Library",
            link: "#",
            icon: "flaticon-books",
            children: [
                {
                    label: "All Books",
                    link: "/book-list"
                },
                {
                    label: "Add Book",
                    link: "/book-add"
                },
            ]
        },
        {
            label: "Accounting",
            link: "#",
            icon: "flaticon-technological",
            children: [
                {
                    label: "All Fees Collection",
                    link: "/fee-list"
                },
                {
                    label: "Expenses",
                    link: "/expense-list"
                },
                {
                    label: "Add Expense",
                    link: "/expense-add"
                },
            ]
        },
        {
            label: "Class",
            link: "#",
            icon: "flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler",
            children: [
                {
                    label: "All Classes",
                    link: "/class-list"
                },
                {
                    label: "Add Class",
                    link: "/class-add"
                },
            ]
        },
        {
            label: "Subject",
            link: "/subject-list",
            icon: "flaticon-open-book",
            children: []
        },
        {
            label: "Class Routine",
            link: "/class-routine",
            icon: "flaticon-calendar",
            children: []
        },
        {
            label: "Attendence",
            link: "/attendence",
            icon: "flaticon-checklist",
            children: []
        },
        {
            label: "Exam",
            link: "#",
            icon: "flaticon-shopping-list",
            children: [
                {
                    label: "Exam Schedule",
                    link: "/exam-list"
                },
                {
                    label: "Exam Grades",
                    link: "/exam-result-list"
                },
            ]
        },
        {
            label: "Transport",
            link: "/transport",
            icon: "flaticon-bus-side-view",
            children: []
        },
        {
            label: "Hostel",
            link: "/hostels",
            icon: "flaticon-bed",
            children: []
        },
        {
            label: "Notice",
            link: "/notices",
            icon: "flaticon-script",
            children: []
        },
        // {
        //     label: "Messeage",
        //     link: "/messages",
        //     icon: "flaticon-chat",
        //     children: []
        // },
        {
            label: "Users",
            link: "/users",
            icon: "flaticon-settings",
            children: []
        },
    ];
    useEffect(() => {
        /*-------------------------------------
     Sidebar Toggle Menu
   -------------------------------------*/
        if (window.$) {
            window.$('.sidebar-toggle-view').on('click', '.sidebar-nav-item .nav-link', function (e) {
                if (!window.$(this).parents('#wrapper').hasClass('sidebar-collapsed')) {
                    var animationSpeed = 300,
                        subMenuSelector = '.sub-group-menu',
                        $this = window.$(this),
                        checkElement = $this.next();
                    if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
                        checkElement.slideUp(animationSpeed, function () {
                            checkElement.removeClass('menu-open');
                        });
                        checkElement.parent(".sidebar-nav-item").removeClass("active");
                    } else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
                        var parent = $this.parents('ul').first();
                        var ul = parent.find('ul:visible').slideUp(animationSpeed);
                        ul.removeClass('menu-open');
                        var parent_li = $this.parent("li");
                        checkElement.slideDown(animationSpeed, function () {
                            checkElement.addClass('menu-open');
                            parent.find('.sidebar-nav-item.active').removeClass('active');
                            parent_li.addClass('active');
                        });
                    }
                    if (checkElement.is(subMenuSelector)) {
                        e.preventDefault();
                    }
                } else {
                    if (window.$(this).attr('href') === "#") {
                        e.preventDefault();
                    }
                }
            });

            /*-------------------------------------
                Sidebar Menu Control
              -------------------------------------*/
            window.$(".sidebar-toggle").on("click", function () {
                window.setTimeout(function () {
                    window.$("#wrapper").toggleClass("sidebar-collapsed");
                }, 500);
            });

            /*-------------------------------------
                Sidebar Menu Control Mobile
              -------------------------------------*/
            window.$(".sidebar-toggle-mobile").on("click", function () {
                window.$("#wrapper").toggleClass("sidebar-collapsed-mobile");
                if (window.$("#wrapper").hasClass("sidebar-collapsed")) {
                    window.$("#wrapper").removeClass("sidebar-collapsed");
                }
            });
        }
    }, [])
    return (
        <div className="sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color">
            <div className="mobile-sidebar-header d-md-none">
                <div className="header-logo">
                    <Link to="/"><img src="img/logo1.png" alt="logo" /></Link>
                </div>
            </div>
            <div className="sidebar-menu-content">
                <ul className="nav nav-sidebar-menu sidebar-toggle-view">
                    {menu.map((m, i) => (
                        <li key={'main-menu-' + i} className={"nav-item " + (m.children.length ? "sidebar-nav-item " : "") + (m.children.filter(a => a.link === window.location.pathname).length ? 'active' : '')}>
                            <Link to={m.link} className={"nav-link " + (window.location.pathname === m.link ? 'menu-active' : "")} >
                                <i className={m.icon}></i>
                                <span>{m.label}</span>
                            </Link>
                            {m.children && m.children.length ?
                                <ul className={"nav sub-group-menu " + (m.children.filter(a => a.link === window.location.pathname).length ? 'sub-group-active' : '')} >
                                    {m.children.map((child, j) => (
                                        <li key={'sub-menu-' + i + '-' + j} className="nav-item">
                                            <Link to={child.link} className={"nav-link " + (window.location.pathname === child.link ? 'menu-active' : "")}>
                                                <i className="fas fa-angle-right"></i>
                                                {child.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul >
                                : null
                            }
                        </li >
                    ))}
                </ul >
            </div >
        </div >
    );
}

export default Index;
