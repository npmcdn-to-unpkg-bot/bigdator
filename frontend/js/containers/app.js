import React, {Component}from 'react'
import {Container} from 'flux/utils'
import CabinStore from '../flux/cabin_store'
import Actions from '../flux/actions'
import GeoMap from './geo_map'

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
      mapdata: CabinStore.getState().mapdata,
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

    if(typeof this.state.mapdata === 'undefined'){
      return <div>{'loading'}</div>
    }

    return (
      <GeoMap mapdata={this.state.mapdata} />
    )

  }
}

export default Container.create(App)
