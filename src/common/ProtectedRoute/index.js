import React from 'react';
import {
    Redirect,
    Route,
} from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {

    const { user, loading } = useAuth();

    return (
        <Route
            {...rest}
            render={(props) => {
                if (user || (!user && loading)) {
                    return <Component />;
                } else {
                    return (
                        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
                    )
                }
            }}
        />
    );
}

export default ProtectedRoute;