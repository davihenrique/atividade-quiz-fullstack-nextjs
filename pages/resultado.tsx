import Botao from "../components/Botao";
import Estatistica from "../components/Estatistica";
import styles from "../styles/Resultado.module.css";
import { useRouter } from "next/router";

export default function resultado() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const total = +router.query.total;
  const certas = +router.query.certas;
  const percentual = Math.round((certas / total) * 100);

  return (
    <div className={styles.resultado}>
      <h1>Resultado Final</h1>
      <div style={{ display: "Flex" }}>
        <Estatistica texto="Perguntas" valor={total} />
        <Estatistica texto="Certas" valor={certas} corFundo="#9CD2A4" />
        <Estatistica
          texto="Percentual"
          valor={`${percentual}%`}
          corFundo="#DE6A33"
        />
      </div>
      <Botao href="/" texto="Tentar Novamente" />
    </div>
  );
}
