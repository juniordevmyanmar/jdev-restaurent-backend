
import { DataTypes, Model, Optional, Sequelize, UUIDV4 } from 'sequelize'
import { BaseModel } from './base'

interface CuisineAttributes {
  id: string
  name: string
  restaurantId: string
  description: string
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

export interface CuisineInput extends Required<CuisineAttributes> { }


class Cuisine extends BaseModel<CuisineAttributes, CuisineInput> implements CuisineAttributes {
  public id!: string
  public name!: string
  public restaurantId!: string
  public description!: string
}

const CuisineModel = (sequelize: Sequelize) => {
  Cuisine.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    timestamps: true,
    sequelize: sequelize,
    modelName: 'Cuisine',
    paranoid: true,
  });
  return Cuisine;
};

export default CuisineModel