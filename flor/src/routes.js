import React from "react";
import { BrowserRouter , Switch , Route} from "react-router-dom";
import Home from "./pages/Home";
import Lista from "./pages/Lista";
import Livre from "./pages/Livre";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Cadastro from "./pages/Cadastro"
import Footer from "./pages/Footer";

function Routes(){
    return(
        <BrowserRouter>
         <Switch>
            <Route exact path="/" component={Hud}/>
            <Route exact path="/home" component={Hud}/>
            <Route exact path="/lista" component={Hud}/>
            <Route exact path="/livre" component={Hud}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/perfil" component={Hud}/>
            <Route exact path="/cadastro" component={Cadastro}/>
            <Route exact path="/temp" component={Footer}/>
         </Switch>
        </BrowserRouter>
    )
}

function Hud(){
    return (
        <Footer>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/lista" component={Lista}/>
        <Route exact path="/livre" component={Livre}/>
        <Route exact path="/perfil" component={Perfil}/>
     </Switch>
     </Footer>
    )
}

export default Routes;