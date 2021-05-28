import React, { useState } from "react";
import { Button, Typography, Card } from "@material-ui/core";
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./ProdutoModal.css";
import { Form, Col } from "react-bootstrap"
import { GiLunarModule } from "react-icons/gi";


const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);
const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 36,
        '&$expanded': {
            minHeight: 36,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

function ProdutoModal({ data, open, onClose }) {
    const [expanded, setExpanded] = React.useState();
    const [n, seTn] = useState('1');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    function handleCar() {
        var z = JSON.parse(sessionStorage.getItem('@flor/carrinho'));
        console.log('z aqui:', z);
        let prod = data.name;
        let prodpreco = data.preco * n;
        let x = [{ item: prod, quantidade: n, preco: prodpreco, id:data.produto_id}];
        if (z) x = x.concat(z);
        sessionStorage.setItem('@flor/carrinho', JSON.stringify(x));
        alert("Item adicionado ao carrinho com sucesso!");
        onClose();
    }

    const produtosCarrinho = [];

    if (!open) return
    let nome = `/images/${data.produto_id}.jpg`;
    return (

        <Card className="modalContainer">
            <div className="overflowModal">
                <p className="produtoModalTitle">
                    {data.name}
                </p>

                <div className="linhaHModal" />

                <img src={nome} className="imgModal" alt="name"></img>



                <div className="carrinhoModal">

                    <p className="produtoModalTitle" style={{ alignSelf: "flex-start", marginTop: "0" }}>R${data.preco * n}</p>


                    <Form>
                        <Form.Row className="align-items-center">
                            <Col xs="auto" className="my-1">
                                <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                                    Quantidade
      </Form.Label>
                                <Form.Control
                                    as="select"
                                    className="mr-sm-4"
                                    id="inlineFormCustomSelect"
                                    onChange={(e) => seTn(e.target.value)}
                                    custom>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </Form.Control>

                            </Col>
                        </Form.Row>
                    </Form>


                    <Button className="botao" onClick={handleCar} color="primary" style={{
                        marginLeft: "auto",
                        textTransform: "none",
                        color: "#212529",
                        backgroundColor: "rgb(243, 220, 1, 0.8)",
                        borderColor: "black",
                    }}>
                        Adicionar ao carrinho
                </Button>

                </div>


                <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon />}>
                        <Typography>Descrição do produto</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {data.descricao}
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" expandIcon={<ExpandMoreIcon />}>
                        <Typography>Conteúdo</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {data.contem}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
                        <Typography>Comentários dos nossos clientes</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <textarea></textarea>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <div className="finalModal">
                    <p className="textModal">Nos conte o que achou do produto!</p>
                    <textarea
                        className="comentarioModal"
                    />
                </div>
                <div className="buttonsRowProduto">
                    <Button className="botao" onClick={onClose} style={{

                        marginRight: "auto",
                        textTransform: "none",
                        color: "#212529",
                        backgroundColor: "rgb(243, 220, 1, 0.8)",
                        borderColor: "black",
                    }}>
                        Voltar Página
                </Button>
                    <Button className="botao"  style={{

                        marginLeft: "auto",
                        textTransform: "none",
                        color: "#212529",
                        backgroundColor: "rgb(243, 220, 1, 0.8)",
                        borderColor: "black",
                    }}>
                        Enviar Comentário
                </Button>

                </div>
            </div>

        </Card>
    );
}

export default ProdutoModal;