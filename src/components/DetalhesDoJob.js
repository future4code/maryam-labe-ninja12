import React, { Component } from "react";
import styled from "styled-components";
import Cabecalho from "./Cabecalho";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #b8c1ec;
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  align-items: center;
`;

const BotoesInferiores = styled.div`
  display: flex;
  button {
    margin: 0 12px;
  }
`;

const Header = styled.div`
  background-color: #232946;
`;

const DisposicaoDosDetalhesDoServico = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: white;
  max-width: 40vw;
  min-height: 60vh;
  padding: 12px 50px;
  justify-content: space-around;
  margin: 50px;
  align-items: center;
  border-radius: 7px;
  h1 {
    text-align: center;
    width: 100%;
    height: 20%;
  }
  p {
    padding: 0 20px;
  }
  button {
    max-width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eebbc3;
    color: #232946;
    border: none;
    border-radius: 7px;
    padding: 8px;
    -webkit-box-shadow: 6px 15px 25px -5px rgba(0, 0, 0, 0.57);
    box-shadow: 6px 15px 25px -5px rgba(0, 0, 0, 0.57);
    font-weight: bold;
    :hover {
      color: white;
      background-color: #bf999f;
      -webkit-box-shadow: 0px 0px 25px 2px rgba(191, 153, 159, 0.7);
      box-shadow: 0px 0px 25px 2px rgba(191, 153, 159, 0.7);
      font-weight: bold;
    }
  }
  ol {
    list-style: square;
  }
  img {
    border-radius: 50%;
  }
`;

export default class DetalhesDoJob extends Component {
  render() {
    return (
      <Body>
        <Header>
          <Cabecalho
            trocarDePagina={this.props.trocarDePagina}
            paginaEscolhida={this.props.paginaEscolhida}
          />
        </Header>

        <DisposicaoDosDetalhesDoServico>
          <h1>{this.props.jobEscolhido.title}</h1>
          <img
            alt="Imagem gerada de forma aleatória"
            src={this.props.randomLink()}
          />
          <div>
            <p>
              <strong>Descrição: </strong>
              {this.props.jobEscolhido.description}
            </p>
            <p>
              <strong>Preço:</strong> R$ {this.props.jobEscolhido.price}
            </p>
            <p>
              <strong>Formas de Pagamento aceitas: </strong>
            </p>
            <ol>
              <li>{this.props.jobEscolhido.paymentMethods}</li>
            </ol>
          </div>
          <BotoesInferiores>
            <button
              onClick={() => this.props.addToCart(this.props.jobEscolhido)}
            >
              Contratar serviço
            </button>
            <button
              onClick={() => this.props.trocarDePagina("listaDeServicos")}
            >
              Voltar para a lista
            </button>
          </BotoesInferiores>
        </DisposicaoDosDetalhesDoServico>
      </Body>
    );
  }
}
