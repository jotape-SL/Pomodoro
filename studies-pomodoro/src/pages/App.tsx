import React, { useState } from 'react';
import Cronometro from '../components/Cronometro/Cronometro';
import Formulario from '../components/Formulario/Formulario';
import Lista from '../components/Lista/Lista';
import { Itarefa } from '../types/tarefas';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([])
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
