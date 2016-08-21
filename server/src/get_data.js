import sql from 'sql'
import {createSQLPromise} from './sql_promise'
import {combined, reports} from './defs'


export function getCombinedData(req, res){

  let {start, end, name} = req.query
  let t, query
  //console.log(start, end, name)

  if(typeof name === 'undefined'){

    t = combined
    query = t.select(
      t.bu_code,
      t.name,
      sql.functions.SUM(t.meldingen).as('meldingen'),
      sql.functions.SUM(t.dumps).as('dumps'),
      sql.functions.ROUND(sql.functions.AVG(t.fillperc), 0).as('fillperc')
    )
    .from(t)
    .where(
      (t.date).gte(start),
      (t.date).lte(end)
    )
    .group(t.name, t.bu_code)
    .toQuery()

    createSQLPromise(query.text, query.values)
    .then(
      result => {
        res.setHeader('Content-Type', 'application/json')
        res.send(result)
      },
      error => {
        res.setHeader('Content-Type', 'application/json')
        res.send(error)
      }
    )

  }else{

    t = combined
    query = t.select(
      t.date,
      t.bu_code,
      t.name,
      t.meldingen,
      t.dumps,
      t.fillperc
    )
    .from(t)
    .where(
      (t.date).gte(start),
      (t.date).lte(end)
    )
    .where(
      (t.name).equals(name)
    )
    .toQuery()

    createSQLPromise(query.text, query.values)
    .then(
      result => {
        res.setHeader('Content-Type', 'application/json')
        res.send(result)
      },
      error => {
        res.setHeader('Content-Type', 'application/json')
        res.send(error)
      }
    )
  }
}


export function getReports(req, res){

  let {start, end, name} = req.query
  let t = reports
  let query = t.select(
    t.name,
    t.date,
    t.identification,
    t.description,
    t.x,
    t.y
  )
  .from(t)
  .where(
    (t.date).gte(start),
    (t.date).lte(end)
  )
  .where(
    (t.name).equals(name)
  )
  .toQuery()

  createSQLPromise(query.text, query.values)
  .then(
    result => {
      res.setHeader('Content-Type', 'application/json')
      let features = []
      result.forEach(row => {
        //console.log(row)
        features.push({
          type: 'Feature',
          properties: {
            date: row.date,
            description: row.description,
            identification: row.identification
          },
          geometry: {
            type: 'Point',
            coordinates: [row.x, row.y]
          }
        })
      })
      res.send([{
        row_to_json: {
          type: 'FeatureCollection',
          features
        }
      }])
    },
    error => {
      res.setHeader('Content-Type', 'application/json')
      res.send(error)
    }
  )
}
