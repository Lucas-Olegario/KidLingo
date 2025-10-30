// backend/db.js
import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",       // coloque seu usuário MySQL
  password: "123456",       // coloque sua senha MySQL
  database: "KidLingo"
});

db.connect(err => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
    return;
  }
  console.log("✅ Conectado ao MySQL com sucesso!");
});
