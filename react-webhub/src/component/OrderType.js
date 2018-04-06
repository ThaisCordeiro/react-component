import React, { Component } from 'react';

class OrderType extends Component {
  render() {
    return (
      <select>
        <option defaultValue="" disabled selected>Selecione...</option>
        <option defaultValue="nome">Nome</option>
        <option defaultValue="sistema_operacional">Sistema Operacional</option>
        <option defaultValue="ano_lancamento">Ano de Lançamento</option>
      </select>
    );
  }
}

export default OrderType;