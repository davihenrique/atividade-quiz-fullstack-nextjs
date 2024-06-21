import { embaralhar } from "../../../functions/arrays";
import questoes from "../bancoDeQuestoes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  const ids = questoes.map((q) => q.id);
  res.status(200).json(embaralhar(ids));
};
