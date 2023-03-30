import express from 'express'
import bodyParser from 'body-parser'
import { createServer, Server } from 'http'

import cors from 'cors'

class MusicPlayerAPIService {
  public static readonly PORT: number = 5000

  private port: string | number
  private expressApp: express.Application
  private server: Server

  constructor() {
    this.expressApp = express()
    this.port = process.env.SERVER_PORT || MusicPlayerAPIService.PORT
    this.expressApp.use(cors())
    this.expressApp.use(express.json())

    this.setupRoutes()

    this.server = createServer(this.expressApp)
    this.listen()
  }

  get app(): express.Application {
    return this.expressApp
  }

  private setupRoutes(): void {
  }

  private listen(): void {
    this.expressApp.use(bodyParser.urlencoded({ extended: false }))
    this.expressApp.use(bodyParser.json())
    this.server.listen(this.port, () => {
      process.stdout.write(`Running server on port ${this.port}\n`)
    })
  }
}

async function musicPlayerApp() {
  const app = new MusicPlayerAPIService().app
  return app
}

const app = musicPlayerApp()

export default app