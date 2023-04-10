import { DataTypes, Model, Optional, Sequelize, UUIDV4 } from 'sequelize'
import { BaseModel } from './base'

interface RestaurantAttributes {
  id: string
  name: string
  address: string
  cusisineType: string
  coverImage?: string
  phone?: string
  website?: string
  description?: string
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

export interface RestaurantInput extends Required<RestaurantAttributes> {}

export class Restaurant extends BaseModel<RestaurantAttributes, RestaurantInput> implements RestaurantAttributes {
  public id!: string
  public name!: string
  public address!: string
  public cusisineType!: string
  public coverImage?: string
  public phone?: string
  public website?: string
  public description?: string
}

const RestaurantModel = (sequelize: Sequelize | null) => {
  if (sequelize !== null) {
    Restaurant.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        address: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        coverImage: DataTypes.STRING,
        phone: DataTypes.STRING,
        website: DataTypes.STRING,
        cuisineId: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        deletedAt: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: 'Restaurant',
        paranoid: true,
        timestamps: true,
      },
    )
    return Restaurant
  }
}

export default RestaurantModel
