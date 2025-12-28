import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import type { AppDispatch, RootState } from './redux/store'
import { axiosApi, fetchApi, promisApi } from './redux/actions'
import AnswoerApi from './components/answerApi'

function App() {
  const dispatch =  useDispatch<AppDispatch>()
  const {isLoading, data, error} = useSelector((state: RootState) => state.api)
  return (
    <div className="text-rose-400">
      <button className='text-blue-500'
        // onClick={() => {dispatch(fetchApi())}}
        // onClick={() => {dispatch(axiosApi())}}
        onClick={() => {dispatch(promisApi())}}
      >
        request to api
      </button>
      <AnswoerApi 
        isLoading = {isLoading}
        data = {data}
        error = {error} 

      />
    </div>  
  )
}

export default App
