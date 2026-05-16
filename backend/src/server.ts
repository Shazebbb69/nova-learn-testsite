import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import { supabase } from './config/supabase'

dotenv.config()

const app = express()

app.use(express.json())

// HOME ROUTE
app.get('/', (req: Request, res: Response) => {
  res.send('Nova Learn Backend Running')
})

// GET ALL RESOURCES
app.get('/resources', async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('resources')
    .select('*')

  if (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }

  return res.json({
    success: true,
    data,
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})