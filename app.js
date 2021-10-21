const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res, next) => {
  res.send('Welcome aboard')
})
app.listen(port, () => {
  console.log(`server running at localhost:${port}`)
})