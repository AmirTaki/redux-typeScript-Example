import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { AddToDos, EditTextToDos, RemoveToDos } from "../redux/actions";

const ToDoList = () => {
    const {todos, text} = useSelector((state: RootState) =>state.todos )
    const dispatch =  useDispatch<AppDispatch>()
    return(
        <div className="">


            <input type="text" className="border-2 py-3 px-2 "
                value = {text}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {dispatch(EditTextToDos(e.target.value))}}
            />
            <button className="text-blue-500"
                onClick={() => {dispatch(AddToDos(text)); dispatch(EditTextToDos(''))}}
            >ADD</button>
            {todos?.map((item) => {
                return(
                    <li key = {item.id} className="flex justify-center items-center gap-1">
                        <p>{item.text}</p>
                        <button
                        
                        className="text-red-700"
                            onClick={() => [dispatch(RemoveToDos(item.id))]}
                        >remove</button>
                    </li>
                )
            })}
        </div>
    )
}
export default ToDoList;