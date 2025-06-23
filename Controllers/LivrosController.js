import Livro from "../Models/LivrosModel.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connect = mongoose.connect(process.env.MONGO_URI);

class LivrosController {
  static async getAllLivros(req, res) {
    try {
      const livros = await Livro.find();
      res.json(livros);
    } catch (err) {
      console.error("Erro ao buscar todos os livros:", err);
      res
        .status(500)
        .json({ error: "Erro interno do servidor ao buscar livros." });
    }
  }

  static async getByGeneros(req, res) {
    try {
      const generos = await Livro.find({}, { genero: 1, _id: 0 });
      res.json(generos);
    } catch (err) {
      console.error("Erro ao buscar gêneros:", err);
      res
        .status(500)
        .json({ error: "Erro interno do servidor ao buscar gêneros." });
    }
  }

  static async getByAno(req, res) {
    try {
      const anos = await Livro.find({}, { ano_publicacao: 1, _id: 0 });
      res.json(anos);
    } catch (err) {
      console.error("Erro ao buscar anos:", err);
      res.status(500).json({
        error: "Erro interno do servidor ao buscar anos de publicação.",
      });
    }
  }

  static async getListarDezMais(req, res) {
    try {
      const dezLivros = await Livro.find()
        .sort({ numero_paginas: -1 })
        .limit(10);
      res.json(dezLivros);
    } catch (err) {
      console.error("Erro ao listar os dez livros com mais páginas:", err);
      res.status(500).json({
        error:
          "Erro interno do servidor ao listar os dez livros com mais páginas.",
      });
    }
  }

  static async getListarDezMenos(req, res) {
    try {
      const dezLivros = await Livro.find()
        .sort({ numero_paginas: 1 })
        .limit(10);
      res.json(dezLivros);
    } catch (err) {
      console.error("Erro ao listar os dez livros com menos páginas:", err);
      res.status(500).json({
        error:
          "Erro interno do servidor ao listar os dez livros com menos páginas.",
      });
    }
  }

  static async getByISBN(req, res) {
    try {
      const { isbn } = req.params;
      const livro = await Livro.findOne({ isbn: isbn });
      if (!livro) {
        return res.status(404).json({ message: "Livro não encontrado." });
      }
      res.json(livro);
    } catch (err) {
      console.error("Erro ao buscar livro por ISBN:", err);
      res
        .status(500)
        .json({ error: "Erro interno do servidor ao buscar livro por ISBN." });
    }
  }
}

export default LivrosController;
