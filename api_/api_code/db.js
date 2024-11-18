import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createConnection({
  host: "autorack.proxy.rlwy.net",
  user: "root",
  password: "BTTDOCzrVxzBDIKJFqPskqFTQPKpBsIf",
  database: "railway",
  port: "30948",
});

console.log(
  `Tentando conectar ao banco de dados em autorack.proxy.rlwy.net:30948 com o usuário root`
);

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conectado ao banco de dados.");
});

export default db;
