import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../../config/database";
import Cliente from "../../cliente/model/clienteModel";

interface HistoricoAttributes {
  idHistorico: number;
  observacaoHistorico: string;
  dataHistorico: Date;
  client: string;
}

interface HistoricoCreationAttributes
  extends Optional<HistoricoAttributes, "idHistorico"> {}

class Historico
  extends Model<HistoricoAttributes, HistoricoCreationAttributes>
  implements HistoricoAttributes
{
  public idHistorico!: number;
  public observacaoHistorico!: string;
  public dataHistorico!: Date;
  public client!: string;
}

Historico.init(
  {
    idHistorico: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    observacaoHistorico: {
      type: DataTypes.STRING(100),
    },
    dataHistorico: {
      type: DataTypes.DATE,
    },
    client: {
      type: DataTypes.STRING(14),
      references: {
        model: Cliente,
        key: "cpfCnpjClient",
      },
    },
  },
  {
    sequelize,
    tableName: "historico",
    timestamps: false,
  }
);

Historico.belongsTo(Cliente, { foreignKey: "client" });

export default Historico;
