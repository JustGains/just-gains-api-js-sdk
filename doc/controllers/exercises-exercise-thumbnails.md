# Exercises Exercise Thumbnails

```ts
const exercisesExerciseThumbnailsController = new ExercisesExerciseThumbnailsController(client);
```

## Class Name

`ExercisesExerciseThumbnailsController`

## Methods

* [Get Exercise Thumbnails](../../doc/controllers/exercises-exercise-thumbnails.md#get-exercise-thumbnails)
* [Get Exercise Thumbnail by User Id](../../doc/controllers/exercises-exercise-thumbnails.md#get-exercise-thumbnail-by-user-id)
* [Add or Update Exercise Thumbnail](../../doc/controllers/exercises-exercise-thumbnails.md#add-or-update-exercise-thumbnail)
* [Delete an Exercise Thumbnail](../../doc/controllers/exercises-exercise-thumbnails.md#delete-an-exercise-thumbnail)


# Get Exercise Thumbnails

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseThumbnails(  exerciseCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseThumbnailListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to retrieve thumbnails for |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseThumbnailListResponse`](../../doc/models/exercise-thumbnail-list-response.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

try {
  const { result, ...httpResponse } = await exercisesExerciseThumbnailsController.getExerciseThumbnails(exerciseCode);
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
| 400 | Invalid exercise code | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Exercise thumbnails not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Get Exercise Thumbnail by User Id

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseThumbnailByUserId(  exerciseCode: string,
  userId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseThumbnailResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to retrieve thumbnail for |
| `userId` | `string` | Template, Required | The userId of the creator whose thumbnail we're referencing |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseThumbnailResponse`](../../doc/models/exercise-thumbnail-response.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const userId = 'userId0';

try {
  const { result, ...httpResponse } = await exercisesExerciseThumbnailsController.getExerciseThumbnailByUserId(
  exerciseCode,
  userId
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
| 400 | Invalid exercise code or user ID | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Exercise thumbnail not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Add or Update Exercise Thumbnail

```ts
async addOrUpdateExerciseThumbnail(  exerciseCode: string,
  userId: string,
  body: ExerciseThumbnail,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseThumbnailResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to add or update thumbnail for |
| `userId` | `string` | Template, Required | The userId of the thumbnail creator |
| `body` | [`ExerciseThumbnail`](../../doc/models/exercise-thumbnail.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseThumbnailResponse`](../../doc/models/exercise-thumbnail-response.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const userId = 'userId0';

const body: ExerciseThumbnail = {
  exerciseCode: 'exerciseCode2',
  userId: '000021e4-0000-0000-0000-000000000000',
  mediaAsset: {
    mediaId: '7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b',
    fileName: 'workout_routine.mp4',
    filePath: 'media/videos/routines/workout_routine.mp4',
    fileSize: 15728640,
    fileFormat: 'video/mp4',
    fileUrl: 'https://api.justsuperhuman.com/media/videos/routines/workout_routine.mp4',
    description: 'High-intensity interval training (HIIT) workout routine for beginners',
  },
};

try {
  const { result, ...httpResponse } = await exercisesExerciseThumbnailsController.addOrUpdateExerciseThumbnail(
  exerciseCode,
  userId,
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
| 400 | Invalid exercise thumbnail data | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 401 | Authentication required | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Delete an Exercise Thumbnail

```ts
async deleteAnExerciseThumbnail(  exerciseCode: string,
  userId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code |
| `userId` | `string` | Template, Required | The userId of the thumbnail creator |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`](../../doc/models/just-gains-response.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const userId = 'userId0';

try {
  const { result, ...httpResponse } = await exercisesExerciseThumbnailsController.deleteAnExerciseThumbnail(
  exerciseCode,
  userId
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
| 401 | Authentication required | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Exercise thumbnail not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |

