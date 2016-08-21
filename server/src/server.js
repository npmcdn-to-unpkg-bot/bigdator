import express from 'express'
import bodyParser from 'body-parser'
import {getCombinedData, getReports} from './get_data'

let app = express()
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  return next()
})
app.use('/', express.static('./frontend'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))


app.get('/buurten', getCombinedData)
app.get('/meldingen', getReports)


process.on('exit', function (){
  console.log('Goodbye!')
})

let port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`server listening at port ${port}`)
})
