import request from "./request";

function get({url, data = {}, timeout = 6000}) {
  return request({
    method:"get",
    url: url,
    data: data,
    timeout:timeout,
    header: {
      'content-type': 'application/json'
    }
  });
}

function post(url, data = {}, timeout = 6000) {
  return request({
    method:"post",
    url: url,
    data: data,
    timeout:timeout,
    header: {
      'content-type': 'application/json'
    }
  });
}

export {get, post};