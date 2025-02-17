import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../../config/database";

interface EmpresaAttributes {
  idEmpresa: number;
  nomeEmpresa: string;
  cnpjEmpresa: string;
  statusEmpresa?: number;
}

interface EmpresaCreationAttributes
  extends Optional<EmpresaAttributes, "idEmpresa" | "statusEmpresa"> {}

class Empresa
  extends Model<EmpresaAttributes, EmpresaCreationAttributes>
  implements EmpresaAttributes
{
  public idEmpresa!: number;
  public nomeEmpresa!: string;
  public cnpjEmpresa!: string;
  public statusEmpresa!: number;
}

Empresa.init(
  {
    idEmpresa: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nomeEmpresa: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    cnpjEmpresa: {
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: true,
    },
    statusEmpresa: {
      type: DataTypes.TINYINT,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    tableName: "empresa",
    timestamps: false,
  }
);

export default Empresa;
