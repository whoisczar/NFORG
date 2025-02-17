import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../../config/database";
import Empresa from "../../empresa/model/empresaModel";

interface ClienteAttributes {
  cpfCnpjClient: string;
  nomeClient: string;
  emailClient: string;
  senhaClient: string;
  cargoClient?: string;
  statusClient?: number;
  empresa?: number;
}

interface ClienteCreationAttributes
  extends Optional<
    ClienteAttributes,
    "cargoClient" | "statusClient" | "empresa"
  > {}

class Cliente
  extends Model<ClienteAttributes, ClienteCreationAttributes>
  implements ClienteAttributes
{
  public cpfCnpjClient!: string;
  public nomeClient!: string;
  public emailClient!: string;
  public senhaClient!: string;
  public cargoClient!: string;
  public statusClient!: number;
  public empresa!: number;
}

Cliente.init(
  {
    cpfCnpjClient: {
      type: DataTypes.STRING(14),
      primaryKey: true,
    },
    nomeClient: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    emailClient: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    senhaClient: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cargoClient: {
      type: DataTypes.STRING(45),
    },
    statusClient: {
      type: DataTypes.TINYINT,
      defaultValue: 1,
    },
    empresa: {
      type: DataTypes.INTEGER,
      references: {
        model: Empresa,
        key: "idEmpresa",
      },
    },
  },
  {
    sequelize,
    tableName: "client",
    timestamps: false,
  }
);

Cliente.belongsTo(Empresa, { foreignKey: "empresa" });

export default Cliente;
