const models = require("../../database/models");

export const getAll = async (req, res) => {
  models.usuarios
    .findAll({
        attributes: ["id","nombre"]
    }).then(usuarios => res.send({
      usuarios
      
    })).catch(() => res.sendStatus(500));
};

export const getOne = async (req, res) => {
  const { id } = req.params;
  models.usuarios
    .findByPk(id)
    .then(usuarios => res.send({
      usuarios
    }))
    .catch(() => res.sendStatus(500));
}
