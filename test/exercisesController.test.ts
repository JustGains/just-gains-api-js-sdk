/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ExercisesController } from '../src';
import { testClient } from './testClient';
import { expectHeadersToMatch, makeApiCall } from './testHelper';

describe('ExercisesController', () => {
  let controller : ExercisesController;

  beforeAll(() => {
    controller = new ExercisesController(testClient);
  });

  it('should Test getExercises', async () => {
    const exerciseCategoryCodes: string[] = [
      'STRENGTH',
      'CARDIO'
    ];

    const localeCode = 'en-US';

    const nameSearch = 'Bench Press';

    const pageIndex = 1;

    const pageSize = 100;

    const response = await makeApiCall(
      () => controller.getExercises(
        exerciseCategoryCodes,
        undefined,
        undefined,
        undefined,
        undefined,
        localeCode,
        nameSearch,
        pageIndex,
        pageSize,
        undefined
      )
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });
});
