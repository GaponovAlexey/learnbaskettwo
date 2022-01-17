import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const userAPI = 'https://jsonplaceholder.typicode.com/photos'

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async () => {
    const response = await fetch(userAPI)
    return response.data
  }
)



const initialState = {
  data: [],
  status: 'no',
  element: {
    title: 'Macbook 14',
    desc: `System on Chip (SoC), Apple M1 Pro chip, Up to 10-core CPU
      with 8 performance cores and 2 efficiency cores, Upto 16-core
      GPU, 16-core`,
    logo: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_RU?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633657385000',
    price: '3400$',
    oldprice: '4400$',
  },
  basket: {
    title: 'test',
    desc: 'test',
    price: '9999$',
  },
}

export const counterSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.data.push(action.payload)
      })
  },
})

// export const {  } = counterSlice.actions

export default counterSlice.reducer
