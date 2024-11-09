import db from "../db.js";

export const getTasks = (_, res) => {
  const qry = "SELECT * FROM task";

  db.query(qry, (err, data) => {
    if (err) return res.json(err); 
    return res.status(200).json(data);
  });
};

export const createTask = (req, res) => {
  const qry =
    "INSERT INTO task(name, price, deadline, `order`) VALUES(?)"; 

  const values = [
    req.body.name,
    req.body.price,
    req.body.deadline,
    req.body.order,
  ];

  db.query(qry, [values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Tarefa criada!");
  });
};

export const updateTask = (req, res) => {
  const qry =
    "UPDATE task SET name = ?, price = ?, deadline = ?, `order` = ? WHERE id = ?";

  const values = [
    req.body.name,
    req.body.price,
    req.body.deadline,
    req.body.order,
  ];

  db.query(qry, [...values, req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Tarefa atualizada!");
  });
};

export const deleteTask = (req, res) => {
  const qry = "DELETE FROM task WHERE id = ?";

  db.query(qry, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Tarefa apagada!");
  });
};
