import { useDispatch } from 'react-redux'
import './App.css'
import ApiData from './components/Api'
import Counter from './components/Counter'
import List from './components/List'
import { axiosApi, fetchApi, promisApi } from './redux/action'
import type { AppDispatch } from './redux/store'

function App() {
  const dispatch =  useDispatch<AppDispatch>()
  return (
    <div className="text-rose-400 flex flex-col gap-5">
      <Counter />
      <hr />
      <List />
      <hr />
      <button
        className='text-green-500'
        // onClick={()=>{dispatch(fetchApi())}}
        // onClick={()=>{dispatch(axiosApi())}}
        onClick={() => {dispatch(promisApi())}}
      >
        click to request api
      </button>
      <ApiData />
    </div>  
  )
}

export default App
