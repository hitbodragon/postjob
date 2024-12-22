import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";


export const GetAllChuyenNganhService = () => {
    const GetAllChuyenNganhUrl = '/ChuyenNganh/getall';

    const { response: GetAllChuyenNganhResponse,
        refetch: GetAllChuyenNganhRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: GetAllChuyenNganhUrl,
            requestConfig: {}
        });

    return { GetAllChuyenNganhResponse, GetAllChuyenNganhRefetch }
}


