
import React from 'react';
import Header from './Common/Header';
import Sidebar from './Common/Sidebar';
import Footer from './Common/Footer';
const Index = ({children}) => {
    return (
        <div id="wrapper" className="wrapper bg-ash">
            {/* <!-- Header Menu Area Start Here --> */}
            <Header></Header>
            {/* <!-- Header Menu Area End Here --> */}
            {/* <!-- Page Area Start Here --> */}
            <div className="dashboard-page-one">
                {/* <!-- Sidebar Area Start Here --> */}
                <Sidebar></Sidebar>
                {/* <!-- Sidebar Area End Here --> */}
                <div className="dashboard-content-one">
                    {/* <!-- Breadcubs Area Start Here --> */}
                    {children}
                    {/* <!-- Footer Area Start Here --> */}
                    <Footer></Footer>
                    {/* <!-- Footer Area End Here --> */}
                </div>
            </div>
        </div>
    );
}

export default Index;
