import express, { Application } from "express";
import sequelize from "./config/database"; // Conexão com o banco de dados

// Importar os modelos
import Cliente from "./entities/cliente/model/clienteModel";
import Empresa from "./entities/empresa/model/empresaModel";
import Historico from "./entities/historico/model/historicoModel";
import ItemNf from "./entities/itemNf/model/ItemNfModel";
import NotaFiscal from "./entities/notaFiscal/model/notaFiscalModel";
import Produto from "./entities/produto/model/produtoModel";

// Iniciar o app
const app: Application = express();
app.use(express.json());

// Testar a conexão e criar as tabelas
sequelize
  .sync({ alter: true })
  .then(() => console.log("🚀 Banco de dados sincronizado!"))
  .catch((err) => console.error("Erro ao sincronizar banco:", err));

export default app; // Exportando o app para ser usado no server.ts
