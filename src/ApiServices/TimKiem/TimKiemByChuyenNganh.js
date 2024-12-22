
import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";


export const TimKiemByChuyenNganhService = () => {


    const { response: TimKiemByChuyenNganhResponse,
        error: TimKiemByChuyenNganhError,
        isLoading: TimKiemByChuyenNganhIsLoading,
        axiosFetch: TimKiemByChuyenNganhRefetch } = useAxiosFunction();

    const callTimKiemByChuyenNganhRefetch = (chuyenNganhId) => {
    let TimKiemByChuyenNganhUrl = `/CongViec/congviec-by-tenchuyennganh?chuyenNganhId=${chuyenNganhId}`;

        TimKiemByChuyenNganhRefetch({
            axiosInstance: httpClient,
            method: 'GET',
            url: TimKiemByChuyenNganhUrl,
            requestConfig: {}
        })
    }  


    return { TimKiemByChuyenNganhResponse, TimKiemByChuyenNganhIsLoading, TimKiemByChuyenNganhError, callTimKiemByChuyenNganhRefetch }
}


