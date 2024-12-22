import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";

export const TaoBaiDangService = () => {
    const TaoBaiDangUrl = `/CongViec/them`;

    const { response: TaoBaiDangResponse,
        error: TaoBaiDangError,
        isLoading: TaoBaiDangIsLoading,
        axiosFetch: TaoBaiDangRefetch } = useAxiosFunction();

    const callTaoBaiDangRefetch = (data) => {

        TaoBaiDangRefetch({
            axiosInstance: httpClient,
            method: 'POST',
            url: TaoBaiDangUrl,
            requestConfig: {data: data}
        })
    }  


    return { TaoBaiDangResponse, TaoBaiDangIsLoading, TaoBaiDangError, callTaoBaiDangRefetch }
}


