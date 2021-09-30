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
`;

const BotaoLogo = styled.div`

  img {
    cursor: pointer;
    height: 70px;
    width: 70px;
    background-color: #eebbc3;
    border-radius: 7px;
    border: none;
    transition: all 0.2s ease-in 50ms;
  }
    img:hover {
      background-color: #F6DDE1;
      transition: all 0.2s ease-out 50ms;
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
                <img onClick={() => this.props.trocarDePagina("home")} src={Logo} />
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
                <img onClick={() => this.props.trocarDePagina("home")} src={Logo} />
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
                <img onClick={() => this.props.trocarDePagina("home")} src={Logo} />
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
                <img onClick={() => this.props.trocarDePagina("home")} src={Logo} />
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
                <img onClick={() => this.props.trocarDePagina("home")} src={Logo} />
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
