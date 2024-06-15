import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Questao from '../components/Questao'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'

export default function Home() {
  const questaoTeste = new QuestaoModel(1, "Melhor cor?", [
    RespostaModel.errada("Verde"),
    RespostaModel.errada("Vermelha"),
    RespostaModel.errada("Azul"),
    RespostaModel.certa("Preta"),
  ]);
  
  return (
    <div style={{display: 'flex',
      justifyContent: 'center',
      alignItems: 'cnter',
      height: '100vh',
    }}>
      <Questao valor={questaoTeste} />
    </div>
  );
}
