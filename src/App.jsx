import Bio from './components/bio/Bio'
import Home from './components/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='profile' element={<Bio/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
