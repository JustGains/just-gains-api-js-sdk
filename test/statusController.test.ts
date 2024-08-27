/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { StatusController } from '../src';
import { testClient } from './testClient';
import { expectHeadersToMatch, makeApiCall } from './testHelper';

describe('StatusController', () => {
  let controller : StatusController;

  beforeAll(() => {
    controller = new StatusController(testClient);
  });

  it('should Test checkServerAlive', async () => {
    const response = await makeApiCall(
      () => controller.checkServerAlive()
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });
});
