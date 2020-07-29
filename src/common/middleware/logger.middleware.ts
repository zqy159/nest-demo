import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from "express"

@Injectable()
export class LoggerMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { method, path } = req

    console.log(`请求方式:${method} 请求路径:${path}`)
    next()
  }
}
