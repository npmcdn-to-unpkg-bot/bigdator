import {ReduceStore} from 'flux/utils'
import AppDispatcher from './app_dispatcher'
import * as types from '../flux/action_types'
import settings from '../settings'

/**
 * Store for cabin properties
 *
 *  - cabinWidth
 *  - cabinHeight
 *  - cabinDepth
 *  - postWidth
 *  - postDepth
 *  - wallDepth
 *
 * @class      CabinStore (name)
 */
class CabinStore extends ReduceStore{

  getInitialState(){
    return {
      cabinWidth: 0,//settings.cabin.width,
      cabinHeight: 0,//settings.cabin.height,
      cabinDepth: 0,//settings.cabin.depth,
      postWidth: 0,//settings.post.width,
      postDepth: 0,//settings.post.depth,
      wallDepth: 0,//settings.wall.depth,
    }
  }

  reduce(state, action) {

    switch(action.type){

      case types.JSON_LOADED:
        return {
          ...state,
          mapdata: action.payload.mapdata,
        }

      case types.CABIN_HEIGHT:
      case types.CABIN_WIDTH:
      case types.CABIN_DEPTH:
      case types.POST_WIDTH:
      case types.POST_DEPTH:
      case types.WALL_DEPTH:

        return {
          ...state,
          [action.type]: action.payload.value,
        }

      default:
        return state
    }
  }
}

export default new CabinStore(AppDispatcher)
