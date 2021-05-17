import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Barra.css";
import api from "../../services/api";
import { AppBar, Menu, MenuItem, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, InputBase } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { IconContext } from "react-icons";
import { GiSpotedFlower, GiRake } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FiMenu } from "react-icons/fi"
import { RiAccountPinCircleFill } from "react-icons/ri";
import { FormText } from "react-bootstrap";


function Barra(props) {
    const history = useHistory();
    const [paginaAtual, setPaginaAtual] = useState("/home");
    const [open, setOpen] = useState(false);
    const [evento, setEvento] = React.useState(false);
    const [nome, setNome] = useState();
    load();

    async function load(){
        const response = await api.get('/barra');
        setNome(response.data);
    }


    function clicou(pathName) {
        history.push(pathName);
        setPaginaAtual(pathName);
    }

    function logout(pathName) {
        history.push(pathName);
        setPaginaAtual(pathName);
        sessionStorage.removeItem('@flor/email');
        sessionStorage.removeItem('@flor-Token');
        sessionStorage.removeItem('@flor/dados');
    }

    function abrirMenu(isOpen) {
        setOpen(isOpen);
    }

    const handleClick = (e) => {
        setEvento(e.currentTarget);
    };

    const handleClose = () => {
        setEvento(false);
    };

    const pages = [
        {
            pathName: "/home",
            icon: <GiSpotedFlower />,
            text: "Home",
            iconSize: "1.5em",
        },
        {
            pathName: "/lista",
            icon: <AiOutlineShoppingCart />,
            text: "Minha Lista",
            iconSize: "1.5em",
        },
        {
            pathName: "/livre",
            icon: <GiRake />,
            text: "Página Livre",
            iconSize: "1.5em",
        },
    ];

    return (
        <div>
            <AppBar position="static">
                
                <Toolbar style={{ backgroundColor: "#f3dc01" }}>

                    <IconButton
                        edge="start"
                        aria-label="menu"
                        onClick={() => abrirMenu(!open)}
                    >
                        <FiMenu />
                    </IconButton>

                    <img className="logoBarra" alt="Logo" onClick={()=> clicou("home")} src="/images/nome_horizontal.png" />


                    <div className="pesquisaBarra">
                        <IconButton>
                            <SearchIcon style={{ color: "black", opacity: "35%" }} />
                        </IconButton>
                        <InputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>


                    <IconContext.Provider value={{ size: "1.5rem", className: "carrinhoBarra" }}>
                        <div>
                            <IconButton>
                                <AiOutlineShoppingCart />
                            </IconButton>
                        </div>
                    </IconContext.Provider>



                    <div className="userContainerBarra">

                        <FormText className="userNameBarra" onClick={() => history.push("/home")}>
                        {nome}
                        </FormText>

                        <IconContext.Provider value={{ className: "usuarioBarra" }}>
                            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                <RiAccountPinCircleFill />
                            </IconButton>
                        </IconContext.Provider>


                        <Menu
                            id="simple-menu"
                            anchorEl={evento}
                            keepMounted
                            open={Boolean(evento)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => { clicou("/perfil") }}>Perfil</MenuItem>
                            <MenuItem onClick={() => { logout("/login") }}>Logout</MenuItem>
                        </Menu>
                    </div>


                </Toolbar>
            </AppBar>
            {props.children}
            <Drawer open={open} onClose={() => abrirMenu(false)}>
                <List className="listaBarra">
                    {pages.map((listItem) => {
                        return (
                            <ListItem
                                button
                                selected={paginaAtual === listItem.pathName}
                                onClick={() => {
                                    clicou(listItem.pathName);
                                }}
                            >
                                <IconContext.Provider value={{ size: listItem.Size }}>
                                    {listItem.icon}
                                </IconContext.Provider>
                                <ListItemText className="listItemTextBarra">
                                    {listItem.text}
                                </ListItemText>
                            </ListItem>

                        );
                    })}

                </List>
            </Drawer></div>





    );
}

export default Barra;