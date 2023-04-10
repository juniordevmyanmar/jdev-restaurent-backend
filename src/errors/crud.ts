export class ResourceNotFoundError extends Error {
  protected error: any
  constructor(message: string) {
    super(message)
    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
  }

  errors() {
    return this.error
  }
}

export class ResourceUpdateError extends Error {
  protected error: any
  constructor(message: string) {
    super(message)
    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
  }

  errors() {
    return this.error
  }
}
