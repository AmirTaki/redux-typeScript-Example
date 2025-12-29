import { useSelector } from "react-redux"
import type { RootState } from "../store"

const Api = () => {
    const {data, loading, error} = useSelector((state: RootState) => state.api)
    if(loading) {return <h2 className="text-amber-300">please wait api is request </h2>}
    if(error) {return <h3 className="text-red-600">{error}</h3>}
    return (
        <div className="">

            <ul className="text-sky-500">
                {data?.map((item) => {
                    return(
                        <li key = {item.id}>
                            {item.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Api