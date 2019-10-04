// user.js
import request from './request';
import { map, merge, concat } from 'rxjs/operators';

export interface IUser {
    name: string;
}

export function getUserName(userID: number) {  
  return request<{ name: string }>('/users/' + userID).pipe(
    map(x => x.name),
  );
}