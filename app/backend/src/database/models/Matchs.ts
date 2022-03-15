import { Model } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class Matchs extends Model {
  public id: number;

  public homeTeam: string;

  public homeTeamGoals: number;

  public awayTeam: string;

  public awayTeamGoals: number;

  public inProgress: string;
}

Matchs.init({
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Example.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Matchs;
