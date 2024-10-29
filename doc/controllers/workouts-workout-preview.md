# Workouts Workout Preview

```ts
const workoutsWorkoutPreviewController = new WorkoutsWorkoutPreviewController(client);
```

## Class Name

`WorkoutsWorkoutPreviewController`


# Get Workout Preview by ID

```ts
async getWorkoutPreviewByID(  workoutId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutPreviewResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The ID of the workout to retrieve |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutPreviewResponse`](../../doc/models/workout-preview-response.md)

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

try {
  const { result, ...httpResponse } = await workoutsWorkoutPreviewController.getWorkoutPreviewByID(workoutId);
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

