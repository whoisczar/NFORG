import express from "express";
import dotenv from "dotenv"; // Para carregar variáveis de ambiente
import sequelize from "./config/database"; // Importa a configuração do Sequelize
import app from "./app"; // Importa o app.ts (com a configuração do banco e modelos)

dotenv.config(); // Carrega as variáveis do arquivo .env

// Testa a conexão com o MySQL usando o Sequelize
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados MySQL estabelecida com sucesso!");

    // Se a conexão for bem-sucedida, inicie o servidor
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados MySQL:", err);
    process.exit(1); // Encerra o processo caso a conexão falhe
  });
