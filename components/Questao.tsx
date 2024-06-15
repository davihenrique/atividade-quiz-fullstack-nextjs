import styles from '../styles/Questao.module.css'
import QuestaoModel from "../model/questao";
import Resposta from './Resposta';

interface QuestaoProps{
    valor: QuestaoModel
}

export default function Questao(props: QuestaoProps) {
    const questao = props.valor

    function rederizarRespostas(){
        return questao.respostas.map((resposta, i) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Resposta
              valor={resposta}
              indice={i}
              letra="A"
              corLetra="#F2C866"
            />
          );
        });
    }

    return (
      <div className={styles.questao}>
        <h1>Questao</h1>
        {rederizarRespostas()}
      </div>
    );

}