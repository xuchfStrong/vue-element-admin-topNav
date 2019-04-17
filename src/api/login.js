import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/login',
    // url: 'https://www.easy-mock.com/mock/5cb4248ad43f930787399771/xinyong/login/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    // url: 'https://www.easy-mock.com/mock/5cb4248ad43f930787399771/xinyong/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    // url: 'https://www.easy-mock.com/mock/5cb4248ad43f930787399771/xinyong/user/info',
    method: 'get',
    params: { token }
  })
}

