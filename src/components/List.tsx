import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "../store"
// import { useState } from "react"
import { addToList, removeToList, editTextList } from "../redux/ListSlicer"

const List = () => {
    // const [text, setText] =  useState<string>('')
    const {todos, text} =  useSelector((state: RootState) => state.list)
    const dipatch = useDispatch<AppDispatch>()
    return(
        <div className="">
            <div className="flex gap-3">
                <input type="text"  className="border-2 px-2 py-3"
                value = {text}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {dipatch(editTextList({text: e.target.value}))}}
                />
                <button 
                    className="text-blue-700"
                    onClick={() => {dipatch(addToList());  }}
                >ADD</button>
            </div>
            <ul>
                {todos?.map((item) => {
                    return(
                        <li key = {item.id} className="flex gap-5 justify-center items-center">
                            <p className="text-sky-700">{item.text}</p>
                            <button
                                className="text-red-500"
                                onClick={() => {dipatch(removeToList({id: item.id}))}}
                            >remove</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default List