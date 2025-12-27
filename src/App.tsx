import { useDispatch } from 'react-redux'
import './App.css'
import ComponentApi from './components/apiComponent'
import type { AppDispatch } from './redux/store'
import { fetchApi } from './redux/slicer'

function App() {
  const dispath =  useDispatch<AppDispatch>()
  return (
    <div className="text-rose-400">
      <button
        onClick={() => {dispath(fetchApi())}}
      >
        request to api
      </button>
      <ComponentApi />
    </div>  
  )
}

export default App
