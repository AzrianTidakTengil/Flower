import { configureStore } from '@reduxjs/toolkit'
import paginationReducer from './features/main'
import DialogReducer from './features/dialog'
import SettingReducer from './features/bgm'

export default configureStore({
  reducer: {
    pagination: paginationReducer,
    dialog: DialogReducer,
    setting: SettingReducer,
  }
})