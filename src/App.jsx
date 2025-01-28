import './styles/App.css'
import Navbar from './components/Navbar.jsx'
import Inputs from './components/Inputs.jsx'
import Preview from './components/Preview.jsx'

function App() {
  return (
    <div className="main">
      <Navbar />
      <div className='content'>
        <Inputs />
        <Preview />
      </div>
    </div>
  )
}

export default App
