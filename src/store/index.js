import { configureStore } from '@reduxjs/toolkit'
import count from './reduser'

export default configureStore({
  reducer: {
    data: count,
  },
})