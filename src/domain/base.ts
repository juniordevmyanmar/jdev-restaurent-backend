import { Sequelize } from 'sequelize'

export default class BaseDomain {
  protected connection: Sequelize | null
  protected tableName: string
  constructor(db: Sequelize | null, tblName: string) {
    this.connection = db
    this.tableName = tblName
  }

  getConnection(): Sequelize | null {
    return this.connection
  }

  escapeSQLStr(str: string): string {
    return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, (char) => {
      switch (char) {
        case '\0':
          return '\\0'
        case '\x08':
          return '\\b'
        case '\x09':
          return '\\t'
        case '\x1a':
          return '\\z'
        case '\n':
          return '\\n'
        case '\r':
          return '\\r'
        case '"':
        case `'`:
        case '\\':
        case '%':
          return '\\' + char // prepends a backslash to backslash, percent,
        // and double/single quotes
        default:
          return char
      }
    })
  }
}
