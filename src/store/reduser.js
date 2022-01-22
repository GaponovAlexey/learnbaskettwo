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
  isBasket: true,
  status: 'no',
  element: [
    {
      id: 1,
      title: 'Macbook 14',
      desc: `System on Chip (SoC), Apple M1 Pro chip, Up to 10-core CPU
      with 8 performance cores and 2 efficiency cores, Upto 16-core
      GPU, 16-core`,
      logo: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_RU?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633657385000',
      price: '3400$',
      oldprice: '4400$',
    },
    {
      id: 2,
      title: 'Macbook 16',
      desc: `System on Chip (SoC), Apple M1 Pro chip, Up to 10-core CPU
      with 8 performance cores and 2 efficiency cores, Upto 16-core
      GPU, 16-core`,
      logo: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_RU?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633657385000',
      price: '4400$',
      oldprice: '5400$',
    },
  ],
  basket: [],
}

export const counterSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    isBaskets: (state) => {
      state.isBasket = state.isBasket ? false : true
    },
    ProductBasket: {
      reducer: (state, { payload }) => {
        const newItem = state.basket.find(el => el.id === payload.id)
        const newCount = state.basket.find(co => co.count )
        newItem ?? state.basket.push(payload)
      },
      prepare: (state, value) => {
        return { 
          payload: {
            ...value,
            count: ,
          },
        }
      },
    },
    increment: (state, { payload }) => {
      const newOrder = state.basket.map((el) => {
        if (el.id === payload.id) {
          const newElement = el.count + 2
          return {
            ...el,
            count: newElement,
          }
        } else {
          return el
        }
      })
      state.basket = newOrder
    },
    decrement: (state, { payload }) => {
      const newOrder = [...state.basket]
      newOrder.map((el) => {
        if (el.id === payload.id) {
          const newQuntity = el.count - 1
          return {
            ...el,
            count: newQuntity,
          }
        } else {
          return el
        }
      })
      state.basket = newOrder
    },
  },
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

export const { isBaskets, decrement, increment, ProductBasket } =
  counterSlice.actions

export default counterSlice.reducer
