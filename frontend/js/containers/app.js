import React, {Component}from 'react'
import {Container} from 'flux/utils'
import CabinStore from '../flux/cabin_store'
import Actions from '../flux/actions'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
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
      dimensions: CabinStore.getState(),
    }
  }

  constructor(props){
    super(props)
  }

  componentDidMount() {
    //Actions.init()
  }

  render() {
    // if(this.state.scene.displayState === 'initializing'){
    //   return <div>{this.state.scene.message}</div>
    // }
    const position = [51.505, -0.09]

    return (
      <div>
      <Map center={position} zoom={13}>
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
      </div>
    )
  }
}

export default Container.create(App)

