import React from "react";
import Axios from "axios";
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
  border-radius: 3px;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 15px;
  button {
    height: 28px;
    width: 100px;
    cursor: pointer;
    font-weight: bold;
    background-color: #eebbc3;
    border: 1px solid #121629;
  }
`;

const Button = styled.button`
  height: 28px;
  width: 100px;
  cursor: pointer;
  font-weight: bold;
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
`;

const Box3Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
`;

export default class Carrinho extends React.Component {
  render() {
    const itensCarrinho = this.props.cart.map((servico, index, array) => {
      return (
        <CadaItemDoCarrinho key={servico.id}>
          <div>
            <h3>{servico.title}</h3>
            <h5>R$ {servico.price}</h5>
          </div>

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
