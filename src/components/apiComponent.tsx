import { useSelector } from "react-redux";
import type { RootStore } from "../redux/store";

const ComponentApi = () => {
    const {isLoading, data, error} =  useSelector((state: RootStore) => state.api)
   
    if(isLoading) {return <h3 className="text-blue-500">please wait</h3>}
    if(error) {return <h2 className="text-red-700">{error}</h2>}
    return(
        <div className="">
            <ul>
                {!isLoading  &&  data?.map((item) => {
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
export default ComponentApi;