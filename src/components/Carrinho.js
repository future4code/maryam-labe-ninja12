import React from "react";
import styled from "styled-components";
import Cabecalho from "./Cabecalho";

const LayoutPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #b8c1ec;
`;

const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0 0 0;
`;

const CadaItemDoCarrinho = styled.div`
  background-color: #fffffe;
  color: #121629;
  height: 6em;
  width: 500px;
  border: 1px solid #121629;
  border-radius: 7px;
  padding: 0 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 15px;
  border-radius: 7px;

  button {
    height: 28px;
    width: 100px;
    background-color: #eebbc3;
    border: none;
    border-radius: 7px;
    color: #232946;
    cursor: pointer;
    transition: all 0.2s ease-out 50ms;
    font-weight: bold;
    :hover {
      color: white;
      background-color: #bf999f;
      transition: all 0.2s ease-out 50ms;
    }
  }
  h5 {
    margin: 0;
  }
`;

const CarrinhoVazio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  button {
    background-color: #eebbc3;
    border: none;
    font-size: 25px;
    border-radius: 5px;
    padding: 8px;
    color: #232946;
    cursor: pointer;
    margin-top: 50px;
    height: 2em;
    :hover {
      color: white;
      background-color: #bf999f;
    }
  }
`;

const ValorAPagar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
`;

const CardTotal = styled.div`
  background-color: #fffffe;
  color: #121629;
  height: 3em;
  width: 50%;
  position: relative;
  border: 1px solid #121629;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
`;

const Box3Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  button { 
    background-color: #eebbc3;
    font-weight: bold;
    border: none;
    border-radius: 7px;
    padding: 8px;
    color: #232946;
    cursor: pointer;
    transition: all 0.2s ease-in 50ms;
  }
    button:hover {
      color: white;
      background-color: #bf999f;
      transition: all 0.2s ease-out 50ms;
    }
`;

const CardItemCarrinho = styled.div`
width: 350px;
margin: 0;
padding: 0;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
h3 {
  text-align:left;
  font-size: 18px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 350px;
  margin: 0;
}
`
const TituloPreco = styled.div`
display:flex;
flex-direction:column;
align-items: space-around;
justify-content: center;
margin: 0;
padding: 0;
`

export default class Carrinho extends React.Component {
  render() {
    const itensCarrinho = this.props.cart.map((servico, index, array) => {
      return (
        <CadaItemDoCarrinho key={servico.id}>
          <TituloPreco>
            <CardItemCarrinho><h3>{servico.title}</h3></CardItemCarrinho>
            <h5>R$ {servico.price}</h5>
          </TituloPreco>

          <button
            onClick={() =>
              this.props.onClickDeleteCart(servico.id, servico.title)
            }
          >
            Remover
          </button>
        </CadaItemDoCarrinho>
      );
    });

    let totalPrice = 0;

    this.props.cart.forEach((servico) => {
      totalPrice += servico.price;
    });

    return (
      <LayoutPage>
        <Header>
          <Cabecalho
            trocarDePagina={this.props.trocarDePagina}
            paginaEscolhida={this.props.paginaEscolhida}
          />
        </Header>

        {this.props.cart.length === 0 ? (
          <CarrinhoVazio>
            <br />
            <br />
            <br />
            <CarrinhoVazio>
              <h2>Seu carrinho está vazio no momento</h2>
              <h2>Quer contratar um job com o LabeNinja?</h2>
              <h2>Clique abaixo e adicione itens ao carrinho</h2>
            </CarrinhoVazio>

            <button
              onClick={() => this.props.trocarDePagina("listaDeServicos")}
            >
              CONTRATE UM SERVIÇO
            </button>
          </CarrinhoVazio>
        ) : (
          <LayoutPage>
            <br />
            <br />
            <br />
            <h1>SEU CARRINHO</h1>

            {itensCarrinho}

            <ValorAPagar>
              <h2>TOTAL A PAGAR: </h2>
              <CardTotal>
                <h2>R${totalPrice.toFixed(2)}</h2>
              </CardTotal>
            </ValorAPagar>
            <br /><br />

            <Box3Buttons>
              <button onClick={() => this.props.cleanCart()}>
                ESVAZIAR CARRINHO
              </button>
              <button onClick={() => this.props.onClickCheckout()}>
                FINALIZAR COMPRA
              </button>
              <button
                onClick={() => this.props.trocarDePagina("listaDeServicos")}
              >
                ADICIONE MAIS SERVIÇOS
              </button>
            </Box3Buttons>
          </LayoutPage>
        )}
      </LayoutPage>
    );
  }
}
