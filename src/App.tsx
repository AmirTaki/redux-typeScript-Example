import { useDispatch } from 'react-redux'
import './App.css'
import Api from './components/api'
import Counter from './components/counter'
import List from './components/list'
import type { AppDispatch } from './store'
import { AsyncAwiatFetch, promisFetch, asyncAwaitAxios, promisAxios } from './redux/actionsApi'


function App() {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div className="text-rose-400 flex flex-col gap-5">
      <Counter />
      <hr />
      <List />
      <hr />
      <button
        className='text-green-500'
       
        // onClick={() => {dispatch(AsyncAwiatFetch())}}
        // onClick={() => {dispatch(promisFetch())}}
        // onClick={() => {dispatch(asyncAwaitAxios())}}
        onClick={() => {dispatch(promisAxios())}}
      >request to api</button>
      <Api />
    </div>  
  )
}

export default App
