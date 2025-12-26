import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../redux/store"
import { DecraseCounter, EditValueCounter, IncraseCounter } from "../redux/actions"

const Counter = () => {

    const {counter, value} = useSelector((state:RootState) => state.counter)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div className="">
            <h1>Counter: {counter}</h1>
            <button
                onClick={() => {dispatch(IncraseCounter())}}
            >incrase</button>

            <button
                onClick={() => {dispatch(DecraseCounter())}}
            >
                decrase
            </button>

            <input type = 'number'
                className="border-2 px-2 py-3"
                value={value}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {dispatch(EditValueCounter(Number(e.target.value)))}}
            />
        </div>
    )
}
export default Counter