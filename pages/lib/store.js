import { configureStore } from '@reduxjs/toolkit'
import paginationReducer from './features/main'

export default configureStore({
  reducer: {
    pagination: paginationReducer
  }
})