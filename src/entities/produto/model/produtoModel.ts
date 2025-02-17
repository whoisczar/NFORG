import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../../config/database";

interface ProdutoAttributes {
  idProduto: number;
  nomeProduto: string;
  eanProduto: string;
  valorProduto: number;
}

interface ProdutoCreationAttributes
  extends Optional<ProdutoAttributes, "idProduto"> {}

class Produto
  extends Model<ProdutoAttributes, ProdutoCreationAttributes>
  implements ProdutoAttributes
{
  public idProduto!: number;
  public nomeProduto!: string;
  public eanProduto!: string;
  public valorProduto!: number;
}

Produto.init(
  {
    idProduto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nomeProduto: {
      type: DataTypes.STRING(45),
    },
    eanProduto: {
      type: DataTypes.STRING(13),
    },
    valorProduto: {
      type: DataTypes.DECIMAL(6, 2),
    },
  },
  {
    sequelize,
    tableName: "produto",
    timestamps: false,
  }
);

export default Produto;
