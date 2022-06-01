import React from 'react';
import style from './Botao.module.scss';

export class Botao extends React.Component<any> {
  render() {
    return (
      <button className={style.botao}>
        {this.props.children}
      </button>
    )
  }
}

export default Botao