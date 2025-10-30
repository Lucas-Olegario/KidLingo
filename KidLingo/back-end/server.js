// backend/server.js
import express from "express";
import cors from "cors";
import { db } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

// Rota para buscar lições por idioma
app.get("/licoes/:idioma", (req, res) => {
  const idioma = req.params.idioma;

  const query = "SELECT * FROM licoes WHERE idioma = ?";
  db.query(query, [idioma], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao buscar lições" });
    } else {
      res.json(results);
    }
  });
});

app.listen(3000, () => {
  console.log("🚀 Servidor rodando em http://localhost:3000");
});
