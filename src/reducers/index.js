import { combineReducers } from "redux"
import { filmReducer } from "./film"
import { favoriteReducer } from "./favorite"
export const rootReducer = combineReducers({
  film: filmReducer,
  favorite: favoriteReducer,
})
