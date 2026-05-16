import express from 'express'
import dotenv from 'dotenv'
import { supabase } from './config/supabase.js'

dotenv.config()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Nova Learn Backend Running')
})

async function testSupabase() {
  const { data, error } = await supabase
    .from('test')
    .select('*')

  console.log('SUPABASE DATA:', data)
  console.log('SUPABASE ERROR:', error)
}

testSupabase()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})