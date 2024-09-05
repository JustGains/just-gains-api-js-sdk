# Workouts Workout Data

```ts
const workoutsWorkoutDataController = new WorkoutsWorkoutDataController(client);
```

## Class Name

`WorkoutsWorkoutDataController`

## Methods

* [Get Workout Data by Id](../../doc/controllers/workouts-workout-data.md#get-workout-data-by-id)
* [Get Workout Detail by Id](../../doc/controllers/workouts-workout-data.md#get-workout-detail-by-id)
* [Add New Exercise to the Workout](../../doc/controllers/workouts-workout-data.md#add-new-exercise-to-the-workout)
* [Update Exercise in the Workout](../../doc/controllers/workouts-workout-data.md#update-exercise-in-the-workout)
* [Deletes an Exercise From the Workout](../../doc/controllers/workouts-workout-data.md#deletes-an-exercise-from-the-workout)


# Get Workout Data by Id

:information_source: **Note** This endpoint does not require authentication.

```ts
async getWorkoutDataById(  workoutId: number,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutDataListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutDataListResponse`](../../doc/models/workout-data-list-response.md)

## Example Usage

```ts
const workoutId = 250;

try {
  const { result, ...httpResponse } = await workoutsWorkoutDataController.getWorkoutDataById(workoutId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Workout not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Get Workout Detail by Id

:information_source: **Note** This endpoint does not require authentication.

```ts
async getWorkoutDetailById(  workoutId: number,
  exerciseCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutDataResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `number` | Template, Required | - |
| `exerciseCode` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutDataResponse`](../../doc/models/workout-data-response.md)

## Example Usage

```ts
const workoutId = 250;

const exerciseCode = 'exerciseCode8';

try {
  const { result, ...httpResponse } = await workoutsWorkoutDataController.getWorkoutDetailById(
  workoutId,
  exerciseCode
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Workout or exercise not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Add New Exercise to the Workout

```ts
async addNewExerciseToTheWorkout(  workoutId: number,
  exerciseCode: string,
  body: WorkoutData,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutDataResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `number` | Template, Required | - |
| `exerciseCode` | `string` | Template, Required | - |
| `body` | [`WorkoutData`](../../doc/models/workout-data.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutDataResponse`](../../doc/models/workout-data-response.md)

## Example Usage

```ts
const workoutId = 250;

const exerciseCode = 'exerciseCode8';

const body: WorkoutData = {
  exerciseCode: 'BARBELL_SQUAT',
  exerciseNotes: 'Keep your core tight throughout the movement',
  exerciseMetrics: [
    {
      metricCode: 'WEIGHT',
      metricUnit: 'KG',
    },
    {
      metricCode: 'REPS',
      metricUnit: 'COUNT',
    }
  ],
  exerciseData: [
    110010,
    21108,
    31206,
    41206
  ],
  exerciseOrder: 2,
  exerciseGroupID: 1,
  exerciseGroupType: ExerciseGroupTypeEnum.SUPERSET,
};

try {
  const { result, ...httpResponse } = await workoutsWorkoutDataController.addNewExerciseToTheWorkout(
  workoutId,
  exerciseCode,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid exercise data | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Workout not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Update Exercise in the Workout

```ts
async updateExerciseInTheWorkout(  workoutId: number,
  exerciseCode: string,
  body: WorkoutData,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutDataResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `number` | Template, Required | - |
| `exerciseCode` | `string` | Template, Required | - |
| `body` | [`WorkoutData`](../../doc/models/workout-data.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutDataResponse`](../../doc/models/workout-data-response.md)

## Example Usage

```ts
const workoutId = 250;

const exerciseCode = 'exerciseCode8';

const body: WorkoutData = {
  exerciseCode: 'BARBELL_SQUAT',
  exerciseNotes: 'Keep your core tight throughout the movement',
  exerciseMetrics: [
    {
      metricCode: 'WEIGHT',
      metricUnit: 'KG',
    },
    {
      metricCode: 'REPS',
      metricUnit: 'COUNT',
    }
  ],
  exerciseData: [
    110010,
    21108,
    31206,
    41206
  ],
  exerciseOrder: 2,
  exerciseGroupID: 1,
  exerciseGroupType: ExerciseGroupTypeEnum.SUPERSET,
};

try {
  const { result, ...httpResponse } = await workoutsWorkoutDataController.updateExerciseInTheWorkout(
  workoutId,
  exerciseCode,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid exercise data | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Workout or exercise not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Deletes an Exercise From the Workout

```ts
async deletesAnExerciseFromTheWorkout(  workoutId: number,
  exerciseCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `number` | Template, Required | - |
| `exerciseCode` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const workoutId = 250;

const exerciseCode = 'exerciseCode8';

try {
  const { result, ...httpResponse } = await workoutsWorkoutDataController.deletesAnExerciseFromTheWorkout(
  workoutId,
  exerciseCode
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Workout or exercise not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |

