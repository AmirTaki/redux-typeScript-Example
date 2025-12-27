import { useDispatch } from 'react-redux'
import './App.css'
import type { AppDispatch } from './redux/store'
import apiFetch from './redux/action'
import ComponentApi from './components/apiComponent'

function App() {
  const dispatch =  useDispatch<AppDispatch>()
  return (
    <div className="text-rose-400">
      <button className='text-green-600'
        onClick={() => {dispatch(apiFetch())}}
      >
        requst to api
      </button>
      <ComponentApi />
    </div>  
  )
}

export default App
