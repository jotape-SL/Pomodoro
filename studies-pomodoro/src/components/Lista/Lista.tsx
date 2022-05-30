import React from 'react';
import './Lista.scss';

function Lista() {
    const tarefas = [
        {
            tarefa: 'React',
            tempo: '02:00:00'
        },
        {
            tarefa: 'JavaScript',
            tempo: '01:30:00'
        },
        {
            tarefa: 'Python',
            tempo: '03:30:00'
        }
    ]
  return (
    <aside className='listaTarefas'>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefas.map((item, index) =>(
            <li className='item'>
                <h3>{item.tarefa}</h3>
                <span>{item.tempo}</span>
            </li>
            ))}
        </ul>
    </aside>
  )
}

export default Lista;