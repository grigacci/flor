import React from "react";
import { Button, Typography } from "@material-ui/core";
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./ProdutoModal.css";


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


/*      (produto) ?
      <h1>antes</h1>:<h1>depois</h1> */


function ProdutoModal({ data, show, onHide }) {
    const [expanded, setExpanded] = React.useState();

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    if (!show) return
    console.log(data);
    let nome = `/images/${data.produto_id}.jpg`;
    return (

        <div className="modalContainer">

            <p className="produtoModalTitle">
                {data.name}
            </p>

            <div className="linhaHModal" />

            <img src={nome} className="imgModal"></img>

            <div className="carrinhoModal">
                <p className="produtoModalTitle" style={{ alignSelf: "flex-start", marginTop: "0" }}>R${data.preco}</p>

                <Button variant="contained" color="primary" style={{
                    marginLeft: "auto",
                    borderColor: "transparent",
                    textTransform: "none",
                    backgroundColor: "#3483fa",
                    color: "#fff",
                    marginBottom: "3px"
                }}>
                    Adicionar ao carrinho
                </Button>
            </div>

            <div className="accordionModal">
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
            </div>
            <div className="finalModal">
                <p className="textModal">Nos conte o que achou do produto!</p>
                <textarea
                    className="comentarioModal"
                />
                <div className="buttonsRow">
                    <Button onClick={onHide} style={{
                        marginTop: "10px",
                        marginRight: "auto",
                        textTransform: "none",
                        backgroundColor: "rgba(65,137,230,.15)",
                        color: "#3483fa",
                    }}>
                        Voltar Página
                </Button>
                    <Button variant="contained" color="primary" style={{
                        marginTop: "10px",
                        marginLeft: "auto",
                        textTransform: "none",
                        backgroundColor: "#3483fa",
                        color: "#fff",
                    }}>
                        Enviar Comentário
                </Button>
            </div>
                
            </div>
        </div>
    );
}

export default ProdutoModal;