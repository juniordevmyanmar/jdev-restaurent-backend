import express from 'express'
import * as core from 'express-serve-static-core'

import BaseHandler from './base'
import HttpStatusCode from '../enum/httpstatus'
import UserDomain from '../domain/user'

export default class UserHandler extends BaseHandler {
  private app: express.Application
  private userDomain: UserDomain
  constructor(route: express.Application, userDomain: UserDomain) {
    super()
    this.app = route
    this.userDomain = userDomain
    this.instantiateRoute()
  }

  public getRouter(): core.Router {
    return this.app
  }

  private instantiateRoute(): void {
    this.app.post('/user', this.createUser.bind(this))
  }

  private async createUser(
    _: core.Request<{}, any, any, Record<string, any>>,
    res: core.Response<any, Record<string, any>, number>,
  ) {
    const { id } = await this.userDomain.createUser('test')
    if (id) {
      res.status(HttpStatusCode.OK).json(this.resBody(id))
      return
    }

    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(this.internalServerError('Failed to set User'))
  }
}
