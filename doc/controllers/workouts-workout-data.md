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
async getWorkoutDetailById(  exerciseCode: string,
  workoutId: number,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutDataResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | **Constraints**: *Pattern*: `^[A-Z_]+$` |
| `workoutId` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutDataResponse`](../../doc/models/workout-data-response.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const workoutId = 250;

try {
  const { result, ...httpResponse } = await workoutsWorkoutDataController.getWorkoutDetailById(
  exerciseCode,
  workoutId
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
async addNewExerciseToTheWorkout(  body: WorkoutData,
  exerciseCode: string,
  workoutId: number,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutDataResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`WorkoutData`](../../doc/models/workout-data.md) | Body, Required | - |
| `exerciseCode` | `string` | Template, Required | **Constraints**: *Pattern*: `^[A-Z_]+$` |
| `workoutId` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutDataResponse`](../../doc/models/workout-data-response.md)

## Example Usage

```ts
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

const exerciseCode = 'exerciseCode8';

const workoutId = 250;

try {
  const { result, ...httpResponse } = await workoutsWorkoutDataController.addNewExerciseToTheWorkout(
  body,
  exerciseCode,
  workoutId
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
async updateExerciseInTheWorkout(  body: WorkoutData,
  exerciseCode: string,
  workoutId: number,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutDataResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`WorkoutData`](../../doc/models/workout-data.md) | Body, Required | - |
| `exerciseCode` | `string` | Template, Required | **Constraints**: *Pattern*: `^[A-Z_]+$` |
| `workoutId` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutDataResponse`](../../doc/models/workout-data-response.md)

## Example Usage

```ts
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

const exerciseCode = 'exerciseCode8';

const workoutId = 250;

try {
  const { result, ...httpResponse } = await workoutsWorkoutDataController.updateExerciseInTheWorkout(
  body,
  exerciseCode,
  workoutId
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
async deletesAnExerciseFromTheWorkout(  exerciseCode: string,
  workoutId: number,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | **Constraints**: *Pattern*: `^[A-Z_]+$` |
| `workoutId` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const workoutId = 250;

try {
  const { result, ...httpResponse } = await workoutsWorkoutDataController.deletesAnExerciseFromTheWorkout(
  exerciseCode,
  workoutId
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

