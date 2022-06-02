import React, { useState } from 'react';
import Item from './Item/Item';
import style from './Lista.module.scss';

function Lista() {
    const [tarefas, setTarefas] = useState([
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
    ]);
  return (
    <aside className={style.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefas.map((item, index) =>(
            <Item
            key={index}
            {...item}
            />
            ))}
        </ul>
    </aside>
  )
}

export default Lista;