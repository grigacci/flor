import React from "react";
import { BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Barra from "./pages/Barra";
import Lista from "./pages/Lista";
import Livre from "./pages/Livre";
import Perfil from "./pages/Perfil";
import Footer from "./pages/Footer";
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isAuthenticated() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/temp" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro" component={Cadastro} />
                <Route path="/" component={UserMenu} />
            </Switch>
        </BrowserRouter>
    );

    function UserMenu() {
        return (

            <Footer>
                <Barra>

                    <Switch>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/barra" component={Barra} />
                        <Route path="/lista" component={Lista} />
                        <Route path="/livre" component={Livre} />
                        <PrivateRoute path="/perfil" component={Perfil} />
                        <Route path="/footer" component={Footer} />
                        <Route component={() => <Redirect to="/home"></Redirect>}></Route>
                    </Switch>

                </Barra>                
            </Footer>


        );
    }
}
export default Routes;

