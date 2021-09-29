import axios from "axios";
import React from "react";
import styled from "styled-components";
import { url, headers } from "../components/Constants";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const DivCard = styled.div`
  background-color: #fffffe;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  height: 35em;
  width: 48em;
  padding: 25px;
  border-radius: 22px;
`;

const LeftSide = styled.div`
  background-color: #b8c1ec;
  color: #121629;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 25px;
  border-radius: 8px;
`;

const RightSide = styled.div`
  background-color: #fffffe;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin: 0 auto;
`;

const Forms = styled.form`
  /* background-color: #fbf0ef; */

  h3 {
    text-align: center;
    color: #121629;
  }

  div {
    /* width: 320px;*/
    /* background-color: black; */
    margin-bottom: 15px;
  }

  input {
    font-size: 1.2rem;
    padding: 10px 10px;
    width: 100%;
    outline: 0;
    border: none;
    border-bottom: 4px solid #b8c1ec;
    color: #bdbdbd;
  }

  button {
    margin: 25px 0;
    font-size: 1rem;
    padding: 0.8em 3.2em;
    cursor: pointer;
    background-color: #eebbc3;
    color: #232946;
    font-weight: 700;
    border: none;
    outline: 0;
    color: #232946;
    border-radius: 6px;
    transition: all 0.2s ease-in 50ms;
    &:hover {
      background-color: #f6dde1;
      transition: all 0.2s ease-out 50ms;
    }
  }
`;

const DivCadastro = styled.div`
  text-align: center;
`;

export default class Form extends React.Component {
  state = {
    titulo: "",
    descricao: "",
    preco: "",
    metodoDePagamento: [],
    dataInicio: "",
  };

  handleTitulo = (event) => {
    this.setState({ titulo: event.target.value });
    console.log("titulo");
  };

  handleDescricao = (event) => {
    this.setState({ descricao: event.target.value });
    console.log("descr");
  };

  handlePreco = (event) => {
    this.setState({ preco: event.target.value });
    console.log("preço");
  };

  handleMetodoDePagamento = (event) => {
    let value = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    this.setState({ metodoDePagamento: value });
    console.log("Cliquei!");
  };

  handleDataInicio = (event) => {
    this.setState({ dataInicio: event.target.value });
    console.log("datainicio");
  };

  cadastrarApi = (event) => {
    event.preventDefault();
    const body = {
      title: this.state.titulo,
      description: this.state.descricao,
      price: Number(this.state.preco),
      paymentMethods: this.state.metodoDePagamento,
      dueDate: this.state.dataInicio,
    };

    axios
      .post(`${url}/jobs`, body, headers)
      .then((res) => {
        this.setState({
          titulo: "",
          descricao: "",
          preco: "",
          metodoDePagamento: [],
          dataInicio: "",
        });

        this.props.getAllJobs();
        alert("Deu certo!");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(err);
      });
  };

  render() {
    return (
      <Div>
        <DivCard>
          <LeftSide>
            <p>
              Cadastre seu serviço na LabeNinjas e tenha mais chances de ser um
              Ninha
            </p>
          </LeftSide>

          <RightSide>
            <Forms onSubmit={this.cadastrarApi}>
              <h3>Preencha o formulário</h3>

              <div>
                <input
                  type="text"
                  placeholder="Título"
                  value={this.state.titulo}
                  onChange={this.handleTitulo}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Descrição"
                  value={this.state.descricao}
                  onChange={this.handleDescricao}
                />
              </div>

              <div>
                <input
                  type="number"
                  placeholder="Preço"
                  value={this.state.preco}
                  onChange={this.handlePreco}
                />
              </div>

              <label>
                Forma de pagamento:
                <select
                  multiple
                  value={this.state.metodoDePagamento}
                  onChange={this.handleMetodoDePagamento}
                >
                  <option>Cartão de Crédito</option>
                  <option>Cartão de Débito</option>
                  <option>Boleto Bancário</option>
                  <option>PayPal</option>
                  <option>Pix</option>
                  <option>Bitcoin</option>
                </select>
              </label>

              <input
                type="date"
                value={this.state.dataInicio}
                onChange={this.handleDataInicio}
              />

              <DivCadastro>
                <button type="submit">Cadastrar</button>
              </DivCadastro>
            </Forms>
          </RightSide>
        </DivCard>
      </Div>
    );
  }
}
