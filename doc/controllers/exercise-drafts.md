# Exercise Drafts

```ts
const exerciseDraftsController = new ExerciseDraftsController(client);
```

## Class Name

`ExerciseDraftsController`


# Create Update an Existing Exercise With the Exercise Draft Format

```ts
async createUpdateAnExistingExerciseWithTheExerciseDraftFormat(  body: ExerciseDraftDTO,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ExerciseDraftDTO`](../../doc/models/exercise-draft-dto.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseResponse`](../../doc/models/exercise-response.md)

## Example Usage

```ts
const body: ExerciseDraftDTO = {};

try {
  const { result, ...httpResponse } = await exerciseDraftsController.createUpdateAnExistingExerciseWithTheExerciseDraftFormat(body);
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
| 404 | Exercise not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |

