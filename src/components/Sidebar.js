import { Nav } from "react-bootstrap";
import { useLocation, NavLink } from "react-router-dom";

const Sidebar = ({ color, routes }) => {
    const location = useLocation();

    const activeRoute = (routeName) => {
        return location.pathname.indexOf(routeName) > -1 ? "active" : "";
    };

    return (
        <div className="sidebar" data-color={color}>
            <div className="sidebar-wrapper">
                <Nav>
                    {routes.map((prop, key) => {
                        return (
                            <li key={key}>
                                <NavLink
                                    to={prop.path}
                                    className="nav-link"
                                    activeClassName="active"
                                >
                                    <p>{prop.name}</p>
                                </NavLink>
                            </li>
                        );
                    })}
                </Nav>
            </div>
        </div>
    );
};

export default Sidebar;
