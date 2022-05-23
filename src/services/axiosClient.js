/* eslint-disable prefer-arrow-callback */
// import axios from 'axios';
// // import { authService } from 'services/auth.service';
// // import Router from 'next/router';

// const axiosClient = axios.create({
//     baseURL: process.env.REACT_APP_ENDPOINT_URL || 'http://localhost:5000/',
//     timeout: 5000,
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });

// let publicUrl = ['/user/login', '/user/register', '/user/refresh-token', '/service'];

// // Interceptors
// // Add a request interceptor
// axiosClient.interceptors.request.use(
//     async (config: any) => {
//         // if (config.url.indexOf('/user/login') >= 0 || config.url.indexOf('/user/refresh-token') >= 0) {
//         //   return config;
//         // }
//         if (publicUrl.includes(config?.url)) {
//             return config;
//         }
//         const session = authService.getToken();
//         const _session = JSON.parse(session);
//         const { accessToken } = _session;
//         if (!accessToken) {
//             Router.push('/login');
//         }
//         config.headers.Authorization = 'Bearer ' + accessToken;
//         return config;
//     },
//     (err) => {
//         return Promise.reject(err);
//     }
// );

// // Add a response interceptor
// axiosClient.interceptors.response.use(
//     async (response: any) => {
//         const config: any = response.config;
//         if (config.url.indexOf('/user/login') >= 0 || config.url.indexOf('/user/refresh-token') >= 0) {
//             // Nhung route khong can check token
//             return response.data;
//         }

//         const { status, message } = response.data;
//         if (status && status === 401) {
//             if (message && message === 'jwt expired') {
//                 // step 1: get token from refresh token
//                 const { accessToken, refreshToken } = await authService.getToken();

//                 const res: any = await authService._refreshToken(refreshToken);
//                 if (res.status !== 200) {
//                     // refreshToken expired
//                     // => clear tokens
//                     await authService.clearSession();
//                     // redirect to login ????????????
//                     Router.push('/login');
//                 } else {
//                     const { accessToken, refreshToken } = res.elements;
//                     if (accessToken) {
//                         config.headers.Authorization = 'Bearer ' + accessToken;
//                         const data = await authService.getToken();
//                         await authService.setSession({ ...data, accessToken, refreshToken });
//                         return axiosClient(config);
//                     }
//                 }
//             }
//         }

//         return response.data;
//     },
//     (err) => {
//         return Promise.reject(err);
//     }
// );

// export default axiosClient;

import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://api.ezfrontend.com/',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
    // eslint-disable-next-line prefer-arrow-callback
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const { config, status, data } = error.response;
        const URLS = ['/auth/local/register', '/auth/local'];
        if (URLS.includes(config.url) && status === 400) {
            const errorList = data.data || [];
            const firstError = errorList.length > 0 ? errorList[0] : {};
            const messageList = firstError.messages || [];
            const firstMessage = messageList.length > 0 ? messageList[0] : {};
            throw new Error(firstMessage.message);
        }
        return Promise.reject(error.response);
    }
);

export default axiosClient;
