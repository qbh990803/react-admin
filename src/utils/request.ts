import axios from "axios";
import { message } from "antd";

const BASEURL = "http://localhost:3000/";
const TIMEOUT = 10000;

const request = axios.create({
  baseURL: BASEURL,
  timeout: TIMEOUT,
});
/**
 * @description: 跳转登录页面并携带当前页面路径
 * @return {void}
 */
const toLogin = () => {
  //   router.replace({
  //     path: '/login',
  //     query: {
  //         redirect: router.currentRoute.fullPath
  //     }
  // });
};
/**
 * @description: 请求错误统一处理
 * @param {number} status 状态
 * @param {string} message 信息
 * @return {*}
 */
const handleError = (status: number, msg: string) => {
  switch (status) {
    case 401:
      toLogin();
      break;
    case 403:
      message.info({
        content: "登录过期，请重新登录",
      });
      // 清除本地token和清除store中的token对象
      localStorage.removeItem("token");
      // store.commit('setToken', null);
      setTimeout(() => {
        toLogin();
      }, 1000);
      break;
    case 404:
      message.info({
        content: "网络请求不存在",
      });
      break;
    default:
      console.log(msg);
  }
};
// 前置拦截器
request.interceptors.request.use(
  (config) => {
    const token = "store.state.token";
    token && (config.headers.Authorization = token);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 后置拦截器
request.interceptors.response.use(
  (response) =>
    response.status === 200
      ? Promise.resolve(response.data)
      : Promise.reject(response),
  (error) => {
    const { response } = error;
    // 请求已发出，但是不在2xx的范围
    handleError(response.status, response.data.message);
    return Promise.reject(response);
  }
);
export default request;
