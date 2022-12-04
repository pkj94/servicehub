import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

const PrivateRoute = ({
    component: Component,
    accessLevel: accessRole,
    ...rest
}) => {
    const auth = useSelector(state => state.auth?.data);
    const roles = useSelector(state => state.role?.list?.data||[]);
    const role = roles?.find(item => item.name === accessRole);
    return (
        <Route
            {...rest}
            render={(props) =>
                // Todo: Redirect to access denied page instead of login if already loggedin
                auth?.accessToken && (!role || role?._id === (auth?.role?._id || auth?.role)) ?
                    (
                        <Component {...props} />
                    ) :
                    (
                        <Redirect to="/login" />
                    )
            }
        />
    )
};

export default PrivateRoute;