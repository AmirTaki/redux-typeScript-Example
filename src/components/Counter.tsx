import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { DecraseCounter, EditValueCounter, IcraseCounter } from "../redux/action";

const Counter = () => {
    const {counter, value} = useSelector((state: RootState) => state.counter)
    const dispatch =  useDispatch<AppDispatch>()
    return(
        <div className="">
            <h1 className="text-blue-600">Counter : {counter}</h1>
            <button 
                onClick={() => {dispatch(IcraseCounter())}}
            >incrase</button>
            <button 
                onClick={() => {dispatch(DecraseCounter())}}
            >incrase</button>

            <input type="number"
                className="border-2 px-2 py-3"
                value = {value}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {dispatch(EditValueCounter(Number(e.target.value)))}}
            />
        </div>
    )
}
export default Counter;