/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { CommonPublishedStatusController } from '../src';
import { testClient } from './testClient';
import { expectHeadersToMatch, makeApiCall } from './testHelper';

describe('CommonPublishedStatusController', () => {
  let controller : CommonPublishedStatusController;

  beforeAll(() => {
    controller = new CommonPublishedStatusController(testClient);
  });

  it('should Test getAllPublishedStatus', async () => {
    const response = await makeApiCall(
      () => controller.getAllPublishedStatus()
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });
});
