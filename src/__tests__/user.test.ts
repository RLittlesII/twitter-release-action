// __tests__/user-test.js
jest.mock('../request');

import request from '../request';

import * as user from '../user';
import { of } from 'rxjs';

function isMock(value: any): value is jest.Mock<any> {
    return !!(value as any).mockReturnValue;
}

describe('', () => {
    // The assertion for a promise must be returned.
    test('works with promises', async () => {
        if (isMock(request)) {
            request.mockReturnValue(of({ name: 'John' }));
        }

        const result = await user.getUserName(5).toPromise();
        expect(result).toEqual('John');
    });
});