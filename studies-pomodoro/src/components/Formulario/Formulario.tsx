import React, { useState }  from 'react'
import { Itarefa } from '../../types/tarefas';
import Botao  from '../Botao/Botao';
import style from './Formulario.module.scss';
import {v4 as uuidv4} from "uuid";

interface Props{
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}

function Formulario({setTarefas}: Props ){
    const [tarefa, setTarefa] = useState("")
    const [tempo, setTempo] = useState("00:00")
    function adicionarTarefa(evento:React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setTarefas(tarefasAntigas => 
            [...tarefasAntigas, 
            {
                tarefa,
                tempo,
                selecionado: false,   
                completado: false,
                id: uuidv4()
            }]);
        setTarefa("");
        setTempo("00:00");
    }
    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input 
                    type="text"
                    name='tarefa'
                    id='tafera' 
                    value={tarefa}
                    onChange={evento => setTarefa(evento.target.value)}
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
                    value={tempo}
                    onChange={evento => setTempo(evento.target.value)}
                    min="00:00:00"
                    max="01:40:00"
                    required
                />
            </div>
            <Botao type="submit">
                Adicionar
            </Botao>
        </form>
    )
}

export default Formulario;  
