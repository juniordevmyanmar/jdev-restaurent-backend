import { DataTypes, Model, Optional, Sequelize, UUIDV4 } from 'sequelize'
import { BaseModel } from './base'

export interface MenuAttributes {
  id: string
  name: string
  restaurantId: string
  description: string
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

export interface MenuInput extends Required<MenuAttributes> { }

export class Menu extends BaseModel<MenuAttributes, MenuInput> implements MenuAttributes {
  public id!: string
  public name!: string
  public restaurantId!: string
  public description!: string
}
const MenuModel = (sequelize: Sequelize | null) => {
  if (sequelize !== null) {
    Menu.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        name: DataTypes.STRING,
        coverImage: DataTypes.STRING,
        restaurantId: DataTypes.STRING,
        cuisineId: DataTypes.STRING,
        description: DataTypes.STRING,
        deletedAt: DataTypes.DATE,
      },
      {
        timestamps: true,
        sequelize: sequelize,
        modelName: 'Menu',
        paranoid: true,
      },
    )
    return Menu
  }
}

export default MenuModel
