# Workouts Workout Content

```ts
const workoutsWorkoutContentController = new WorkoutsWorkoutContentController(client);
```

## Class Name

`WorkoutsWorkoutContentController`

## Methods

* [Get Workout Content by ID](../../doc/controllers/workouts-workout-content.md#get-workout-content-by-id)
* [Update Workout Content by ID](../../doc/controllers/workouts-workout-content.md#update-workout-content-by-id)


# Get Workout Content by ID

```ts
async getWorkoutContentByID(  workoutId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutContentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The ID of the workout to retrieve |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutContentResponse`](../../doc/models/workout-content-response.md)

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

try {
  const { result, ...httpResponse } = await workoutsWorkoutContentController.getWorkoutContentByID(workoutId);
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


# Update Workout Content by ID

```ts
async updateWorkoutContentByID(  workoutId: string,
  body?: WorkoutContent,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutContentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The ID of the workout to update |
| `body` | [`WorkoutContent \| undefined`](../../doc/models/workout-content.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutContentResponse`](../../doc/models/workout-content-response.md)

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

const body: WorkoutContent = {
  workoutID: '9f897bfa-716d-4caa-b8fb-20bf3f2f3416',
};

try {
  const { result, ...httpResponse } = await workoutsWorkoutContentController.updateWorkoutContentByID(
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
| 404 | Workout not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |

