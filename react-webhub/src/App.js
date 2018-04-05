import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './component/Card'

class App extends Component {
  'use strict'
  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  UNSAFE_componentWillMount() {
    fetch('http://apis.webhub.com.br/iconic-pcs/modelos')
      .then(data => data.json())
      .then(items => {
        this.setState({ items })
      });
  }

  renderItem(item) {
    const { id, nome, sistema_operacional, ano_lancamento, image } = item;

    return (
      <Card
        id={ id }
        nome={ nome }
        sistema={ sistema_operacional }
        ano={ ano_lancamento }
        image={ image }
      />
    );
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        { this.state.items.map(this.renderItem) }

      </div>
    );
  }
}

export default App;
