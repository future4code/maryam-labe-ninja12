import React from "react";
import styled from "styled-components";
import Cabecalho from "./Cabecalho";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #232946;
  min-width: 100%;
  min-height: 100%;
  box-sizing: border-box;
`;

const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0 0 0;
  input {
    width: 40%;
    background-color: #b8c1ec;
    border-radius: 7px;
    padding: 2px 8px;
  }
`;
const Filtros = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  padding: 0 50px;
  padding-bottom: 20px;
  div {
    display: flex;
    min-width: 80%;
    align-items: center;
    justify-content: center;
  }
  input {
    margin: 0 24px;
    min-width: 100px;
    background-color: #b8c1ec;
    border-radius: 7px;
    padding: 2px 8px;
    font-weight: bold;
  }
  input:nth-child(3) {
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
`;

const DisposicaoDaListaDeServicos = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(5, 200px);
  grid-template-rows: 1fr 1fr;
  column-gap: 30px;
  row-gap: 40px;
  background-color: #b8c1ec;
  max-width: 100vw;
  padding: 50px 100px;
  justify-content: center;
`;

const ContainerDoServico = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 200px;
  background-color: white;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 7px;
  -webkit-box-shadow: 0px 2px 15px -6px rgba(0, 0, 0, 0.79);
  box-shadow: 0px 2px 15px -6px rgba(0, 0, 0, 0.79);
  div {
    box-sizing: border-box;
    padding: 0 12px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
  div > p {
    min-width: 50%;
    text-align: center;
  }
  h5 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    margin: 4px 0;
    max-width: 200px;
    background-color: #fffffe;
    max-height: 50px;
  }
  button {
    background-color: #eebbc3;
    font-weight: bold;
    border: none;
    border-radius: 7px;
    padding: 8px;
    color: #232946;
    cursor: pointer;
    -webkit-box-shadow: 0px 2px 15px -6px rgba(0, 0, 0, 0.79);
    box-shadow: 0px 2px 15px -6px rgba(0, 0, 0, 0.79);
    :hover {
      color: white;
      background-color: #bf999f;
      -webkit-box-shadow: 0px 0px 25px 2px rgba(191, 153, 159, 0.7);
      box-shadow: 0px 0px 25px 2px rgba(191, 153, 159, 0.7);
    }
  }
`;

const DivTitulo = styled.div`
  width: 200px;
  height: 70px;
  display: flex;
  align-items: center;
  p {
    text-align: center;
    margin: 0 auto;
    font-size: 18px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export default class ListaDeServicos extends React.Component {
  render() {
    const listaDeServicosAVenda = this.props.listaDeServicos
      .filter((servico) => {
        return (
          servico.title
            .toLowerCase()
            .includes(this.props.inputBuscaPorNome.toLowerCase()) ||
          servico.description
            .toLowerCase()
            .includes(this.props.inputBuscaPorNome.toLowerCase())
        );
      })
      .filter((servico) => {
        return (
          this.props.inputMinimumValue === "" ||
          servico.price >= this.props.inputMinimumValue
        );
      })
      .filter((servico) => {
        return (
          this.props.inputValorMaximo === "" ||
          servico.price <= this.props.inputValorMaximo
        );
      })
      .sort((servicoAtual, proximoservico) => {
        switch (this.props.filtroOrdenacao) {
          case "title":
            return servicoAtual.title.localeCompare(proximoservico.title);
          case "dueDate":
            return (
              new Date(servicoAtual.dueDate).getTime() -
              new Date(proximoservico.dueDate).getTime()
            );
          default:
            return servicoAtual.price - proximoservico.price;
        }
      })
      .map((servico, index) => {
        return (
          <ContainerDoServico
            key={servico.id}
            onClick={() => this.props.entrarNosDetalhesDoJobEscolhido(servico)}
          >
            <DivTitulo>
              <p>{servico.title}</p>
            </DivTitulo>
            <img
              alt="Imagem gerada de forma aleatória"
              src={this.props.randomLink()}
            />
            <div>
              <p>
                <strong>
                  Prazo: <br></br>
                </strong>
                {this.props.formatarStringParaData(servico.dueDate)}
              </p>
              <p>
                <strong>
                  Preço: <br></br>
                </strong>
                R$ {servico.price}
              </p>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                this.props.addToCart(servico);
              }}
            >
              <strong>Adicionar ao Carrinho</strong>
            </button>
          </ContainerDoServico>
        );
      });

    return (
      <Body>
        <Header>
          <Cabecalho
            trocarDePagina={this.props.trocarDePagina}
            paginaEscolhida={this.props.paginaEscolhida}
          />
        </Header>

        <Filtros>
          <div>
            <input
              placeholder="Valor Máximo"
              value={this.props.inputValorMaximo}
              onChange={this.props.onChangeFiltroMaximo}
              type="number"
            />

            <input
              placeholder="Valor Mínimo"
              value={this.props.inputMinimumValue}
              onChange={this.props.onChangeFiltroMinimo}
              type="number"
            />

            <input
              value={this.props.inputBuscaPorNome}
              onChange={this.props.onChangeFiltroNome}
              placeholder="Buscar por título ou descrição"
            />

            <select
              name="ordenacao"
              value={this.props.filtroOrdenacao}
              onChange={this.props.atualizaFiltroOrdenacao}
            >
              <option value="title">Título</option>
              <option value="price">Preço</option>
              <option value="dueDate">Prazo</option>
            </select>
          </div>
        </Filtros>
        <DisposicaoDaListaDeServicos>
          {listaDeServicosAVenda}
        </DisposicaoDaListaDeServicos>
      </Body>
    );
  }
}
