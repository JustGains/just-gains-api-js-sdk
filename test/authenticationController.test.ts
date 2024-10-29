/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { AuthenticationController } from '../src';
import { testClient } from './testClient';
import { expectHeadersToMatch, makeApiCall } from './testHelper';

describe('AuthenticationController', () => {
  let controller : AuthenticationController;

  beforeAll(() => {
    controller = new AuthenticationController(testClient);
  });

  it('should Test getUserInfo', async () => {
    const response = await makeApiCall(
      () => controller.getUserInfo()
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });

  it('should Test refreshToken', async () => {
    const response = await makeApiCall(
      () => controller.refreshToken()
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });

  it('should Test signout', async () => {
    const response = await makeApiCall(
      () => controller.signout()
    );

    expect(response.statusCode).toBe(204);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });

  it('should Test getSettings', async () => {
    const provider = 'google';

    const response = await makeApiCall(
      () => controller.getSettings(provider)
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });
});
