import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Menu.css";

import { AppBar, Avatar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Typography, InputBase } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { IconContext } from "react-icons";
import { GiSpotedFlower, GiRake } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FiMenu } from "react-icons/fi"



function Menu() {

    const history = useHistory();
    const [paginaAtual, setPaginaAtual] = useState("/home");
    const [open, setOpen] = useState(false);

    function clicou(pathName) {
        history.push(pathName);
        setPaginaAtual(pathName);
    }

    function abrirMenu(isOpen) {
        setOpen(isOpen);
    }

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
        <>
            <AppBar position="static">
                <Toolbar style={{ backgroundColor: "#f3dc01" }}>
                    <IconButton
                        edge="start"
                        aria-label="menu"
                        onClick={() => abrirMenu(!open)}
                    >
                        <FiMenu />
                    </IconButton>

                    <img className="logo" src="/images/nome_horizontal.png" />

                    <div className="barraPesquisa">
                        <IconButton>
                        <SearchIcon style={{ color: "black", opacity: "35%" }} /> 
                        </IconButton>
                        <InputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    <IconContext.Provider value={{size: "1.5rem", className: "carrinho" }}>
                        <div>
                            <IconButton>
                                <AiOutlineShoppingCart />
                            </IconButton>
                        </div>
                    </IconContext.Provider>

                    <div className="userContainer">
                        <p className="userName">Gilson Roberto Santos</p>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </div>
                </Toolbar>
            </AppBar>


            <Drawer open={open} onClose={() => abrirMenu(false)}>
                <List className="lista">
                    {pages.map((listItem) => {
                        return (
                            <ListItem
                                button
                                selected={paginaAtual === "listItem.pathName"}
                                onClick={() => {
                                    clicou(listItem.pathName);
                                }}
                            >
                                <IconContext.Provider value={{ size: listItem.Size }}>
                                    {listItem.icon}
                                </IconContext.Provider>
                                <ListItemText className="listItemText">
                                    {listItem.text}
                                </ListItemText>
                            </ListItem>

                        );
                    })}

                </List>
            </Drawer>
        </>

    );
}

export default Menu;