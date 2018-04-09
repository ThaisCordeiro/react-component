import React, { Component } from 'react';

class OrderReverse extends Component {
  'use strict'

  constructor() {
    super();
    this.state = {
      value: false
    }

    this.orderReverse = this.orderReverse.bind(this);
  }

  orderReverse({ target }) {
    this.setState({ value: target.value });
    this.props.itemReverse(target.value);
  }

  render() {
    return (
      <select defaultValue={ this.state.value } onChange={ this.orderReverse } >
        <option value="false">Crescente</option>
        <option value="true">Decrescente</option>
      </select >
    );
  }
}

export default OrderReverse;