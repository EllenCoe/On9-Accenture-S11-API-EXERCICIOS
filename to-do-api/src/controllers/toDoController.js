const tarefasModels = require("../models/tarefas.json");

const getAll = (req, resp) => {
  resp.status(200).send(tarefasModels);
};

const criarTarefa = (req, resp) => {
  const { descricao, nomeColaborador } = req.body;

  const novaTarefa = {
    id: Math.random().toString(32).substr(2, 8),
    dataInclusao: new Date().toString(),
    concluido: false,
    descricao: descricao,
    nomeColaborador: nomeColaborador,
  };
  tarefasModels.push(novaTarefa);

  resp.status(201).json(novaTarefa);
};

const deletarTarefa = (req, resp) => {
  const { id } = req.params;

  const index = tarefasModels.findIndex((tarefa) => tarefa.id == id);

  const tarefa = tarefasModels[index];

  if (tarefa.concluido) {
    resp.status(500).send({
      message: "Não é possível excluir uma tarefa concluida!",
    });
  } else {
    if (index >= 0) {
      tarefasModels.splice(index, 1);
      resp.status(200).send({
        message: "Tarefa deletada com sucesso!",
      });
    } else {
      resp.status(404).send({
        message: "Tarefa não encontrada.",
      });
    }
  }
};

const atualizarTarefa = (req, resp) => {
  const { id } = req.params;
  const { descricao, nomeColaborador, concluido } = req.body;

  const tarefa = tarefasModels.find((tarefa) => tarefa.id == id);

  if (tarefa.concluido) {
    resp.status(500).send({
      message: "Não é possível atualizar uma tarefa concluida!",
    });
  } else {
    const tarefaAtualizada = {
      id: tarefa.id,
      dataInclusao: tarefa.dataInclusao,
      concluido: concluido,
      descricao: descricao,
      nomeColaborador: nomeColaborador,
    };

    const index = tarefasModels.findIndex((tarefa) => tarefa.id == id);

    tarefasModels[index] = tarefaAtualizada;

    resp.status(200).json(tarefasModels[index]);
  }
};

const concluirTarefa = (req, resp) => {
  const { id } = req.params;

  const tarefa = tarefasModels.find((tarefa) => tarefa.id == id);

  tarefa.concluido = true;

  resp.status(200).json({
    message: "Tarefa concluida",
    tarefa,
  });
};
module.exports = {
  getAll,
  criarTarefa,
  deletarTarefa,
  atualizarTarefa,
  concluirTarefa,
};
