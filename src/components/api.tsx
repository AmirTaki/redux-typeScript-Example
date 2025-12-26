import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const APIComponent = () => {
    const {data, error, isLoading} =  useSelector((state:RootState) => state.api)

    if(isLoading) {return <h2 className="text-blue-500">please wait request to api</h2>}
    if(error) {return <h3 className="text-red-600">{error}</h3>}
    return (
        <div className="">
            {data?.map((item) => {
                return(
                    <li key = {item.id}>
                        {item.title}
                    </li>
                )
            })}
        </div>
    )
}
export default APIComponent;