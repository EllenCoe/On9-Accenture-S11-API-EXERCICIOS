const express = require("express");

const router = express.Router();

router.get("/", function (req, resp) {
  resp.status(200).send({
    titulo: "Projeto TO-DO",
    versao: "1.0.0",
  });
});

module.exports = router;
