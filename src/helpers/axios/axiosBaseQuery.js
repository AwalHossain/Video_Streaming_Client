import axios from 'axios';

const axiosBaseQuery =
    ({ baseUrl } = { baseUrl: '' }) =>
        async ({ url, method, data, params, headers, contentType, fileName }) => {

            try {
                const result = await axios({
                    url: baseUrl + url,
                    method,
                    data,
                    params,
                    headers: {
                        "Content-Type": contentType || "application/json",
                    },
                    withCredentials: 'include',
                })
                return { data: result.data }
            } catch (axiosError) {
                console.log(axiosError, 'err from axiosBaseQuery');
                const err = axiosError
                return {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                }
            }
        }


export default axiosBaseQuery; 