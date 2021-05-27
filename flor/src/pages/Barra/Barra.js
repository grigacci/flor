import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Barra.css";
import { AppBar, Menu, MenuItem, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, InputBase } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { IconContext } from "react-icons";
import { GiSpotedFlower, GiRake } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FiMenu } from "react-icons/fi"
import { RiAccountPinCircleFill, RiDatabase2Line, RiDatabaseFill } from "react-icons/ri";
import { FormText, Modal, Button } from "react-bootstrap";



function Barra(props) {
    const history = useHistory();
    const [paginaAtual, setPaginaAtual] = useState("/home");
    const [open, setOpen] = useState(false);
    const [abrir, setAbrir] = useState(false);
    const [evento, setEvento] = React.useState(false);
    const [showModal, setShowModal] = useState(false);
    const [comprar, setComprar] = useState(false);
    let nome;
    const dados = sessionStorage.getItem('@flor/dados');
    const data = JSON.parse(sessionStorage.getItem('@flor/carrinho'));
    console.log(data)

    if (dados) {
        nome = dados.name;
    }
    else {
        nome = "Visitante"
    }
    function abrirCarrinho(e) {
        setAbrir(e.currentTarget);
    }
    function fecharCarrinho() {
        setAbrir(false)
    }
    function abrirModal() {
        setShowModal(true);

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

                    <img className="logoBarra" alt="Logo" onClick={() => clicou("home")} src="/images/nome_horizontal.png" />


                    <div className="pesquisaBarra">
                        <IconButton>
                            <SearchIcon style={{ color: "black", opacity: "35%" }} />
                        </IconButton>
                        <InputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    <div>
                        <IconContext.Provider value={{ size: "1.5rem", className: "carrinhoBarra" }}>

                            <IconButton onClick={abrirCarrinho} aria-controls="simple-produto" aria-haspopup="true">

                                <AiOutlineShoppingCart />
                            </IconButton>

                            <Menu
                                id="simple-produto"
                                anchorEl={abrir}
                                keepMounted
                                open={Boolean(abrir)}
                                onClose={fecharCarrinho}
                                className="carrinhoproduto"
                            >
                                <MenuItem onClick={abrirModal}>Produtos</MenuItem>

                            </Menu>
                        </IconContext.Provider>

                        <Modal
                            show={showModal}
                            onHide={() => setShowModal(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            style={{ alignItems: "center" }}
                        >
                            <h3 style={{ alignSelf: "center" }}>Modal</h3>

                            <Modal.Body>
                                {
                                    data &&
                                    data.map((listItem, index) => {
                                        return (
                                            <card>
                                                <p>{listItem.item}, quantidade : {listItem.quantidade}, preco :{listItem.preco}</p>
                                            </card>
                                        );
                                    }
                                    )
                                }
                            </Modal.Body>
                            <Modal.Footer>
                                <Button >Comprar</Button>
                                <Button onClick={() => setShowModal(false)}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>

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
                                    setOpen(false);

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


export default Barra ;