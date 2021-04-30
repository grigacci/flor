import React from "react";
import { BrowserRouter , Switch , Route} from "react-router-dom";
import Home from "./pages/Home";
import Lista from "./pages/Lista";
import Livre from "./pages/Livre";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Menu from "./pages/Menu";
import Footer from "./pages/Footer";
import Cadastro from "./pages/Cadastro"


function Routes(){
    return(
        <BrowserRouter>
         <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/lista" component={Lista}/>
            <Route path="/livre" component={Livre}/>
            <Route path="/login" component={Login}/>
            <Route path="/perfil" component={Perfil}/>
            <Route path="/cadastro" component={Cadastro}/>
            <Route path="/temp" component={Menu}/>
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