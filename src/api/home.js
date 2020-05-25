import request from '@/api'

// get请求
export const getRequest = (data) => {
  return request.get('api/test', { params: data })
}

// post请求
export const postRequest = (data) => {
  return request.post('api/test', data)
}
