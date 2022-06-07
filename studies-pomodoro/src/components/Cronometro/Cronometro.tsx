import Botao from "../Botao/Botao"
import Relogio from "./Relogio/Relogio"
import style from './Cronometro.module.scss';
import { Itarefa } from "../../types/tarefas";
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";

interface Props{
  selecionado: Itarefa | undefined
}

function Cronometro({selecionado}: Props) {
  const [tempo, setTempo] = useState<number>(tempoParaSegundos(String(selecionado?.tempo)));
  useEffect(() =>{
    if(selecionado?.tempo){
      setTempo(tempoParaSegundos(selecionado.tempo))
    };
  },[selecionado])
  return (
    <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o cronômetro.</p>
        <div className={style.relogioWrapper}>
            <Relogio tempo={tempo} />
        </div>
        <Botao>
            Começar!
        </Botao>
    </div>
  )
}

export default Cronometro
