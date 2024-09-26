# Exercise Library Exercise Drafts

```ts
const exerciseLibraryExerciseDraftsController = new ExerciseLibraryExerciseDraftsController(client);
```

## Class Name

`ExerciseLibraryExerciseDraftsController`


# Create Update an Exercise With Exercise Draft DTO

```ts
async createUpdateAnExerciseWithExerciseDraftDTO(  body: ExerciseDraftDTO,
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
  const { result, ...httpResponse } = await exerciseLibraryExerciseDraftsController.createUpdateAnExerciseWithExerciseDraftDTO(body);
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

