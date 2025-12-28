import type { IinitialState } from "../types/types";

const AnswoerApi = ({data, isLoading, error}:  IinitialState) => {
    if(isLoading) {return <div className="text-blue-500">please wait request to api</div>}
    if(error) {return <div className="text-red-600">{error}</div>}
    return(
        <div className="">
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

export default AnswoerApi;