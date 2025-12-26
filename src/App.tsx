import { useDispatch } from 'react-redux'
import './App.css'
import Counter from './components/counter'
import ToDoList from './components/todos'
import { FetchApi } from './redux/actions'
import type { AppDispatch } from './redux/store'
import APIComponent from './components/api'

function App() {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div className="text-rose-400">
        <Counter />
        <hr />
        <ToDoList />
        <hr />
        <button 
          className='text-green-500'
          onClick={()=> {dispatch(FetchApi())}}>Request To Api
        </button>
        
        <APIComponent />
    </div>  
  )
}

export default App
