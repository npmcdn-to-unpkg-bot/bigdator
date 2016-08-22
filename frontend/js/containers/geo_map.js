import React, {Component}from 'react'
import topojson from 'topojson'
import L from 'leaflet'
import {Map, Marker, Popup, TileLayer, GeoJson} from 'react-leaflet'


class GeoMap extends Component{

  constructor(){
    super()
    this.map = L.map('map')
    let tiles = L.tileLayer(
      'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '<a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        maxZoom: 18
      }
    )
    tiles.addTo(this.map)

    this.style = {
      weight: 1,
      opacity: 1,
      color: 'black',
      fillColor: 'black',
      fillOpacity: 0.1
    }

    this.litterIcon = L.icon({
      iconUrl: 'img/afval.png',
    })

    this.schoolIcon = L.icon({
      iconUrl: 'img/school.png',
    })
  }

  componentDidMount() {
    //Actions.init()
  }

  render() {
    let files = this.props.mapdata.jsonFiles
    let json = files[0]
    let hoods = L.geoJson(topojson.feature(json, json.objects['buurten-schiedam']), {
      style: this.style,
      //onEachFeature: onEachFeature
    })
    hoods.addTo(this.map)
    this.map.fitBounds(hoods.getBounds())
    hoods.eachLayer(layer => {
      if(layer._path){
        layer._path.setAttribute('title', layer.feature.properties.name);
      }else{
        layer.eachLayer(noncontig => {
          noncontig._path.setAttribute('title', layer.feature.properties.name);
        })
      }
    })

    json = files[1]
    let litter = L.geoJson(json, {
      filter: (feature, layer) => {
        return feature.properties.soort
      },
      pointToLayer: (feature, latlng) => {
        let marker = L.marker(latlng, {icon: this.litterIcon});
        marker.bindPopup(feature.properties.soort);
        return marker
      }
    })
    litter.addTo(this.map)


    json = files[2]
    let schools = L.geoJson(json, {
    filter: (feature, layer) => {
        return feature.properties.VESTIGINGSNAAM
      },
      pointToLayer: (feature, latlng) => {
        let marker = L.marker(latlng, {icon: this.schoolIcon})
        marker.bindPopup(feature.properties.VESTIGINGSNAAM)
        return marker
      }
    })
    schools.addTo(this.map);

    return (
      <div>{'emptiness fills my heart'}</div>
    )
  }
}

export default GeoMap


/*
        <Map id={"map"} bounds={}>
          <TileLayer
            url={'http://{s}.tile.osm.org/{z}/{x}/{y}.png'}
            attribution={'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}
          />
          <GeoJson data={this.props.data} style={style} onEachFeature={eachLayer} />
        </Map>


        let eachLayer = function(layer){
          console.log(layer)
          if(layer._path){
            layer._path.setAttribute('title', layer.feature.properties.name);
          }else{
            layer.eachLayer(function (noncontig) {
              noncontig._path.setAttribute('title', layer.feature.properties.name);
            })
          }
        }


        const position = [51.505, -0.09]
        <Map id={'map1'} center={position} zoom={13}>
          <GeoJson data={data} style={style} onEachFeature={eachLayer} />
        </Map>


*/
