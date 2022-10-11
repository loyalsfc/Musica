import { useState } from 'react'
import Header from './components/Header/Header'
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-primary-dark">
      <div className='container mx-auto'>
        <Header />
        <Home />
      </div>
    </div>
  )
}

export default App
