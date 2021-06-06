import { BrowserRouter, Switch, Route } from "react-router-dom";

import PrivateRouter from "./helpers/PrivateRouter";
import Login from "./components/Login";
import Account from "./components/Account";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />

                {/* PRIVATE ROUTES */}
                <PrivateRouter path="/" component={Account} exact />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
