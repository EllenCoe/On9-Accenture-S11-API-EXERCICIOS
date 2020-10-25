const express = require("express");

const router = express.Router();

const controller = require("../controllers/toDoController");

router.get("/", controller.getAll);
router.post("/cadastro", controller.criarTarefa);
router.delete("/deletar/:id", controller.deletarTarefa);
router.put("/editar/:id", controller.atualizarTarefa);
router.patch("/naoconcluidas/:id", controller.concluirTarefa);

module.exports = router;
