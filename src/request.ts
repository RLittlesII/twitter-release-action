// request.js
const http = require('http');
import { from } from 'rxjs';

export default function request<T>(url) {
  return from(new Promise<T>(resolve => {
    // This is an example of an http request, for example to fetch
    // user data from an API.
    // This module is being mocked in __mocks__/request.js
    http.get({path: url}, response => {
      let data = '';
      response.on('data', _data => (data += _data));
      response.on('end', () => resolve(data as any as T));
    });
  }));
}