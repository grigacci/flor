import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Lista from "./pages/Lista";
import Livre from "./pages/Livre";
import Perfil from "./pages/Perfil";
import Footer from "./pages/Footer";


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro" component={Cadastro} />

                <Route path="/" component={UserMenu} />
            </Switch>
        </BrowserRouter>
    );

    function UserMenu() {
        return (
        <Footer>
            <Menu>
                
                    <Switch>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/menu" component={Menu} />
                        <Route path="/lista" component={Lista} />
                        <Route path="/livre" component={Livre} />
                        <Route path="/perfil" component={Perfil} />
                        <Route path="/footer" component={Footer} />
                        <Route component={() => <Redirect to="/home"></Redirect>}></Route>
                    </Switch>
                
            </Menu>
            </Footer>
        );
    }
}
export default Routes;



/*import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lista from "./pages/Lista";
import Livre from "./pages/Livre";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Menu from "./pages/Menu";
import Footer from "./pages/Footer";
import Cadastro from "./pages/Cadastro"*/


/*function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/perfil" component={Perfil} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/temp" component={Menu} />
                <Route exact path="/" component={Hud} />
            </Switch>
        </BrowserRouter>
    )
}

function Hud() {
    return (
        <Menu>
            <Footer>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/lista" component={Lista} />
                    <Route exact path="/livre" component={Livre} />
                    <Route exact path="/perfil" component={Perfil} />
                </Switch>
            </Footer>
        </Menu>
    );
}



export default Routes;*/