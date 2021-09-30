import React from "react";
import styled from "styled-components";
import Cabecalho from "./Cabecalho";

const Div = styled.div`
  background-color: #232946;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 80px;
`;

const ButtonsHeader = styled.button`
  background-color: #eebbc3;
  color: #232946;
`;

export default class Home extends React.Component {
  render() {
    return (
      <Div>
        <header>
          <Cabecalho
            trocarDePagina={this.props.trocarDePagina}
            paginaEscolhida={this.props.paginaEscolhida}
          />
        </header>

        <main>
          <h1>LabeNinjas</h1>

          <div>
            <button onClick={() => this.props.trocarDePagina("cadastro")}>
              Faça seu cadastro
            </button>
            <button onClick={() => this.props.trocarDePagina("listaDeServicos")}>Contrate um Ninja</button>
          </div>
        </main>
      </Div>
    );
  }
}
