import React from "react";
import styled from "styled-components";
import Cabecalho from "./Cabecalho";

const Div = styled.div`
  background-color: #232946;
`

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 100px 25px;
`

const H1 = styled.h1`
  font-size: 5rem;
  color: #b8c1ec;
`

const DivButton = styled.div`
  display: flex;
  gap: 0 100px;
  padding: 45px 0;
`

const ButtonHome = styled.button`
  background-color: #eebbc3;
  color: #232946;
  border: none;
  border-radius: 6px;
  padding: 1em 2.5rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in 50ms;
  &:hover {
    background-color: #F6DDE1;
    transition: all 0.2s ease-out 50ms;
  }
`
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

        <Main>
          <H1>LabeNinjas</H1>

          <DivButton>
            <ButtonHome onClick={() => this.props.trocarDePagina("cadastro")}>
              Faça seu cadastro
            </ButtonHome>
            <ButtonHome onClick={() => this.props.trocarDePagina("listaDeServicos")}>Contrate um Ninja</ButtonHome>
          </DivButton>
        </Main>
      </Div>
    );
  }
}
