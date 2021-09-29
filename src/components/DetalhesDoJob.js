import React, { Component } from 'react';
import styled from 'styled-components';

const Body = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #b8c1ec;
    min-width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    align-items: center;
`

const Header = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 12px 0 0 0;
    min-height: 100px;
    min-width: 100vw;
    border: solid black;
    border-width: 2px;
    background-color: #232946;
    input {
        width: 40%;
        background-color: #b8c1ec;
        border-radius: 7px;
        padding: 2px 8px;
    }
    button{
        background-color: #eebbc3;
        font-weight: bold;
        text-align: center;
        padding: 8px;
        margin: 0 12px;
        color: #232946;
        border-radius: 7px;
        border: none;
    }
`

const DisposicaoDosDetalhesDoServico = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: white;
    max-width: 40vw;
    min-height: 60vh;
    padding: 50px 50px;
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
    button{
        max-width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #eebbc3;
        border: none;
        border-radius: 5px;
        padding: 8px;
        color: #232946;
        -webkit-box-shadow: 0px 0px 25px 2px rgba(204,160,167,0.7); 
        box-shadow: 0px 0px 25px 2px rgba(204,160,167,0.7);
        font-weight: bold;
        :hover{
            color: white;
            background-color: #bf999f;
            -webkit-box-shadow: 0px 0px 25px 2px rgba(191,153,159,0.7); 
            box-shadow: 0px 0px 25px 2px rgba(191,153,159,0.7);
            font-weight: bold;
        }
    }
    ol {
        list-style: square;
    }
`

export default class DetalhesDoJob extends Component {
    render() {
        return (
            <Body>

                <Header> 
                    <button onClick={this.props.trocarDePagina("home")}>Home</button>
                    <button onClick={this.props.trocarDePagina("home")}>Cadastrar Novo Job</button>
                    <button onClick={this.props.trocarDePagina("home")}>Voltar</button>
                </Header>

                <DisposicaoDosDetalhesDoServico>

                    <h1>{this.props.jobEscolhido.title}</h1>
                    {/* <div> */}
                        <p><strong>Prazo:  </strong>{this.props.jobEscolhido.description}</p>
                        <p><strong>Preço:</strong>  R${this.props.jobEscolhido.price}</p>
                        <p><strong>Formas de Pagamento aceitas: </strong></p>
                        <ol>
                        <li>{this.props.jobEscolhido.paymentMethods}</li>
                        </ol>
                    {/* </div> */}
                    <button onClick={() => this.props.trocarDePagina("home")}>Voltar para a lista</button>

                </DisposicaoDosDetalhesDoServico>
                
            </Body>
        )
    }
}
