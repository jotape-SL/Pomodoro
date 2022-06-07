import { useState } from 'react';
import Cronometro from '../components/Cronometro/Cronometro';
import Formulario from '../components/Formulario/Formulario';
import Lista from '../components/Lista/Lista';
import { Itarefa } from '../types/tarefas';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  const [selecionado, setSelecionado] = useState<Itarefa>();

  function selecionaTarefa(tarefaSelecionada: Itarefa){
    setSelecionado(tarefaSelecionada);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      })));
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
      />
      <Cronometro selecionado = {selecionado}/>
    </div>
  );
}

export default App;
