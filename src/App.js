import { Provider } from 'react-redux'
import { Main } from './components/Main'
import { Header } from './components/start/Header'
import { store } from './store/index.js'

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
