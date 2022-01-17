import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Main } from './components/Main'
import { Header } from './components/Header'
import { incrementAsync } from './store/reduser'
import { Baskets } from './components/Baskets'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(incrementAsync())
  }, [dispatch])
  return (
    <>
      <Header />
      <Baskets />
      <Main />
    </>
  )
}

export default App
