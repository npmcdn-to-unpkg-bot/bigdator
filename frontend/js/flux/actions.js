import AppDispatcher from './app_dispatcher'
import settings from '../settings'
import * as ActionTypes from './action_types'
import {fetchJSON} from '../fetch_helpers'


export default {

  init(){
    fetchJSON('./data/buurten-schiedam.topojson')
    .then(
      json => {
        AppDispatcher.dispatch({
          type: ActionTypes.JSON_LOADED,
          payload: {
            json
          }
        })
      }
    )
  },

  /**
   * change render method: manual or on rAF
   */
  changeRenderMethod(){
    AppDispatcher.dispatch({
      type: ActionTypes.CHANGE_RENDER_METHOD,
    })
  },

  // currently not in use
  setSliderBusy(e) {
    AppDispatcher.dispatch({
      type: ActionTypes.SLIDER_BUSY,
      payload: {
        value: e.nativeEvent.type === 'mousedown'
      }
    })
  },


  sliderChange(e) {
    e = e.nativeEvent
    AppDispatcher.dispatch({
      type: e.target.id,
      payload: {
        value: e.target.valueAsNumber
      }
    })
  },


  updateCamera(e){
    AppDispatcher.dispatch({
      type: ActionTypes.UPDATE_CAMERA,
      payload: {
        position: e.position,
        quaternion: e.quaternion
      }
    })
  },


  resize(e){
    AppDispatcher.dispatch({
      type: ActionTypes.RESIZE,
      payload: {
        width: e.width,
        height: e.height
      }
    })
  },
}


