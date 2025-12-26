import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import Counter from './components/counter'
import ToDoList from './components/todos'

function App() {
  
  return (
    <div className="text-rose-400">
      <Provider store={store}>
        <Counter />
        <hr />
        <ToDoList />
      </Provider>
    </div>  
  )
}

export default App
