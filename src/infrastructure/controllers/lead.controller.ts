import { NextFunction, type Request, type Response } from 'express'
import request from 'request-promise'
import 'dotenv/config.js'

interface IQuery {
  query: string
}

class LeadController {
  getAll = async (req: Request<{}, {}, {}, IQuery>, res: Response, next: NextFunction) => {
    try {
      const { query } = req.query

      await request(
        {
          auth: { bearer: process.env.ACCESS_LONG_TOKEN },
          url: `https://${process.env.HOSTNAME}/api/v4/leads?with=contacts${query?.length >= 3 ? `&query=${query}` : ''}`,
        },
        (error, response, body) => {
          if (error) {
            return res.status(500).json({ message: error })
          }
          return res.send(body)
        },
      )
    } catch (err) {
      next(err)
    }
  }
}

export default new LeadController()
