import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { Decrase, EditValueCounter, Incrase } from "../redux/CounterSlicer";

const Counter = () => {
    const {counter, value} =  useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch<AppDispatch>()
    return(
        <div className="">
            <h1 className="text-blue-700">Counter: {counter}</h1>
            <div className="flex gap-3">

                <button 
                    onClick={() => {dispatch(Incrase())}}
                >
                    incrase
                </button>
                <button 
                    onClick={() => {dispatch(Decrase())}}
                >
                    decrase
                </button>

                <input 
                    className="border-2 px-2 py-3"
                    type="number"
                    value = {value}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {dispatch(EditValueCounter({value: Number(e.target.value)}))}} 
                />
            </div>
        </div>
    )
}

export default Counter;