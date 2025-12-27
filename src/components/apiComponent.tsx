import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const ComponentApi = () => {
   const {isLoading, data, error}  = useSelector((state:RootState ) => state.api)

    if(isLoading){return <div className="text-blue-500">please wait</div>}
    if(error){return <div className="text-red-600">{error}</div>}
   return(
        <div className="">
            <ul>
              { data?.map((item) => {
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