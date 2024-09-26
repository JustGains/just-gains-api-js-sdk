/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { UsersRolesController } from '../src';
import { testClient } from './testClient';
import { expectHeadersToMatch, makeApiCall } from './testHelper';

describe('UsersRolesController', () => {
  let controller : UsersRolesController;

  beforeAll(() => {
    controller = new UsersRolesController(testClient);
  });

  it('should Test Get all roles', async () => {
    const response = await makeApiCall(
      () => controller.getAllRoles()
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });
});