# Exercise Drafts

```ts
const exerciseDraftsController = new ExerciseDraftsController(client);
```

## Class Name

`ExerciseDraftsController`


# Exercise Draft Format

Create or Update an existing exercise with the Exercise Draft format

```ts
async exerciseDraftFormat(  body: ExerciseDraftDTO,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseDraftResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ExerciseDraftDTO`](../../doc/models/exercise-draft-dto.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseDraftResponse`](../../doc/models/exercise-draft-response.md)

## Example Usage

```ts
const body: ExerciseDraftDTO = {};

try {
  const { result, ...httpResponse } = await exerciseDraftsController.exerciseDraftFormat(body);
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
| 400 | Bad request | [`ExerciseDraft400Error`](../../doc/models/exercise-draft-400-error.md) |
| 404 | Exercise not found | [`ExerciseDraft404Error`](../../doc/models/exercise-draft-404-error.md) |

