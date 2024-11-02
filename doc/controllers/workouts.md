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
* [Update a Workout by ID](../../doc/controllers/workouts.md#update-a-workout-by-id)
* [Delete a Workout](../../doc/controllers/workouts.md#delete-a-workout)
* [Get a Workout by Workout Slug](../../doc/controllers/workouts.md#get-a-workout-by-workout-slug)
* [Bookmark Workout](../../doc/controllers/workouts.md#bookmark-workout)
* [Remove Workout Bookmark](../../doc/controllers/workouts.md#remove-workout-bookmark)
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
| `page` | `number \| undefined` | Query, Optional | The page number to retrieve<br>**Default**: `1`<br>**Constraints**: `>= 1` |
| `pageSize` | `number \| undefined` | Query, Optional | The number of items to retrieve per page<br>**Default**: `20`<br>**Constraints**: `>= 1`, `<= 100` |
| `sortBy` | `string \| undefined` | Query, Optional | - |
| `sortOrder` | [`SortOrderEnum \| undefined`](../../doc/models/sort-order-enum.md) | Query, Optional | The order to sort the results in<br>**Default**: `SortOrderEnum.Desc` |
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
async createANewWorkout(  body: WorkoutRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`WorkoutRequest`](../../doc/models/workout-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutResponse`](../../doc/models/workout-response.md)

## Example Usage

```ts
const body: WorkoutRequest = {
  workoutTitle: 'Full Body Strength Training',
  workoutSlug: 'full-body-strength-training',
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
async getAWorkoutByID(  workoutId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The ID of the workout to retrieve |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutResponse`](../../doc/models/workout-response.md)

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

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


# Update a Workout by ID

```ts
async updateAWorkoutByID(  workoutId: string,
  body: WorkoutUpdate,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The ID of the workout to update |
| `body` | [`WorkoutUpdate`](../../doc/models/workout-update.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutResponse`](../../doc/models/workout-response.md)

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

const body: WorkoutUpdate = {
  workoutTitle: 'Full Body Strength Training',
  workoutSlug: 'full-body-strength-training',
  tags: [
    'strength',
    'fullbody',
    'beginner'
  ],
};

try {
  const { result, ...httpResponse } = await workoutsController.updateAWorkoutByID(
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
| 400 | Invalid workout data | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 403 | Permission denied | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Workout not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Delete a Workout

Soft-deletes a workout and all associated data

```ts
async deleteAWorkout(  workoutId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The ID of the workout to delete |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`](../../doc/models/just-gains-response.md)

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

try {
  const { result, ...httpResponse } = await workoutsController.deleteAWorkout(workoutId);
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
| 400 | Invalid workout ID format | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 403 | Permission denied | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Workout not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Get a Workout by Workout Slug

```ts
async getAWorkoutByWorkoutSlug(  workoutSlug: string,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutSlug` | `string` | Template, Required | The URL slug of the workout |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutResponse`](../../doc/models/workout-response.md)

## Example Usage

```ts
const workoutSlug = 'full-body-strength-training';

try {
  const { result, ...httpResponse } = await workoutsController.getAWorkoutByWorkoutSlug(workoutSlug);
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


# Bookmark Workout

Adds the specified workout to the current user's bookmarks. If the workout is already bookmarked, the request is idempotent and will not create a duplicate.

:information_source: **Note** This endpoint does not require authentication.

```ts
async bookmarkWorkout(  workoutId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The unique identifier of the workout to bookmark |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const workoutId = '00000e9a-0000-0000-0000-000000000000';

try {
  const { result, ...httpResponse } = await workoutsController.bookmarkWorkout(workoutId);
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
| 400 | Bad request | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 401 | - | `ApiError` |
| 404 | Workout not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Remove Workout Bookmark

Removes the specified workout from the current user's bookmarks. If the workout is not bookmarked, the request is idempotent and will not result in an error.

:information_source: **Note** This endpoint does not require authentication.

```ts
async removeWorkoutBookmark(  workoutId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The unique identifier of the workout to remove from bookmarks |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const workoutId = '00000e9a-0000-0000-0000-000000000000';

try {
  const { result, ...httpResponse } = await workoutsController.removeWorkoutBookmark(workoutId);
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
| 400 | Bad request | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 401 | - | `ApiError` |
| 404 | Workout not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Duplicate a Workout

Creates a copy of an existing workout, preserving creator credits and adding the current user as a new contributor.

```ts
async duplicateAWorkout(  workoutId: string,
  body: WorkoutsDuplicateRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The ID of the workout to duplicate |
| `body` | [`WorkoutsDuplicateRequest`](../../doc/models/workouts-duplicate-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutResponse`](../../doc/models/workout-response.md)

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

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

