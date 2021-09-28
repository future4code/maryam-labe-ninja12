<<<<<<< HEAD
import React from "react";
import { AppContainer } from "./components/AppContainer";

function App() {
  return <AppContainer />;
}

export default App;
=======
import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { url, key } from './components/Constants'
import ListaDeServicos from './components/ListaDeServicos';

const ContainerGeral = styled.div`
	box-sizing: border-box;
`

export default class App extends Component {

	state={
		listaDeServicos:[
		],
		inputBuscaListaDeServicos: '',
		inputFiltroValorMinimo: '',
		InputFiltroValorMaximo: '',
		inputFiltroTituloOuDescricao: '',
		filtroOrdenacao: '',
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

	render() {
		
		return (
			<ContainerGeral>
				<ListaDeServicos
				inputBuscaListaDeServicos = {this.state.inputBuscaListaDeServicos}
				pesquisarServicoNaLista = {this.pesquisarServicoNaLista}
				onChangeInputBuscaListaDeServicos = {this.onChangeInputBuscaListaDeServicos}
				funcaoDePesquisarComFiltro ={this.funcaoDePesquisarComFiltro}
				randomLink={this.randomLink}
				listaDeServicos={this.state.listaDeServicos}
				formatarStringParaData = {this.formatarStringParaData}
				/>
			</ContainerGeral>
		)
	}
}

>>>>>>> 768597a900b475dad7ed7918c017908fe2720026
