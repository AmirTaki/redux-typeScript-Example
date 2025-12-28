import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import type { RootState, AppDispatch } from './redux/store'
import AnswoerApi from './components/answerApi'
import { AxiosApi, fetchApi, PromisApi } from './redux/actions'

function App() {
  const {data, error, isLoading} =  useSelector((state: RootState ) => state.Api)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="text-rose-400">
      <button
        className='text-green-500'
        // onClick={() => {dispatch(fetchApi())}}
        // onClick={() => {dispatch(AxiosApi())}}
        onClick={() => {dispatch(PromisApi())}}
      >
      
        request to api
      </button>
      <AnswoerApi 
        data = {data}
        isLoading = {isLoading}
        error = {error}
      />
    </div>  
  )
}

export default App
