import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import Counter from './components/counter'

function App() {
  
  return (
    <div className="text-rose-400">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>  
  )
}

export default App
