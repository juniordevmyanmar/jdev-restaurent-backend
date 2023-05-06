import { DataTypes, Model, Optional, Sequelize, UUIDV4 } from 'sequelize'
import bcrypt from 'bcrypt'
import { BaseModel } from './base'

export interface UserAttributes {
  id: string
  name: string
  email: string
  password: string
  phone: string
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

export interface UserInput extends Required<UserAttributes> {}

export class User extends BaseModel<UserAttributes, UserInput> implements UserAttributes {
  public id!: string
  public name!: string
  public email!: string
  public password!: string
  public phone!: string
}

const UserModel = (sequelize: Sequelize | null) => {
  if (sequelize !== null) {
    User.init(
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
        email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        timestamps: true,
        sequelize: sequelize,
        modelName: 'User',
        paranoid: true,
      },
    )

    User.beforeCreate((user) => {
      return bcrypt
        .hash(user.password, 10)
        .then((hash) => {
          user.password = hash
        })
        .catch((err) => {
          throw new Error()
        })
    })

    return User
  }
}

export default UserModel
