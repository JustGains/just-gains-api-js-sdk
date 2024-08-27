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
  sortBy?: SortBy1Enum,
  sortOrder?: SortOrderEnum,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | The page number to retrieve |
| `pageSize` | `number \| undefined` | Query, Optional | The number of items to retrieve per page |
| `sortBy` | [`SortBy1Enum \| undefined`](../../doc/models/sort-by-1-enum.md) | Query, Optional | The field to sort the results by |
| `sortOrder` | [`SortOrderEnum \| undefined`](../../doc/models/sort-order-enum.md) | Query, Optional | The order to sort the results in |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutsResponse`](../../doc/models/workouts-response.md)

## Example Usage

```ts
const page = 1;

const pageSize = 20;

const sortBy = SortBy1Enum.CreatedAt;

const sortOrder = SortOrderEnum.Desc;

try {
  const { result, ...httpResponse } = await workoutsController.getAPaginatedListOfWorkouts(
  page,
  pageSize,
  sortBy,
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
| 400 | Invalid pagination parameters | [`Workouts400Error`](../../doc/models/workouts-400-error.md) |


# Create a New Workout

```ts
async createANewWorkout(  body: Workout,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Workout`](../../doc/models/workout.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutsResponse1`](../../doc/models/workouts-response-1.md)

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
| 400 | Invalid workout data | [`Workouts400Error`](../../doc/models/workouts-400-error.md) |


# Get a Workout by ID

```ts
async getAWorkoutByID(  workoutId: number,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutsResponse1`](../../doc/models/workouts-response-1.md)

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
| 404 | Workout not found | [`Workouts404Error`](../../doc/models/workouts-404-error.md) |


# Duplicate a Workout

Creates a copy of an existing workout, preserving creator credits and adding the current user as a new contributor.

```ts
async duplicateAWorkout(  workoutId: number,
  body: WorkoutsDuplicateRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutsDuplicateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `number` | Template, Required | The ID of the workout to duplicate |
| `body` | [`WorkoutsDuplicateRequest`](../../doc/models/workouts-duplicate-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutsDuplicateResponse`](../../doc/models/workouts-duplicate-response.md)

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
| 400 | Invalid request data | [`WorkoutsDuplicate400Error`](../../doc/models/workouts-duplicate-400-error.md) |
| 403 | Permission denied | [`WorkoutsDuplicate403Error`](../../doc/models/workouts-duplicate-403-error.md) |
| 404 | Workout not found | [`WorkoutsDuplicate404Error`](../../doc/models/workouts-duplicate-404-error.md) |

