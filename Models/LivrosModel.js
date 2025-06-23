import { Schema, model } from "mongoose";

const LivroSchema = new Schema({
  titulo: String,
  autor: String,
  ano_publicacao: Date,
  genero: String,
  numero_paginas: Number,
  sinopse: String,
  isbn: String,
});

const Livros = model("Livro", LivroSchema);

export default Livros;
