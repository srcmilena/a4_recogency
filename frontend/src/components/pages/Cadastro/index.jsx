import React, { Component } from 'react'
import './style.css'
class Cadastro extends Component {
  state = {
    model: {
      id: 0,
      nome: '',
      origem: '',
      destino: '',
      saida: '',
      retorno: '',
      preco: 0,
    },
  }

  setValues = (e, field) => {
    const { model } = this.state
    model[field] = e.target.value
    this.setState({ model })
    console.log(this.state.model)
  }

  create = (e) => {
    this.setState({
      model: {
        id: 0,
        nome: '',
        origem: '',
        destino: '',
        saida: '',
        retorno: '',
        preco: 0,
      },
    })
    this.props.clienteCreate(this.state.model)
  }

  componentWillMount() {
    PubSub.subscribe('edit-cliente', (topic, cliente) => {
      this.setState({ model: cliente })
    })
  }

  render() {
    return (
      <div className="mform">
        <h1 className="primary-color display-6 text-center fw-bold my-5">
          Cadastro
        </h1>
        <main class="main-pags">
          <form id="contForm">
            <label>Nome: </label>
            <br />
            <input
              class="input"
              type="nome"
              value={this.state.model.nome}
              onChange={(e) => this.setValues(e, 'nome')}
            />
            <br />

            <label>Destino: </label>
            <br />
            <input
              class="input"
              type="destino"
              value={this.state.model.destino}
              onChange={(e) => this.setValues(e, 'destino')}
            />
            <br />

            <label>Origem: </label>
            <br />
            <input
              class="input"
              type="origem"
              value={this.state.model.origem}
              onChange={(e) => this.setValues(e, 'origem')}
            />
            <br />

            <label>Saída: </label>
            <br />
            <input
              class="input"
              type="nome"
              value={this.state.model.saida}
              onChange={(e) => this.setValues(e, 'saida')}
            />
            <br />

            <label>Retorno: </label>
            <br />
            <input
              class="input"
              type="retorno"
              value={this.state.model.retorno}
              onChange={(e) => this.setValues(e, 'retorno')}
            />
            <br />

            <label>Preço: </label>
            <br />
            <input
              class="input"
              type="preco"
              value={this.state.model.preco}
              onChange={(e) => this.setValues(e, 'preco')}
            />
            <br />

            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.create}
            >
              Gravar
            </button>
          </form>
        </main>
      </div>
    )
  }
}

class ListCliente extends Component {
  delete = (id) => {
    this.props.deleteCliente(id)
  }

  onEdit = (cliente) => {
    PubSub.publish('edit-cliente', cliente)
  }

  render() {
    const { clientes } = this.props

    return (
      <div>
        <h2 className="text-center mb-4">Lista de clientes</h2>
        <div className="table-wrapper">
          <table className="fl-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Destino</th>
                <th>Origem</th>
                <th>Saida</th>
                <th>Retorno</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>

              {clientes.map((cliente) => (
                <tr key={cliente.id}>
                  <td>{cliente.nome}</td>
                  <td>{cliente.destino}</td>
                  <td>{cliente.origem}</td>
                  <td>{cliente.saida}</td>
                  <td>{cliente.retorno}</td>
                  <td>{`R$ ${cliente.preco}`}</td>
                  <td className="pt-2">
                    <button
                      className="btn btn-info text-white"
                      onClick={(e) => this.onEdit(cliente)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={(e) => this.delete(cliente.id)}
                    >
                      <i className="bi bi-trash3-fill"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default class ProductBox extends Component {
  Url = 'http://localhost:8080/cliente'

  state = {
    clientes: [],
  }

  componentDidMount() {
    fetch(this.Url)
      .then((response) => response.json())
      .then((clientes) => this.setState({ clientes }))
      .catch((e) => console.log(e))
  }

  create = (cliente) => {
    let data = {
      id: parseInt(cliente.id),
      nome: cliente.nome,
      origem: cliente.origem,
      destino: cliente.destino,
      saida: cliente.saida,
      retorno: cliente.retorno,
      preco: parseFloat(cliente.preco),
    }
    const requestInfo = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-type': 'application/json',
      }),
    }
    if (data.preco !== 0 && data.nome !== '' && data.origem !== '' && data.destino !== '' && data.saida !== '' && data.retorno !== '') {
      fetch('http://localhost:8080/cliente/salvar', requestInfo)
        .then((response) => response.json())
        .then((newCliente) => console.log(newCliente))
        .catch((e) => console.log(e))
    } else {
      alert('Informar todos os campos!')
      return
    }
  }

  delete = (id) => {
    fetch(`http://localhost:8080/cliente/deletar/${id}`, { method: 'DELETE' })
      .then((rows) => {
        const clientes = this.state.clientes.filter(
          (cliente) => cliente.id !== id,
        )
        this.setState({ clientes })
      })
      .catch((e) => console.log(e))
  }

  render() {
    return (
      <div className="row destinos-action-container">
        <div className="">
          <Form clienteCreate={this.create} />
        </div>
        <div className="">
          <ListCliente
            clientes={this.state.clientes}
            deleteCliente={this.delete}
          />
        </div>
      </div>
    )
  }
}

/*class Cadastro extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            nome: '',
            origem: '',
            destino: '',
            saida: '',
            retorno: '',
            preco: ''
        }
        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeOrigemHandler = this.changeOrigemHandler.bind(this);
        this.changeDestinoHandler = this.changeDestinoHandler.bind(this);
        this.changeSaidaHandler = this.changeSaidaHandler.bind(this);
        this.changeRetornoHandler = this.changeRetornoHandler.bind(this);
        this.changePrecoHandler = this.changePrecoHandler.bind(this);
        this.saveOrUpdateCliente = this.saveOrUpdateCliente.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ClienteService.getClienteById(this.state.id).then( (res) =>{
                let cliente = res.data;
                this.setState({
                    nome: cliente.nome,
                    origem: cliente.origem,
                    destino: cliente.destino,
                    saida: cliente.saida,
                    retorno: cliente.retorno,
                    preco: cliente.preco
                });
            });
        }        
    }
    saveOrUpdateCliente = (e) => {
        e.preventDefault();
        let cliente = {nome: this.state.nome, origem: this.state.origem, destino: this.state.destino, saida: this.state.saida, retorno: this.state.retorno, preco: this.state.preco};
        console.log('cliente => ' + JSON.stringify(cliente));

        // step 5
        if(this.state.id === '_add'){
            ClienteService.createCliente(cliente).then(res =>{
                this.props.history.push('/clientes');
            });
        }else{
            ClienteService.updateCliente(cliente, this.state.id).then( res => {
                this.props.history.push('/clientes');
            });
        }
    }
    
    changeNomeHandler= (event) => {
        this.setState({nome: event.target.value});
    }

    changeCpfHandler= (event) => {
        this.setState({cpf: event.target.value});
    }

    changeTelefoneHandler= (event) => {
        this.setState({telefone: event.target.value});
    }

    cancel(){
        this.props.history.push('/clientes');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center primary-color">Adicionar</h3>
        }else{
            return <h3 className="text-center primary-color">Editar</h3>
        }
    }
    render() {
        return (
            <div className='alturaTela'>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>

                                            <label>Nome: </label><br />
                                            <input class="input" type="nome" value={this.state.nome} onChange={this.changeNomeHandler} /><br />

                                            <label>Origem: </label><br />
                                            <input class="input" type="origem" value={this.state.origem} onChange={this.changeOrigemHandler} /><br />

                                            <label>Destino: </label><br />
                                            <input class="input texto" type="destino" value={this.state.destino} onChange={this.changeDestinoHandler} /><br />

                                            <label>Saída: </label><br />
                                            <input class="input" type="saida" value={this.state.saida} onChange={this.changeSaidaHandler} /><br />

                                            <label>Retorno: </label><br />
                                            <input class="input" type="retorno" value={this.state.retorno} onChange={this.changeRetornoHandler} /><br />

                                            <label>Preço: </label><br />
                                            <input class="input" type="preco" value={this.state.preco} onChange={this.changePrecoHandler} /><br />

                                        <button className="btn btn-primary my-3" onClick={this.saveOrUpdateCliente}>Salvar</button>
                                        <button className="btn btn-danger my-3" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Voltar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                   </div>
            </div>
        )
    }
}

export default NovaPessoa*/

/*
export default function Cadastro() {

    return ( 
        <>
        <div className="mform">
        <h1 className="primary-color display-6 text-center fw-bold my-5">Cadastro</h1>
        <main class="main-pags">
            <form id="contForm">
                
                    <label>Nome: </label><br />
                    <input class="input" type="nome" /><br />

                    <label>Origem: </label><br />
                    <input class="input" type="origem" /><br />

                    <label>Destino: </label><br />
                    <input class="input texto" type="destino" /><br />

                    <label>Saída: </label><br />
                    <input class="input" type="saida" /><br />

                    <label>Retorno: </label><br />
                    <input class="input" type="retorno" /><br />

                    <label>Preço: </label><br />
                    <input class="input" type="preco" /><br />
            
                        <input id="btn-enviar" type="submit" value="Enviar" />

                    </form>
                    </main>
            </div>
        </>
    );
}
*/
