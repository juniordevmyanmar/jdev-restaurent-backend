import express from 'express'
import * as core from 'express-serve-static-core'
import { UserAlreadyExistsError } from '../errors/userAlreadyExistError'

import BaseHandler from './base'
import HttpStatusCode from '../enum/httpstatus'
import CrudDomain from '../domain/crud'
import { RestaurantAttributes } from '../models/restaurant'
import { MenuAttributes } from '../models/menu'
import { CuisineAttributes } from '../models/cuisine'

type RequestType = RestaurantAttributes | MenuAttributes | CuisineAttributes

export default class CrudHandler extends BaseHandler {
  private app: express.Application
  private crudDomain: CrudDomain
  constructor(route: express.Application, crudDomain: CrudDomain) {
    super()
    this.app = route
    this.crudDomain = crudDomain
    this.instantiateRoute()
  }

  public getRouter(): core.Router {
    return this.app
  }

  private instantiateRoute(): void {
    this.app.post('/api/:model/', this.createResource.bind(this))
    this.app.get('/api/:model/', this.getResourceList.bind(this))
    this.app.get('/api/:model/:id', this.getResourceById.bind(this))
    // this.app.post('/login', RequestValidator.validate(LoginRequestRule), this.userSignUp.bind(this))
  }

  private async createResource(
    req: core.Request<{ model: string }, RequestType, any, Record<string, any>>,
    res: core.Response<any, Record<string, any>, number>,
  ) {
    const payload = req.body

    const tblName = req.params.model

    try {
      const resp = await this.crudDomain.getCrudDomain(tblName).create(payload)
      res.status(HttpStatusCode.OK).json(this.resBody(resp))
    } catch (err: any) {
      if (err instanceof UserAlreadyExistsError) {
        res.status(HttpStatusCode.BAD_REQUEST).json(this.badRequestError(err.message, err.errors()))
        return
      }
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(this.internalServerError(`Failed to set ${tblName}`))
    }
  }

  private async getResourceList(
    req: core.Request<{ model: string }, RequestType, any, { limit: number; offset: number }>,
    res: core.Response<any, Record<string, any>, number>,
  ) {
    const tblName = req.params.model

    const { limit, offset } = req.query
    try {
      const resp = await this.crudDomain.getCrudDomain(tblName).GetAll(limit, offset)
      res.status(HttpStatusCode.OK).json(this.resBody(resp))
    } catch (err: any) {
      if (err instanceof UserAlreadyExistsError) {
        res.status(HttpStatusCode.BAD_REQUEST).json(this.badRequestError(err.message, err.errors()))
        return
      }
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(this.internalServerError(`Failed to set ${tblName}`))
    }
  }

  private async getResourceById(
    req: core.Request<{ model: string; id: string }, RequestType, any, any>,
    res: core.Response<any, Record<string, any>, number>,
  ) {
    const tblName = req.params.model

    const { id } = req.params
    try {
      const resp = await this.crudDomain.getCrudDomain(tblName).GetOneBy({ id })
      res.status(HttpStatusCode.OK).json(this.resBody(resp))
    } catch (err: any) {
      if (err instanceof UserAlreadyExistsError) {
        res.status(HttpStatusCode.BAD_REQUEST).json(this.badRequestError(err.message, err.errors()))
        return
      }
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(this.internalServerError(`Failed to set ${tblName}`))
    }
  }
}
