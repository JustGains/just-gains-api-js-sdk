/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { CommonLocalesController } from '../src';
import { testClient } from './testClient';
import { expectHeadersToMatch, makeApiCall } from './testHelper';

describe('CommonLocalesController', () => {
  let controller : CommonLocalesController;

  beforeAll(() => {
    controller = new CommonLocalesController(testClient);
  });

  it('should Test getLocales', async () => {
    const showAll = false;

    const response = await makeApiCall(
      () => controller.getLocales(showAll)
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });
});