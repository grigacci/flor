import React from "react";
import { BrowserRouter , Switch , Route} from "react-router-dom";
import Home from "./pages/Home";
import Lista from "./pages/Lista";
import Livre from "./pages/Livre";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
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
         </Switch>
        </BrowserRouter>
    )
}

export default Routes;