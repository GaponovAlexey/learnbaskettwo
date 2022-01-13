import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  title: 'Macbook 14',
  desc: `System on Chip (SoC), Apple M1 Pro chip, Up to 10-core CPU
  with 8 performance cores and 2 efficiency cores, Upto 16-core
  GPU, 16-core`,
  logo: '../components/img/3.jpg',
  price: '3400$',
 }

export const counterSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
})

// export const {  } = counterSlice.actions

export default counterSlice.reducer