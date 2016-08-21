import React, {Component}from 'react'
import {Container} from 'flux/utils'
import CabinStore from '../flux/cabin_store'
import Actions from '../flux/actions'
import {Map, Marker, Popup, TileLayer, GeoJson} from 'react-leaflet'
import topojson from 'topojson'
//import L from 'leaflet'
/**
 * Main React entry point
 *
 * @class      App (name)
 */
class App extends Component{

  static displayName = 'App'

  static getStores() {
    return [CabinStore]
  }

  static calculateState(){
    return {
      // scene: SceneStore.getState(),
      json: CabinStore.getState().json,
    }
  }

  constructor(props){
    super(props)
  }

  componentDidMount() {
    Actions.init()
  }

  render() {
    // if(this.state.scene.displayState === 'initializing'){
    //   return <div>{this.state.scene.message}</div>
    // }
    const position = [51.505, -0.09]

    if(typeof this.state.json === 'undefined'){
      return <div>{'loading'}</div>
    }

    let data = topojson.feature(this.state.json, this.state.json.objects['buurten-schiedam'])
    let style = {
      weight: 1,
      opacity: 1,
      color: 'black',
      fillColor: 'black',
      fillOpacity: 0.1
    }
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

    return (
      <div>
      <Map id={'map1'} center={position} zoom={13}>
        <GeoJson data={data} style={style} onEachFeature={eachLayer} />
      </Map>
      </div>
    )
  }
}

export default Container.create(App)


/*
      <Map id={"map1"} center={position} zoom={13}>
        <TileLayer
          url={'http://{s}.tile.osm.org/{z}/{x}/{y}.png'}
          attribution={'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
*/


