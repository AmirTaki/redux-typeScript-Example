import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const ApiData = () => {
    const {loading, data, error}  = useSelector((state: RootState ) => state.api)
    if(loading) {return <div className="text-amber-500">plaese wait request to api</div>}
    if(error) {return<div className="text-red-700">{error}</div>}
    return(
        <div className="text-sky-600">
            <ul>
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
export default ApiData;