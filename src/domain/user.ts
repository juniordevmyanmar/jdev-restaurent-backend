import { Sequelize } from 'sequelize'
import { Log } from '../utils/log'
import BaseDomain from './base'

export default class UserDomain extends BaseDomain {
  private user: any
  
  constructor(db: Sequelize | null, tblName: string, userModel: any) {
    super(db, tblName)
    this.user = userModel
  }

  public async createUser(userName?: string): Promise<{ id: string | null }> {
    var id = ''
    try {
      const user = await this.user.create({ name: "Jane"});
      id = user.id
    } catch (e: any) {
      Log.error(`UserDomain::createUser ${e.stack}`)
    }
    return { id: id }
  }
}
