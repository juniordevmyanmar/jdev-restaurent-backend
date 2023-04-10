import { Sequelize, UniqueConstraintError, ValidationErrorItem } from 'sequelize-typescript'
import { Log } from '../utils/log'
import BaseDomain from './base'
import { DataTypes, Model, Optional, UUIDV4 } from 'sequelize'
import { ValidationReason } from '../types/validationErrorType'
import { UserAlreadyExistsError } from '../errors/userAlreadyExistError'
import { ResourceNotFoundError, ResourceUpdateError } from '../errors/crud'
import { InvalidUserLoginError } from '../errors/invalidUserLogin'
import HttpStatusCode from '../enum/httpstatus'
import JWT from '../utils/jwt'

import CuisineModel, { Cuisine } from '../models/cuisine'
import UserModel, { User, UserAttributes } from '../models/user'
import RestaurantModel, { Restaurant } from '../models/restaurant'
import MenuModel, { Menu } from '../models/menu'

type Resource<T> = T

type res = Resource<User | Menu | Cuisine | Restaurant>

export default class CrudDomain extends BaseDomain {
  private resource
  constructor(db: Sequelize | null, tblName: string) {
    super(db, tblName)
    this.resource = this.getORM(tblName)
  }

  public async create(res: res): Promise<{ id: string } | undefined> {
    try {
      const output = await this.resource?.create(res)
      return { id: output?.id }
    } catch (e: any) {
      if (e instanceof UniqueConstraintError) {
        if (e.errors.length > 0) {
          let rawErrors: Array<ValidationReason> = []
          rawErrors = e.errors.map((error: ValidationErrorItem) => ({
            fieldName: error?.path,
            message: {
              key: error.path,
              value: error.path + ' already exist',
            },
          }))
          throw new UserAlreadyExistsError(`failed to create resource ${typeof this.resource}`, rawErrors)
        }
        throw e
      }
    }
  }

  public async GetAll(limit: number, offset: number): Promise<Array<res>> {
    try {
      const output = await this.resource.findAll({
        limit: 10, // limits the number of results to 10
        offset: 5, // skips the first 5 results
      })
      return output
    } catch (e: any) {
      Log.error(`${typeof this.resource}::RetrieveResourceList ${e.stack}`)
      throw e
    }
  }

  public async GetAllBy(limit: number, offset: number, res: res): Promise<Array<res>> {
    try {
      const output = await this.resource.findAll({
        where: { ...res },
        limit: 10, // limits the number of results to 10
        offset: 5, // skips the first 5 results
      })
      if (output && output.length === 0) {
        throw new ResourceNotFoundError(`${typeof this.resource} list is not available`)
      }
      return output
    } catch (e: any) {
      Log.error(`${typeof this.resource}::GetAllBy ${e.stack}`)
      throw e
    }
  }

  public async GetOneBy(res: res) {
    try {
      const output = await this.resource?.findOne({
        where: { ...res },
      })

      if (output === null) {
        throw new ResourceNotFoundError(`${typeof this.resource} not found`)
      }

      return res
    } catch (e: any) {
      Log.error(`${typeof this.resource}::GetOneBy ${e.stack}`)

      throw e
    }
  }

  public async UpdateBy(res: res, condition: res): Promise<void> {
    try {
      const output = await this.resource?.update(res, {
        where: { ...condition },
      })

      if (output === null) {
        throw new ResourceUpdateError(`${typeof this.resource} not found`)
      }

      return output[0]
    } catch (e: any) {
      Log.error(`${typeof this.resource}::UpdateBy ${e.stack}`)
      throw e
    }
  }

  public async DeleteBy(res: res): Promise<boolean> {
    try {
      this.resource.destroy({
        where: res,
      })
      return true
    } catch (e: any) {
      Log.error(`${typeof this.resource}::UpdateBy ${e.stack}`)
      throw e
    }
  }
}
