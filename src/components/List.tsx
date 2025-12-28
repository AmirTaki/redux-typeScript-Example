import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { AddToList, EditeToValueList, RemoveToList } from "../redux/action";

const List = () => {
    const {todos, text} =  useSelector((state:RootState ) => state.list)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div className="">
            <div className=" flex justify-center items-center gap-2">
                <input type="text" className="border-2 px-2 py-3" 
                    value={text}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {dispatch(EditeToValueList(e.target.value))}}
                />
                <button
                    className="text-green-500"
                    onClick={() => {dispatch(AddToList());}}
                >ADD</button>

            </div>
            <ul>
                {todos?.map((item) => {
                    return (
                        <li key = {item.id} className="flex justify-center items-center gap-2">
                            <p className="text-sky-400">{item.text}</p>
                            <button
                                className="text-red-700"
                                onClick={() => {dispatch(RemoveToList(item.id))}}
                            >remove</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default List;