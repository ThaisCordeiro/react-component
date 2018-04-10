import React, { Component } from 'react';
import './App.css';
import Card from './component/Card';
import OrderType from './component/OrderType'
import OrderReverse from './component/OrderReverse';

class App extends Component {
  'use strict'

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      reversed: false
    }

    this.renderItem = this.renderItem.bind(this);

    this.compare = this.compare.bind(this);
    this.itemSort = this.itemSort.bind(this);
    
    this.itemReverse = this.itemReverse.bind(this);
  }

  UNSAFE_componentWillMount() {
    this.renderItem();
  }

  renderItem() {
    fetch('http://apis.webhub.com.br/iconic-pcs/modelos')
      .then(data => data.json())
      .then((result) => {
        let items = result.map((item) => {
          const { id, nome, sistema_operacional, ano_lancamento, image } = item;

          return (
            <Card
              key={id}
              nome={nome}
              sistema_operacional={sistema_operacional}
              ano_lancamento={ano_lancamento}
              image={image}
            />
          );
        })
      
        this.setState({ items })
      
      });
  }


  compare(actual,next) {

    var result;

    if(typeof actual === 'string' && typeof next === 'string') {
      actual = actual.toLowerCase();
      next = next.toLowerCase();
      result = (actual < next) ? -1 : (actual > next) ? 1 : 0;
      
    }
    else if(typeof actual === 'number' && typeof next === 'number') {
      result = actual - next;
    }
    return result;
  }

  itemSort(value) {
    this.setState({
      items: this.state.items.sort((actual, next) => this.compare(actual.props[value], next.props[value]))}
    );  
  }

  itemReverse(value) {
    this.setState({ items: value ? this.state.items.reverse() : this.itemSort() });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <OrderType  
            onReversed={ reversed => this.setState({reversed})} 
            itemSort = { this.itemSort }
          />

          <OrderReverse
            itemReverse= { this.itemReverse } 
          />
        </header>

        <div className="container">
          <div className="row">
            {this.state.items}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
