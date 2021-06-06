import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = localStorage.getItem("token");

    return (
        <Route
            {...rest}
            render={(props) => {
                if (auth) return <Component {...props} />;
                return <Redirect to="/login" />;
            }}
        />
    );
};

export default PrivateRoute;
