import axios from 'axios';
export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL : 'http://123.207.32.32:8000'
  })
  //发送真正的网络请求，因为instance默认返回的就是一个promise所以不用写明
  return instance(config)
}