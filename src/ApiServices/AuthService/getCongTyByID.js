import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";




export const GetCongTyByIDService = () => {
    const id = localStorage.getItem('iduser')
    const getCongTyByIDUrl = `/ChuyenNganh/${id}`;

    const { response: getCongTyByIDResponse,
        isLoading: getCongTyByIDIsLoading,
        error: getCongTyByIDError,
        refetch: getCongTyByIDRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: getCongTyByIDUrl,
            requestConfig: {}
        });


    return { getCongTyByIDResponse, getCongTyByIDIsLoading, getCongTyByIDError, getCongTyByIDRefetch }
}


