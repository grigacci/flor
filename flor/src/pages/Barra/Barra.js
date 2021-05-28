import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Barra.css";
import {
  AppBar,
  Menu,
  MenuItem,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  InputBase,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { IconContext } from "react-icons";
import { GiSpotedFlower, GiRake } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { FormText, Button } from "react-bootstrap";

function Barra(props) {
  const history = useHistory();
  const [paginaAtual, setPaginaAtual] = useState("/home");
  const [open, setOpen] = useState(false);
  const [abrir, setAbrir] = useState(false);
  const [evento, setEvento] = React.useState(false);
  const [showModal, setShowModal] = useState(false);
  const [comprar, setComprar] = useState(false);

  let nome;
  const dados = JSON.parse(sessionStorage.getItem("@flor/dados"));
  const data = JSON.parse(sessionStorage.getItem("@flor/carrinho"));

  function handleBar() {
    if (data) setComprar(1);
    setShowModal(false);
  }
  if (comprar === 1) sessionStorage.setItem("@flor/bool", true);

  if (dados) {
    nome = dados.name;
  } else {
    nome = "Visitante";
  }
  function abrirCarrinho(e) {
    setAbrir(e.currentTarget);
  }
  function fecharCarrinho() {
    setAbrir(false);
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
    sessionStorage.removeItem("@flor/email");
    sessionStorage.removeItem("@flor-Token");
    sessionStorage.removeItem("@flor/dados");
    sessionStorage.removeItem("@flor/carrinho");
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
  let subtotal = 0;
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

          <img
            className="logoBarra"
            alt="Logo"
            onClick={() => clicou("home")}
            src="/images/nome_horizontal.png"
          />

          <div className="pesquisaBarra">
            <IconButton>
              <SearchIcon style={{ color: "black", opacity: "35%" }} />
            </IconButton>
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <div>
            <IconContext.Provider
              value={{ size: "1.5rem", className: "carrinhoBarra" }}
            >
              <IconButton
                onClick={abrirCarrinho}
                aria-controls="simple-produto"
                aria-haspopup="true"
              >
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

            <Drawer
              anchor={"right"}
              open={showModal}
              onClose={() => setShowModal(false)}
            >
              <List className={"drawerBar"}>
                <h2 style={{ display: "flex", justifyContent: "center" }}>
                  Seu Carrinho
                </h2>
                <br></br>
                {data &&
                  data.map((listItem) => {
                    subtotal = subtotal + listItem.preco;
                    var nome = `/images/${listItem.id}.jpg`;
                    return (
                      <>
                        <ListItem style={{ backgroundColor: "#e9e9e9" }}>
                          <card
                            style={{
                              backgroundColor: "#e9e9e9",
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            <img src={nome} className="imgCarBar"></img>
                            <div className="descricaoProdBar">
                              <p className="textItemBar">
                                {listItem.item} &nbsp;
                              </p>
                              <p className="textItemBar">
                                Un:{listItem.quantidade} &nbsp;
                              </p>
                              <p className="textItemBar">
                                R${listItem.preco} &nbsp;
                              </p>
                            </div>
                          </card>
                        </ListItem>
                        <div className="linhaBar" />
                      </>
                    );
                  })}

               
              </List>
              <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom:"5px",
                    backgroundColor: "#e9e9e9",
                  }}
                >
                  <h4
                    style={{
                      display: "flex",
                      marginLeft: "2rem",
                      marginRight: "1rem",
                      
                    }}
                  >
                    Subtotal: {subtotal} Reais
                  </h4>
                  <Button
                    style={{
                      display: "flex",
                      marginLeft: "auto",
                      marginRight: "2rem",
                    }}
                    className="botao"
                    onClick={handleBar}
                  >
                    Comprar
                  </Button>
                </div>
            </Drawer>
          </div>

          <div className="userContainerBarra">
            <FormText
              className="userNameBarra"
              onClick={() => history.push("/home")}
            >
              {nome}
            </FormText>

            <IconContext.Provider value={{ className: "usuarioBarra" }}>
              <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
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
              <MenuItem
                onClick={() => {
                  clicou("/perfil");
                }}
              >
                Perfil
              </MenuItem>
              <MenuItem
                onClick={() => {
                  logout("/login");
                }}
              >
                Logout
              </MenuItem>
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
      </Drawer>
    </div>
  );
}

export default Barra;
