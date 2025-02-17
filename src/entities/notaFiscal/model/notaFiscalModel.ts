import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../../config/database";
import Cliente from "../../cliente/model/clienteModel";

interface NotaFiscalAttributes {
  idNotaFiscal: number;
  valorNotaFiscal: number;
  dataNotaFiscal: Date;
  dataNotaCadastrada: Date;
  cpf_cnpj: string;
}

interface NotaFiscalCreationAttributes
  extends Optional<
    NotaFiscalAttributes,
    "idNotaFiscal" | "dataNotaCadastrada"
  > {}

class NotaFiscal
  extends Model<NotaFiscalAttributes, NotaFiscalCreationAttributes>
  implements NotaFiscalAttributes
{
  public idNotaFiscal!: number;
  public valorNotaFiscal!: number;
  public dataNotaFiscal!: Date;
  public dataNotaCadastrada!: Date;
  public cpf_cnpj!: string;
}

NotaFiscal.init(
  {
    idNotaFiscal: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    valorNotaFiscal: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false,
    },
    dataNotaFiscal: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dataNotaCadastrada: {
      type: DataTypes.DATE,
    },
    cpf_cnpj: {
      type: DataTypes.STRING(14),
      allowNull: false,
      references: {
        model: Cliente,
        key: "cpfCnpjClient",
      },
    },
  },
  {
    sequelize,
    tableName: "notaFiscal",
    timestamps: false,
  }
);

NotaFiscal.belongsTo(Cliente, { foreignKey: "cpf_cnpj" });

export default NotaFiscal;
