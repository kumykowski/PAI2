const express = require('express')

const app = express()
const port = 3000
app.use(express.json())
import userRoutes from './routes/userRoutes'
app.use('/users', userRoutes)



app.get('/', (req, res) => {
  res.send('API działa')
})

app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`)
})

