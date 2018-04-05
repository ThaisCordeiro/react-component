import React, { Component } from 'react';

class Card extends Component {
  'use strict'
  render() {
    return (
      <div className="card">
        <figure className="card-image" 
          style={{ backgroundImage:`url(${ this.props.image })` }}>
        </figure>

        <div className="card-body">
          <h5 className="card-title">
            { this.props.nome }
          </h5>

          <p>
            <span>
              Sistema Operacional/Ano:
            </span>
            { this.props.sistema }/{ this.props.ano }
          </p>
        </div>
      </div>
    );
  }
}

export default Card;