import axios from 'axios'
import Qs from 'qs'
import storage from '@/utils/storage'
import { baseApi } from '@/config'
var instance=axios.create({
    // url: '/',
    baseURL: baseApi,
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return data;
    }],
    transformResponse: [function (data) {
      // 对 data 进行任意转换处理
      return data;
    }],
    // `headers` 是即将被发送的自定义请求头
    headers: {'X-Requested-With': 'XMLHttpRequest',
    },
    // `paramsSerializer` 是一个负责 `params` 序列化的函数
    paramsSerializer: function(params) {
      return Qs.stringify(params, {arrayFormat: 'brackets'})
    },
    // 对 data 进行任意转换处理
    transformRequest: [function(data){       
     return Qs.stringify(data)
    }],
    timeout: 30000,
    validateStatus: function (status) {
      return status >= 200 && status < 300; // 默认的
    },
})

/* 请求拦截器 */
instance.interceptors.request.use(function (config) {
  const token = storage.localGet('token');
  if (token) {
    config.headers.token =token;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

/* 响应拦截器 */
instance.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    return Promise.reject(error)
})

export default instance