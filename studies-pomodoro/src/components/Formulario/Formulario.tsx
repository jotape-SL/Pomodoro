import React  from 'react'
import Botao  from '../Botao/Botao';
import style from './Formulario.module.scss';

export class Formulario extends React.Component {
    
    state = {
        tarefa:"",
        tempo:"00:00",        
    };

    adicionarTarefa(evento:React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
    }

  render() {
    return (
        <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
            <div className={style.inputContainer}>
                <label htmlFor="tarega">Adicione um novo estudo</label>
                <input 
                    type="text"
                    name='tarefa'
                    id='tafera' 
                    value={this.state.tarefa}
                    onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                    placeholder='O que voce quer estudar'
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">tempo</label>
                <input 
                    type="time"
                    step="1"
                    name='tepo'
                    id='tempo'
                    value={this.state.tempo}
                    onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Botao>
                Adicionar
            </Botao>
        </form>
    )
  }
}

export default Formulario