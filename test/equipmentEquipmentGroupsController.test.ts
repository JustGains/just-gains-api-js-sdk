/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { EquipmentEquipmentGroupsController } from '../src';
import { testClient } from './testClient';
import { expectHeadersToMatch, makeApiCall } from './testHelper';

describe('EquipmentEquipmentGroupsController', () => {
  let controller : EquipmentEquipmentGroupsController;

  beforeAll(() => {
    controller = new EquipmentEquipmentGroupsController(testClient);
  });

  it('should Test getEquipmentGroups', async () => {
    const localeCode = 'en-US';

    const response = await makeApiCall(
      () => controller.getEquipmentGroups(localeCode)
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });
});
