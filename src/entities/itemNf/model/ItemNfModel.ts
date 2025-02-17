import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../../config/database";
import NotaFiscal from "../../notaFiscal/model/notaFiscalModel";
import Produto from "../../produto/model/produtoModel";

interface ItemNfAttributes {
  idItemNF: number;
  NotaFiscal: number;
  Produto: number;
  valorItemNF: number;
  tipoQtdItemNF: string;
  qtdItemNF: number;
  impostosItemNF?: number;
  valorTotItemNF: number;
}

interface ItemNfCreationAttributes
  extends Optional<ItemNfAttributes, "idItemNF" | "impostosItemNF"> {}

class ItemNf
  extends Model<ItemNfAttributes, ItemNfCreationAttributes>
  implements ItemNfAttributes
{
  public idItemNF!: number;
  public NotaFiscal!: number;
  public Produto!: number;
  public valorItemNF!: number;
  public tipoQtdItemNF!: string;
  public qtdItemNF!: number;
  public impostosItemNF!: number;
  public valorTotItemNF!: number;
}

ItemNf.init(
  {
    idItemNF: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    NotaFiscal: {
      type: DataTypes.INTEGER,
      references: {
        model: NotaFiscal,
        key: "idNotaFiscal",
      },
    },
    Produto: {
      type: DataTypes.INTEGER,
      references: {
        model: Produto,
        key: "idProduto",
      },
    },
    valorItemNF: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false,
    },
    tipoQtdItemNF: {
      type: DataTypes.STRING(10),
    },
    qtdItemNF: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false,
    },
    impostosItemNF: {
      type: DataTypes.DECIMAL(6, 2),
      defaultValue: 0,
    },
    valorTotItemNF: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "itemNf",
    timestamps: false,
  }
);

ItemNf.belongsTo(NotaFiscal, { foreignKey: "NotaFiscal" });
ItemNf.belongsTo(Produto, { foreignKey: "Produto" });

export default ItemNf;
