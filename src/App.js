import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { url, headers } from "./components/Constants";
import Home from "./components/Home";
import Form from "./components/Formulario";
import Carrinho from "./components/Carrinho";
import ListaDeServicos from "./components/ListaDeServicos";
import DetalhesDoJob from "./components/DetalhesDoJob";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Gluten&display=swap');

  h1 {
    font-family: 'Gluten', cursive;
  }
`;

const ContainerGeral = styled.div`
  box-sizing: border-box;
  background-color: #232946;
  min-height: 100vh;
`;

export default class App extends Component {
  state = {
    listaDeServicos: [],
    inputBuscaPorNome: "",
    inputValorMaximo: "",
    filtroOrdenacao: "title",
    paginaEscolhida: "home",
    cart: [],
    inputMinimumValue: "",
    jobEscolhido: [],
  };

  getAllJobs = async () => {
    await axios
      .get(url + "/jobs", headers)
      .then((response) => {
        this.setState({ listaDeServicos: response.data.jobs });
      })
      .catch((error) => {
        alert(error);
      });
  };

  componentDidMount = () => {
    this.getAllJobs();
  };

  onChangeFiltroNome = (event) => {
    this.setState({ inputBuscaPorNome: event.target.value });
  };

  onChangeFiltroMinimo = (event) => {
    this.setState({ inputMinimumValue: event.target.value });
  };

  onChangeFiltroMaximo = (event) => {
    this.setState({ inputValorMaximo: event.target.value });
  };

  atualizaFiltroOrdenacao = (event) => {
    this.setState({ filtroOrdenacao: event.target.value });
  };

  funcaoDePesquisarComFiltro = (pesquisa) => {
    return pesquisa;
  };

  pesquisarServicoNaLista = (pesquisa) => {
    this.setState({ inputBuscaListaDeServicos: "" });
  };

  randomLink = () => {
    const number = Math.floor(Math.random() * 100);
    const link = "https://picsum.photos/200/150?random=";
    return link + number;
  };

  formatarStringParaData(data) {
    let dataSplit = data.split("-");
    let dia = dataSplit[2].slice(0, 2);
    let mes = dataSplit[1];
    let ano = dataSplit[0];
    return dia + "/" + mes + "/" + ano;
  }

  addToCart = (servico) => {
    const myCart = [...this.state.cart, servico];
    this.setState({ cart: myCart });
    alert(
      `O serviço "${servico.title}"", no valor de R$${servico.price}, foi adicionado ao seu carrinho com sucesso!`
    );
  };

  entrarNosDetalhesDoJobEscolhido = (job) => {
    this.setState({ jobEscolhido: job });
    this.setState({ paginaEscolhida: "detalhesDoJob" });
  };

  trocarDePagina = (nomeDaPagina) => {
    this.setState({ paginaEscolhida: nomeDaPagina });
  };

  paginaAtual = () => {
    switch (this.state.paginaEscolhida) {
      case "listaDeServicos":
        return (
          <ListaDeServicos
            listaDeServicos={this.state.listaDeServicos}
            paginaEscolhida={this.state.paginaEscolhida}
            inputValorMaximo={this.state.inputValorMaximo}
            filtroOrdenacao={this.state.filtroOrdenacao}
            atualizaFiltroOrdenacao={this.atualizaFiltroOrdenacao}
            entrarNosDetalhesDoJobEscolhido={
              this.entrarNosDetalhesDoJobEscolhido
            }
            randomLink={this.randomLink}
            addToCart={this.addToCart}
            inputBuscaPorNome={this.state.inputBuscaPorNome}
            onChangeFiltroNome={this.onChangeFiltroNome}
            onChangeFiltroMaximo={this.onChangeFiltroMaximo}
            inputMinimumValue={this.state.inputMinimumValue}
            onChangeFiltroMinimo={this.onChangeFiltroMinimo}
            formatarStringParaData={this.formatarStringParaData}
            trocarDePagina={this.trocarDePagina}
          />
        );
      case "home":
        return (
          <Home
            trocarDePagina={this.trocarDePagina}
            paginaEscolhida={this.state.paginaEscolhida}
          />
        );
      case "cadastro":
        return (
          <Form
            getAllJobs={this.getAllJobs}
            trocarDePagina={this.trocarDePagina}
          />
        );
      case "carrinho":
        return (
          <Carrinho
            cart={this.state.cart}
            cleanCart={this.cleanCart}
            paginaEscolhida={this.state.paginaEscolhida}
            onClickDeleteCart={this.onClickDeleteCart}
            onClickCheckout={this.onClickCheckout}
            trocarDePagina={this.trocarDePagina}
          />
        );

      case "detalhesDoJob":
        return (
          <DetalhesDoJob
            jobEscolhido={this.state.jobEscolhido}
            trocarDePagina={this.trocarDePagina}
            randomLink={this.randomLink}
            addToCart={this.addToCart}
          />
        );
      default:
        return alert("Houve um erro. Tente novamente mais tarde!");
    }
  };

  onChangeFiltroMaximo = (event) => {
    this.setState({ inputValorMaximo: event.target.value });
  };

  onChangeFiltroMinimo = (event) => {
    this.setState({ inputMinimumValue: event.target.value });
  };

  cleanCart = () => {
    if (
      window.confirm(
        `Deseja mesmo excluir todos os itens do seu carrinho? Se desejar remover algum item em específico, acesse seu carrinho e clique em "Remover" ao lado do item.`
      )
    ) {
      this.setState({ cart: [], paginaEscolhida: "listaDeServicos" });
      alert(
        `Seu carrinho foi esvaziado com sucesso! Você será redirecionado para a página com a lista de serviços`
      );
    }
  };

  onClickDeleteCart = (id, title) => {
    if (
      window.confirm(`Tem certeza que deseja remover o produto "${title}"?`)
    ) {
      const newCart = this.state.cart.filter((cartItem) => {
        return cartItem.id !== id;
      });
      this.setState({ cart: newCart });
    }
  };

  onClickCheckout = () => {
    if (
      window.confirm(
        `Deseja mesmo finalizar a sua compra e ir para o pagamento?`
      )
    ) {
      this.setState({ cart: [], paginaEscolhida: "listaDeServicos" });
      alert(
        `Compra finalizada com sucesso. Você receberá por e-mail os contatos do profissional contratado!`
      );
    }
  };

  render() {
    return (
      <ContainerGeral>
        <GlobalStyle />
        {this.paginaAtual()}
      </ContainerGeral>
    );
  }
}
