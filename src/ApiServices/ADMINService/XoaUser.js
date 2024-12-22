
import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";


export const XoaUserService = () => {


    const { response: XoaUserResponse,
        axiosFetch: XoaUserRefetch } = useAxiosFunction();

    const callXoaUserRefetch = (id) => {
    let XoaUserUrl = `/user-manager/xoa/${id}`

        XoaUserRefetch({
            axiosInstance: httpClient,
            method: 'DELETE',
            url: XoaUserUrl,
            requestConfig: {}
        })
    }  


    return { XoaUserResponse, callXoaUserRefetch }
}


