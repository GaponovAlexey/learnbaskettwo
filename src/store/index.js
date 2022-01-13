import { configureStore } from '@reduxjs/toolkit'

import  counterSlice from './reduser'

export const store = configureStore({
  reducer: {
    data: counterSlice
  },
})