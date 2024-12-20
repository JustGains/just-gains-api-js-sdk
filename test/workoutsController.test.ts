/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { SortOrderEnum, WorkoutsController } from '../src';
import { testClient } from './testClient';
import { expectHeadersToMatch, makeApiCall } from './testHelper';

describe('WorkoutsController', () => {
  let controller : WorkoutsController;

  beforeAll(() => {
    controller = new WorkoutsController(testClient);
  });

  it('should Test Get a paginated list of workouts', async () => {
    const page = 1;

    const pageSize = 20;

    const sortOrder = SortOrderEnum.Desc;

    const response = await makeApiCall(
      () => controller.getAPaginatedListOfWorkouts(
        page,
        pageSize,
        undefined,
        sortOrder
      )
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });

  it('should Test Get a workout by ID', async () => {
    const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

    const response = await makeApiCall(
      () => controller.getAWorkoutByID(workoutId)
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });

  it('should Test Delete a workout', async () => {
    const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

    const response = await makeApiCall(
      () => controller.deleteAWorkout(workoutId)
    );

    expect(response.statusCode).toBe(204);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });

  it('should Test Get a workout by workout slug', async () => {
    const workoutSlug = 'full-body-strength-training';

    const response = await makeApiCall(
      () => controller.getAWorkoutByWorkoutSlug(workoutSlug)
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });
});
