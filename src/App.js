import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { url, headers } from "./components/Constants";
import ListaDeServicos from "./components/ListaDeServicos";
import Home from "./components/Home";
import Form from "./components/Formulario";

const ContainerGeral = styled.div`
  box-sizing: border-box;
  background-color: #232946;
  min-height: 100vh;
`;

export default class App extends Component {
  state = {
    listaDeServicos: [],
    inputBuscaListaDeServicos: "",
    inputFiltroValorMinimo: "",
    InputFiltroValorMaximo: "",
    inputFiltroTituloOuDescricao: "",
    filtroOrdenacao: "",
    paginaEscolhida: "home",
  };

  getAllJobs = async () => {
    console.log(url + "/jobs");

    await axios
      .get(url + "/jobs", headers)
      .then((response) => {
        console.log(response);
        this.setState({ listaDeServicos: response.data.jobs });
      })
      .catch((error) => {
        alert(error);
      });
  };

  componentDidMount = () => {
    this.getAllJobs();
  };

  onChangeInputBuscaListaDeServicos = (event) => {
    this.setState({ inputBuscaListaDeServicos: event.target.value });
  };

  funcaoDePesquisarComFiltro = (pesquisa) => {
    return pesquisa;
  };

  pesquisarServicoNaLista = (pesquisa) => {
    // funcaoDePesquisarComFiltro(pesquisa)
    this.setState({ inputBuscaListaDeServicos: "" });
  };

  randomLink = () => {
    const number = Math.floor(Math.random() * 100);
    const link = "https://picsum.photos/200/150?random=";
    return link + number;
  };

  formatarStringParaData(data) {
    let dia = data.split("/")[2];
    let mes = data.split("/")[1];
    let ano = data.split("/")[0];

    console.log(dia + "/" + mes + "/" + ano);
    return dia + "/" + mes + "/" + ano;
  }

  paginaAtual = () => {
    switch (this.state.paginaEscolhida) {
      case "listaDeServicos":
        return (
          <ListaDeServicos
            listaDeServicos={this.state.listaDeServicos}
            paginaEscolhida={this.state.paginaEscolhida}
            inputBuscaListaDeServicos={this.state.inputBuscaListaDeServicos}
            inputFiltroValorMinimo={this.state.inputFiltroValorMinimo}
            InputFiltroValorMaximo={this.state.InputFiltroValorMaximo}
            inputFiltroTituloOuDescricao={
              this.state.inputFiltroTituloOuDescricao
            }
            filtroOrdenacao={this.state.filtroOrdenacao}
            entrarNosDetalhesDoJobEscolhido={
              this.entrarNosDetalhesDoJobEscolhido
            }
            randomLink={this.randomLink}
            adicionarCarrinho={this.adicionarCarrinho}
          />
        );
      // case "detalhesJob":
      //   return <DetalhesDoJob jobEscolhido={this.state.jobEscolhido} />;
      case "home":
        return <Home handleCadastro={this.handleCadastro} />;
      case "cadastro":
        return (
          <Form
            handleCadastro={this.handleCadastro}
            getAllJobs={this.getAllJobs}
          />
        );
    }
  };

  handleCadastro = () => {
    this.setState({ paginaEscolhida: "cadastro" });
  };

  render() {
    return (
      <ContainerGeral>
        {/* <ListaDeServicos
          inputBuscaListaDeServicos={this.state.inputBuscaListaDeServicos}
          pesquisarServicoNaLista={this.pesquisarServicoNaLista}
          onChangeInputBuscaListaDeServicos={
            this.onChangeInputBuscaListaDeServicos
          }
          funcaoDePesquisarComFiltro={this.funcaoDePesquisarComFiltro}
          randomLink={this.randomLink}
          listaDeServicos={this.state.listaDeServicos}
          formatarStringParaData={this.formatarStringParaData}
        /> */}
        {this.paginaAtual()}
      </ContainerGeral>
    );
  }
}
