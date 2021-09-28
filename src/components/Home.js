import React from "react";
import styled from "styled-components";

const Div = styled.div`
  backgorund-color: #232946;
`;

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
          <button>Home</button>
          <button>Carrinho</button>
        </header>

        <main>
          <h1>LabeNinjas</h1>

          <div>
            <button onClick={() => this.props.handleCadastro()}>
              Faça seu cadastro
            </button>
            <button>Contrate um Ninja</button>
          </div>
        </main>
      </Div>
    );
  }
}
