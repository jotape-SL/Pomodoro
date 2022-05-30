import React  from 'react'
import Botao  from '../Botao/Botao';

export class Formulario extends React.Component {
  render() {
    return (
        <form >
            <div>
                <label htmlFor="tarega">Adicione um novo estudo</label>
                <input 
                    type="text"
                    name='tarefa'
                    id='tafera' 
                    placeholder='O que voce quer estudar'
                    required
                />
            </div>
            <div>
                <label htmlFor="tempo">tempo</label>
                <input 
                    type="time"
                    step="1"
                    name='tepo'
                    id='tempo'
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Botao/>
        </form>
    )
  }
}

export default Formulario