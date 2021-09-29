import React, { Component } from 'react';
import styled from 'styled-components';

const Body = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #232946;
    min-width: 100%;
    min-height: 100%;
    box-sizing: border-box;
`

const Header = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 0 0 0;
    input {
        width: 40%;
        background-color: #b8c1ec;
        border-radius: 7px;
        padding: 2px 8px;
        font-weight: bold;
    }
`
const Filtros = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    /* max-width: 80%; */
    min-height: 60px;
    padding: 0 50px;
    div {
        display: flex;
        min-width: 80%;
        align-items: center;
        justify-content: center;
    }
    input{
        margin: 0 24px;
        min-width: 100px;
        background-color: #b8c1ec;
        border-radius: 7px;
        padding: 2px 8px;
        font-weight: bold;
    }
    input:nth-child(3){
    min-width: 200px;
    }
    select {
        margin: 0 24px;
        min-width: 100px;
        background-color: #b8c1ec;
        border-radius: 7px;
        padding: 2px 8px;
        font-weight: bold;
    }
`

const DisposicaoDaListaDeServicos = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(5, 200px);
    grid-template-rows: 1fr 1fr;
    column-gap: 30px;
    row-gap: 40px;
    background-color: #b8c1ec;
    max-width: 100vw;
    min-height: 90vh;
    padding: 50px 100px;
    justify-content: center;
    /* align-items: center; */
    /* align-self: center; */
    /* @media (min-width: 769px) and (max-width: 1024px){
        grid-template-columns: 300px 300px 300px;
    };
    @media (min-width: 481px) and (max-width: 768px){
        grid-template-columns: 300px 300px;
    };
    @media (min-width: 320px) and (max-width: 480px){
        grid-template-columns: 300px;
    }; */
`

const ContainerDoServico = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 200px;
    background-color: white;
    align-items: center;
    justify-content: start;
    border-radius: 5px;
    -webkit-box-shadow: 6px 15px 25px -5px rgba(0,0,0,0.57); 
    box-shadow: 6px 15px 25px -5px rgba(0,0,0,0.57);
    div{
        box-sizing: border-box;
        padding: 0 12px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
    }
    h5{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20%;
        margin: 4px 0;
        max-width: 200px;
        background-color: #fffffe;
    }
    button{
        background-color: #eebbc3;
        border: none;
        border-radius: 5px;
        padding: 8px;
        color: #232946;
        -webkit-box-shadow: 0px 0px 25px 2px rgba(204,160,167,0.7); 
        box-shadow: 0px 0px 25px 2px rgba(204,160,167,0.7);
        :hover{
            color: white;
            background-color: #bf999f;
            -webkit-box-shadow: 0px 0px 25px 2px rgba(191,153,159,0.7); 
            box-shadow: 0px 0px 25px 2px rgba(191,153,159,0.7);
        }
    }
`


export default class ListaDeServicos extends Component {
    
    render() {
        const listaDeServicosAVenda = this.props.listaDeServicos.map((servico, index)=>{
        return (
            <ContainerDoServico 
            onClick={() => this.props.entrarNosDetalhesDoJobEscolhido(servico)} 
            key={index}>
    
                <h5>{servico.title}</h5>
                <img alt="Imagem gerada de forma aleatória" src={this.props.randomLink()}></img>
                <div>
                    <p><strong>Prazo: </strong>{this.props.formatarStringParaData(servico.dueDate)}</p>
                    <p><strong>Preço: </strong>R$ {servico.price}</p>
                </div>

                <button type="button" onClick={(e) => { e.stopPropagation();
                this.props.adicionarCarrinho()
                }}>
                    <strong>Adicionar ao Carrinho</strong>
                </button>
            </ContainerDoServico>

        )
        })
        return (

            <Body>
                <Header> 
                    <input
                    value= {this.props.inputBuscaListaDeServicos} 
                    onChange= {this.props.onChangeInputBuscaListaDeServicos}
                    placeholder="Insira o nome do serviço."
                    />
                </Header>

                <Filtros>
                    <div>
                        <input 
                        placeholder="Valor Mínimo"
                        />
                        <input 
                        placeholder="Valor Máximo"
                        />
                        <input 
                        placeholder="Buscar por título ou descrição"
                        />

                        <select name="escolaridade" id="escolaridade">
                            <option value={this.props.filtroOrdenacao}>Sem ordenação</option>
                            <option value={this.props.filtroOrdenacao}>Menor Valor</option>
                            <option value={this.props.filtroOrdenacao}>Maior Valor</option>
                            <option value={this.props.filtroOrdenacao}>Título</option>
                            <option value={this.props.filtroOrdenacao}>Prazo</option>
                        </select> 
                    </div>
                </Filtros>
                <DisposicaoDaListaDeServicos>   
                    {listaDeServicosAVenda}
                </DisposicaoDaListaDeServicos>   
            </Body>
        )
    }
}
