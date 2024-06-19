import express from 'express'
import 'dotenv/config.js'
import cors from 'cors'

import leadRouter from './infrastructure/routers/lead.router.js'

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:8080',
  }),
)

// http://localhost:3000

// API
app.use('/api/leads', leadRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
