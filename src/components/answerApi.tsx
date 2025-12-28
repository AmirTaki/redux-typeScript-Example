import type { IinitialState } from "../types/types";

const AnswoerApi = ({isLoading, data, error}:IinitialState ) => {
    if(isLoading){return <h3 className="text-green-500">please wait request to api</h3>}
    if (error) {return <h4 className="text-red-700">{error}</h4>}
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