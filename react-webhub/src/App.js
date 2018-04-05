import React, { Component } from 'react';
import './App.css';
import Card from './component/Card';
import OrderType from './component/OrderType'

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
        key={ id }
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
          <OrderType/>
        </header>

        <div className="container">
          <div className="row">
            { this.state.items.map(this.renderItem) }
          </div>                  
        </div>


      </div>
    );
  }
}

export default App;
