//https://places.geocoders.nl/civity/990b421a/meldingen?start=2014-01-01&end=2014-12-26&name=

import fs from 'fs'
import {hoodsArray} from './hoods'
import {fetchJSON} from './fetch_helpers'

const url = 'https://places.geocoders.nl/civity/990b421a/'
const start = '2014-01-01'
const end = '2015-07-01'

let promises = []
let csv

function getData(){

  hoodsArray.forEach(hood => {
    promises.push(fetchJSON(`${url}?start=${start}&end=${end}&agg=false&name=${hood}`))
  })

  csv = ''
  Promise.all(promises)
  .then(values => {
    values.forEach(arr => {
      arr.forEach(data => {
        csv += `${data.date};${data.bu_code};${data.name};${data.dumps};${data.fillperc};${data.meldingen}\n`
      })
    })
    fs.writeFileSync('../data/combined.csv', csv)
  })
}


//let hoods = ['Nolensbuurt']

function getReports(){

  hoodsArray.forEach(hood => {
  //hoods.forEach(hood => {
    promises.push(fetchJSON(`${url}meldingen?start=${start}&end=${end}&name=${hood}`))
  })

  csv = ''
  Promise.all(promises)
  .then(values => {
    values.forEach((arr, i) => {
      let features = arr[0].row_to_json.features
      let name = hoodsArray[i]
      console.log(i, name)
      features.forEach(feature => {
        //console.log(feature.properties.identification)
        csv += `${name};${feature.properties.date};${feature.properties.identification};"${feature.properties.description}";${feature.geometry.coordinates[0]};${feature.geometry.coordinates[1]}\n`
      })
    })
    fs.writeFileSync('../data/reports.csv', csv)
  })
}

getData()
getReports()

