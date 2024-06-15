import questoes from "../bancoDeQuestoes";

export default function handler(req, res) {
  const idSelcionado = +req.query.id

  const unicaQuestaoOuNada =  questoes.filter(q => q.id === idSelcionado)

  if (unicaQuestaoOuNada.length === 1){
      const questaoSlecionada = unicaQuestaoOuNada[0].embaralharRespostas();
      res.status(200).json(questaoSlecionada.paraObjeto());
  } else {
    res.status(204).send()
  }
}
