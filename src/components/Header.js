import React from "react";
import styled from "styled-components";

const Header1 = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 80px;
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
  transition: all 0.2s ease-in 50ms ;
  &:hover{
      background-color: #F6DDE1;
      transition: all 0.2s ease-out 50ms;
    };

`;

export default class Header extends React.Component {
    render() {
        return (
            <div>
            <Header1>
                <ButtonsHeader>Home</ButtonsHeader>
                <ButtonsHeader>Carrinho</ButtonsHeader>
            </Header1>
            <hr />
            </div>
        )
    }
}