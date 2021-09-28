import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { url, key } from './components/Constants'
import ListaDeServicos from './components/ListaDeServicos';
import DetalhesDoJob from './components/DetalhesDoJob';

const ContainerGeral = styled.div`
	box-sizing: border-box;
`

export default class App extends Component {

	state={
		listaDeServicos:[
		],
		paginaEscolhida: "home",
		inputBuscaListaDeServicos: '',
		inputFiltroValorMinimo: '',
		InputFiltroValorMaximo: '',
		inputFiltroTituloOuDescricao: '',
		filtroOrdenacao: '',

		jobEscolhido: [

		],
	};

	getAllJobs = async () =>{

		console.log(url + "/jobs")

		await axios.get((url + "/jobs"), key,
		).then((response) => {
			console.log(response)
			this.setState({ listaDeServicos: response.data.jobs })
		}).catch((error) => {
			alert(error)
		})
	};

	componentDidMount = () => {
		this.getAllJobs()
	};

	onChangeInputBuscaListaDeServicos = (event) =>{
		this.setState({ inputBuscaListaDeServicos: event.target.value })
	}

	funcaoDePesquisarComFiltro = (pesquisa) =>{
		return pesquisa
	}

	pesquisarServicoNaLista = (pesquisa) =>{
		// funcaoDePesquisarComFiltro(pesquisa)
		this.setState({ inputBuscaListaDeServicos: ''})
	}

	randomLink = () =>{
        const number = Math.floor(Math.random() * 100);
        const link = "https://picsum.photos/200/150?random="
        return (link + number)
    }

	formatarStringParaData(data) {
		let dia  = data.split("/")[2];
		let mes  = data.split("/")[1];
		let ano  = data.split("/")[0];
		
		console.log(dia + "/" + mes + "/" + ano)
		return (dia + "/" + mes + "/" + ano)
	}

	entrarNosDetalhesDoJobEscolhido = (job) => {

		this.setState({ jobEscolhido: job })
		this.setState({ paginaEscolhida: 2})
		console.log("esse é o job", this.state.jobEscolhido)

	}

	adicionarCarrinho = () =>{
		console.log("adicionar carrinho")
	}

	paginaAtual = (valorDaPagina) => {
		switch(this.state.paginaEscolhida){
			case "home": return (
				<ListaDeServicos
				listaDeServicos = {this.state.listaDeServicos}
				paginaEscolhida = {this.state.paginaEscolhida}
				inputBuscaListaDeServicos = {this.state.inputBuscaListaDeServicos}
				inputFiltroValorMinimo = {this.state.inputFiltroValorMinimo}
				InputFiltroValorMaximo = {this.state.InputFiltroValorMaximo}
				inputFiltroTituloOuDescricao = {this.state.inputFiltroTituloOuDescricao}
				filtroOrdenacao = {this.state.filtroOrdenacao}
				entrarNosDetalhesDoJobEscolhido = {this.entrarNosDetalhesDoJobEscolhido}
				randomLink = {this.randomLink}
				adicionarCarrinho = {this.adicionarCarrinho}
				paginaAtual = {this.paginaAtual}
				/>
			);
			case "detalhesDoJob": return (
				<DetalhesDoJob
				jobEscolhido = {this.state.jobEscolhido}
				paginaAtual = {this.state.paginaAtual}
				/>
			);
			
		};
	}
	
	DetalhesDoJob

	render() {
		
		return (
			<ContainerGeral>
				{this.paginaAtual()}
			</ContainerGeral>
		)
	}
}

