const BASE_URL = 'https://h5.ele.me';

function request(path, options) {
  let url = path;
  if (path[0] === '/') {
    url = `${BASE_URL}${url}`;
  }
  return new Promise((resolve, reject) => {
    console.log(options.method, url);
    my.request({
      url,
      dataType: 'json',
      ...options,
      success: res => {
        resolve(res.data);
      },
      fail: res => {
        console.log(res);
        reject(res);
      },
    });
  });
}

request.get = (path, options) => {
  return request(path, {
    ...options,
    method: 'GET',
  });
};

request.post = (path, options) => {
  return request(path, {
    ...options,
    method: 'POST',
  });
};

export default request;
