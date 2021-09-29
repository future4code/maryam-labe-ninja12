import React from "react";
import styled from "styled-components";
import Logo from "../img/logo.png";

const Header1 = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  width: 100vw;
  padding: 20px 0;
  /* border-bottom: 1px solid white */
`;

const BotaoLogo = styled.div`
  button {
    cursor: pointer;
    height: 50px;
    width: 50px;
    background-color: #eebbc3;
    border-radius: 7px;
    border: none;
  }
  img {
    height: 50px;
    /* width: 50px; */

    border-radius: 7px;
    border: none;
    /* height: 100%; */
    max-width: 100%;
    background-color: #eebbc3;
  }
`;

const ButtonsHeader = styled.button`
  background-color: #eebbc3;
  color: #232946;
  font-size: 1rem;
  padding: 0.5em 2.5em;
  border: none;
  font-weight: 700;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in 50ms;
  margin: 0 12px;
  &:hover {
    background-color: #f6dde1;
    transition: all 0.2s ease-out 50ms;
  }
`;

export default class Cabecalho extends React.Component {
  chamarHeader = () => {
    switch (this.props.paginaEscolhida) {
      case "home":
        return (
          <Header1>
            <BotaoLogo>
              <button onClick={() => this.props.trocarDePagina("home")}>
                <img src={Logo} />
              </button>
            </BotaoLogo>
            <ButtonsHeader
              onClick={() => this.props.trocarDePagina("carrinho")}
            >
              Carrinho
            </ButtonsHeader>
          </Header1>
        );

      case "Formulario":
        return (
          <Header1>
            <BotaoLogo>
              <button onClick={() => this.props.trocarDePagina("carrinho")}>
                <img src={Logo} />
              </button>
            </BotaoLogo>
            <ButtonsHeader onClick={() => this.props.trocarDePagina("home")}>
              Carrinho
            </ButtonsHeader>
          </Header1>
        );
      case "listaDeServicos":
        return (
          <Header1>
            <BotaoLogo>
              <button onClick={() => this.props.trocarDePagina("home")}>
                <img src={Logo} />
              </button>
            </BotaoLogo>
            <div>
              <ButtonsHeader
                onClick={() => this.props.trocarDePagina("cadastro")}
              >
                Seja um Ninja
              </ButtonsHeader>
              <ButtonsHeader
                onClick={() => this.props.trocarDePagina("carrinho")}
              >
                Carrinho
              </ButtonsHeader>
            </div>
          </Header1>
        );

      case "carrinho":
        return (
          <Header1>
            <BotaoLogo>
              <button onClick={() => this.props.trocarDePagina("home")}>
                <img src={Logo} />
              </button>
            </BotaoLogo>
            <ButtonsHeader
              onClick={() => this.props.trocarDePagina("cadastro")}
            >
              Seja um Ninja
            </ButtonsHeader>
          </Header1>
        );
      default:
        return (
          <Header1>
            <BotaoLogo>
              <button onClick={() => this.props.trocarDePagina("home")}>
                <img src={Logo} />
              </button>
            </BotaoLogo>
            <ButtonsHeader
              onClick={() => this.props.trocarDePagina("carrinho")}
            >
              Carrinho
            </ButtonsHeader>
          </Header1>
        );
    }
  };
  render() {
    return <div>{this.chamarHeader()}</div>;
  }
}
