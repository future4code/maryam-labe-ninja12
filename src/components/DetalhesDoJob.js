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
    font-weight: bold;
    :hover {
      color: white;
      background-color: #bf999f;
      font-weight: bold;
      transition: all 0.2s ease-out 50ms;
    }
  }
  ol {
    list-style: square;
  }
  img {
    border-radius: 50%;
  }
`;

const DivTituloDetalhes = styled.div`
  width: 300px;
  max-height: 250px;
  display: flex;
  align-items: center;
  h1 {
    text-align: center;
    margin: 0 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const DivDescricaoDetalhes = styled.div`
  width: 300px;
  max-height: 290px;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 12;
    -webkit-box-orient: vertical;
  }
`;

export default class DetalhesDoJob extends Component {

  render() {
    const metodosPagamento = this.props.jobEscolhido.paymentMethods.map(
      (item) => {
        return <li key={item.paymentMethods}>{item}</li>;
      }
    );

    return (
      <Body>
        <Header>
          <Cabecalho
            trocarDePagina={this.props.trocarDePagina}
            paginaEscolhida={this.props.paginaEscolhida}
          />
        </Header>

        <DisposicaoDosDetalhesDoServico>
          <DivTituloDetalhes>
            <h1>{this.props.jobEscolhido.title}</h1>
          </DivTituloDetalhes>
          <img
            alt="Imagem gerada de forma aleatória"
            src={this.props.randomLink()}
          />
          <div>
            <p>
              <strong>Descrição: </strong>
            </p>
            <DivDescricaoDetalhes>
              <p>{this.props.jobEscolhido.description}</p>
            </DivDescricaoDetalhes>

            <p>
              <strong>Preço:</strong> R$ {this.props.jobEscolhido.price}
            </p>
            <p>
              <strong>Formas de Pagamento aceitas: </strong>
            </p>
            <ol>
              <li>{metodosPagamento}</li>
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
