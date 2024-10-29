/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { WorkoutsWorkoutPreviewController } from '../src';
import { testClient } from './testClient';
import { expectHeadersToMatch, makeApiCall } from './testHelper';

describe('WorkoutsWorkoutPreviewController', () => {
  let controller : WorkoutsWorkoutPreviewController;

  beforeAll(() => {
    controller = new WorkoutsWorkoutPreviewController(testClient);
  });

  it('should Test Get workout preview by ID', async () => {
    const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

    const response = await makeApiCall(
      () => controller.getWorkoutPreviewByID(workoutId)
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });
});
