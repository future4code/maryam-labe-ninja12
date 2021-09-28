import React from "react";
import styled from "styled-components";



const Div = styled.div`
  backgorund-color: #232946;
`;

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const ButtonsHome = styled.button`
  /*display: flex;*/
  margin: 50px;
  background-color: #eebbc3;
  color: #232946;
  font-size: 1rem;
  padding: 1em 2.5em;
  border: none;
  font-weight: 700;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in 50ms ;
  &:hover{
      background-color: #F6DDE1;
      transition: all 0.2s ease-out 50ms;
    };
`;


export default class Home extends React.Component {
  render() {
    return (
      <Div>       
        <Main>
          <h1>LabeNinjas</h1>

          <div>
            <ButtonsHome onClick={() => this.props.handleCadastro()}>
              Faça seu cadastro
            </ButtonsHome>
            <ButtonsHome>Contrate um Ninja</ButtonsHome>
          </div>
        </Main>
      </Div>
    );
  }
}
