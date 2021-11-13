import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = React.useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }
    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map((route, index) =>
                    <Route
                        key={index}
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                    />
                )}
                <Redirect to='/posts'/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map((route, index) =>
                    <Route
                        key={index}
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                    />
                )}
                <Redirect to='/login'/>
            </Switch>
    );
};

export default AppRouter;