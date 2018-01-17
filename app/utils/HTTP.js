import Api from '../Api';

export default class HTTP {
  static get(url): Promise {
    return HTTP.execute(url, 'GET', null);
  }

  static post(url, params): Promise {
    return HTTP.execute(url, 'POST', params);
  }

  static patch(url, params): Promise {
    return HTTP.execute(url, 'PATCH', params);
  }

  static put(url, params): Promise {
    return HTTP.execute(url, 'PUT', params);
  }

  static delete(url, params): Promise {
    return HTTP.execute(url, 'DELETE', params);
  }

  static execute(url, method, params): Promise {
    return new Promise((resolve, reject) => {
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      // if (Api.logined()) headers['Authorization'] = `Token ${Api.getToken()}`;
      const body = params ? JSON.stringify(params) : null;
      const request = {
        method,
        headers,
      };
      if (body) request.body = body;
      const cleanUrl = url.split(/\n*\s*\r*/).join('');
      if (__DEV__) {
        console.log(
          `HTTP:\n
          url: ${cleanUrl}\n
          request: ${JSON.stringify(request)}\n
          body: ${JSON.stringify(body)}`
        );
      }
      let status;
      fetch(cleanUrl, request).then((res) => {
        status = res.status;
        return res.json();
      })
      .then((res) => {
        if (__DEV__) console.log(`HTTP res:\n${JSON.stringify(res)}`);
        if (status < 200 || status >= 300) {
          if (status === 401) {
            console.log('logout');
          }
          reject(res.error_message || res.error);
        } else resolve(res);
      })
      .catch((error) => {
        if (__DEV__) console.log(`HTTP error:\n${error}`);
        reject(error.message);
      });
    });
  }
}
