import React, { Component } from 'react';

class Card extends Component {
  'use strict'
  
  render() {
    return (
      <div className="col-md-3 col-sm-6">
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
              { this.props.sistema_operacional }/{ this.props.ano_lancamento }
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;