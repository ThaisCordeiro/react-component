import React, { Component } from 'react';

class OrderType extends Component {
  'use strict'
  constructor() {
    super();
    this.state = {
      value: 'Selecione...',
      reversed: '',
      selected: true
    }

    this.itemChange = this.itemChange.bind(this);
  }

  

  itemChange({ target }) {
    this.setState({value: target.value})
    this.props.itemSort( target.value );
    // this.selected = true;
    // this.reversed = false;
  }
 
 
  // itemReverse ({ target }) {
  //   this.reversed = target.value;
  //   this.selected = !target.value;
  //   this.items = this.reversed ? this.items.reverse() : this.itemSort();
  // }

  
  render() {
    return (
      <select defaultValue={ this.state.value } onChange={ this.itemChange }>
        <option defaultValue="" disabled>Selecione...</option>
        <option value="nome">Nome</option>
        <option value="sistema_operacional">Sistema Operacional</option>
        <option value="ano_lancamento">Ano de Lançamento</option>
      </select>
    );
  }
}

export default OrderType;