import express from "express";
import cors from "cors";
import LivrosController from "./Controllers/LivrosController.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", LivrosController.getAllLivros);
app.get("/genero", LivrosController.getByGeneros);
app.get("/ano", LivrosController.getByAno);
app.get("/listtenplus", LivrosController.getListarDezMais);
app.get("/listtenless", LivrosController.getListarDezMenos);
app.get("/isbn", LivrosController.getByISBN);

const PORT = 3030;

app.listen(PORT, () => {
  console.log("Servidor rodando: http://localhost:3030");
});
