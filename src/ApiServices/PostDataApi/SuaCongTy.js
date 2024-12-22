import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";

export const EditCongTyService = () => {
    const idCongTy = localStorage.getItem('idCongTy');
    const EditCongTyUrl = `/CongViec/sua/${idCongTy}`;

    const { response: EditCongTyResponse,
        error: EditCongTyError,
        isLoading: EditCongTyIsLoading,
        axiosFetch: EditCongTyRefetch } = useAxiosFunction();

    const callEditCongTyRefetch = (data) => {
        EditCongTyRefetch({
            axiosInstance: httpClient,
            method: 'PUT',
            url: EditCongTyUrl,
            requestConfig: {data: data}
        })
    }  


    return { EditCongTyResponse, EditCongTyIsLoading, EditCongTyError, callEditCongTyRefetch }
}


