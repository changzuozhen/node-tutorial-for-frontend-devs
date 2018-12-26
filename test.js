const express = require('express')
const app = express()
// http://localhost:3000/test.html
// http://localhost:3000/index.htm
app.use(express.static('highcharts'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))