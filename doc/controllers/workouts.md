# Workouts

Core workout management functionality.

```ts
const workoutsController = new WorkoutsController(client);
```

## Class Name

`WorkoutsController`

## Methods

* [Get a Paginated List of Workouts](../../doc/controllers/workouts.md#get-a-paginated-list-of-workouts)
* [Create a New Workout](../../doc/controllers/workouts.md#create-a-new-workout)
* [Get a Workout by ID](../../doc/controllers/workouts.md#get-a-workout-by-id)
* [Duplicate a Workout](../../doc/controllers/workouts.md#duplicate-a-workout)


# Get a Paginated List of Workouts

```ts
async getAPaginatedListOfWorkouts(  page?: number,
  pageSize?: number,
  sortBy?: string,
  sortOrder?: SortOrderEnum,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutTableListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | The page number to retrieve |
| `pageSize` | `number \| undefined` | Query, Optional | The number of items to retrieve per page |
| `sortBy` | `string \| undefined` | Query, Optional | - |
| `sortOrder` | [`SortOrderEnum \| undefined`](../../doc/models/sort-order-enum.md) | Query, Optional | The order to sort the results in |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutTableListResponse`](../../doc/models/workout-table-list-response.md)

## Example Usage

```ts
const page = 1;

const pageSize = 20;

const sortOrder = SortOrderEnum.Desc;

try {
  const { result, ...httpResponse } = await workoutsController.getAPaginatedListOfWorkouts(
  page,
  pageSize,
  undefined,
  sortOrder
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
| 400 | Invalid pagination parameters | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Create a New Workout

```ts
async createANewWorkout(  body: Workout,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Workout`](../../doc/models/workout.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutResponse`](../../doc/models/workout-response.md)

## Example Usage

```ts
const body: Workout = {
  workoutId: 1234,
  workoutTitle: 'Full Body Strength Training',
  updatedAt: '07/08/2023 14:30:00',
  lastUsedAt: '07/07/2023 09:15:00',
  totalUses: 15,
  averageRating: 4.7,
};

try {
  const { result, ...httpResponse } = await workoutsController.createANewWorkout(body);
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
| 400 | Invalid workout data | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Get a Workout by ID

```ts
async getAWorkoutByID(  workoutId: number,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutResponse`](../../doc/models/workout-response.md)

## Example Usage

```ts
const workoutId = 250;

try {
  const { result, ...httpResponse } = await workoutsController.getAWorkoutByID(workoutId);
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


# Duplicate a Workout

Creates a copy of an existing workout, preserving creator credits and adding the current user as a new contributor.

```ts
async duplicateAWorkout(  workoutId: number,
  body: WorkoutsDuplicateRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `number` | Template, Required | The ID of the workout to duplicate |
| `body` | [`WorkoutsDuplicateRequest`](../../doc/models/workouts-duplicate-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutResponse`](../../doc/models/workout-response.md)

## Example Usage

```ts
const workoutId = 250;

const body: WorkoutsDuplicateRequest = {
  newWorkoutTitle: 'My Modified Full Body Workout',
};

try {
  const { result, ...httpResponse } = await workoutsController.duplicateAWorkout(
  workoutId,
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
| 400 | Invalid request data | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 403 | Permission denied | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Workout not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |

