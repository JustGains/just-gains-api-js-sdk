# Exercises Exercise Videos

```ts
const exercisesExerciseVideosController = new ExercisesExerciseVideosController(client);
```

## Class Name

`ExercisesExerciseVideosController`

## Methods

* [Get Exercise Video On](../../doc/controllers/exercises-exercise-videos.md#get-exercise-video-on)
* [Add New Exercise Videos](../../doc/controllers/exercises-exercise-videos.md#add-new-exercise-videos)
* [Update Exercise Videos](../../doc/controllers/exercises-exercise-videos.md#update-exercise-videos)
* [Get Exercise Video by User Id](../../doc/controllers/exercises-exercise-videos.md#get-exercise-video-by-user-id)
* [Delete an Exercise Video](../../doc/controllers/exercises-exercise-videos.md#delete-an-exercise-video)


# Get Exercise Video On

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseVideoOn(  exerciseCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseVideoListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to retrieve videos for |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseVideoListResponse`](../../doc/models/exercise-video-list-response.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

try {
  const { result, ...httpResponse } = await exercisesExerciseVideosController.getExerciseVideoOn(exerciseCode);
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
| 404 | Exercise videos not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Add New Exercise Videos

```ts
async addNewExerciseVideos(  exerciseCode: string,
  body: ExerciseVideo,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseVideoResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to add videos to |
| `body` | [`ExerciseVideo`](../../doc/models/exercise-video.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseVideoResponse`](../../doc/models/exercise-video-response.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const body: ExerciseVideo = {
  exerciseCode: 'BARBELL_SQUAT',
  userId: '123e4567-e89b-12d3-a456-426614174000',
  sortOrder: 1,
};

try {
  const { result, ...httpResponse } = await exercisesExerciseVideosController.addNewExerciseVideos(
  exerciseCode,
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
| 400 | Invalid exercise video data | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 401 | Authentication required | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Update Exercise Videos

```ts
async updateExerciseVideos(  exerciseCode: string,
  body: ExerciseVideo[],
requestOptions?: RequestOptions): Promise<ApiResponse<ExercisesVideosResponse2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code of the exercise videos to update |
| `body` | [`ExerciseVideo[]`](../../doc/models/exercise-video.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExercisesVideosResponse2`](../../doc/models/exercises-videos-response-2.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const body: ExerciseVideo[] = [
  {
    exerciseCode: 'BARBELL_SQUAT',
    userId: '123e4567-e89b-12d3-a456-426614174000',
    sortOrder: 1,
  }
];

try {
  const { result, ...httpResponse } = await exercisesExerciseVideosController.updateExerciseVideos(
  exerciseCode,
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
| 400 | Invalid exercise video data | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 401 | Authentication required | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Exercise videos not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Get Exercise Video by User Id

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseVideoByUserId(  exerciseCode: string,
  userId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExercisesVideosResponse2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to retrieve videos for |
| `userId` | `string` | Template, Required | The userId of the creator whose videos we're referencing |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExercisesVideosResponse2`](../../doc/models/exercises-videos-response-2.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const userId = 'userId0';

try {
  const { result, ...httpResponse } = await exercisesExerciseVideosController.getExerciseVideoByUserId(
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
| 400 | Invalid exercise code | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Exercise videos not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Delete an Exercise Video

```ts
async deleteAnExerciseVideo(  exerciseCode: string,
  userId: string,
  exerciseVideoId: number,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code |
| `userId` | `string` | Template, Required | The userId of the video creator |
| `exerciseVideoId` | `number` | Template, Required | The exercise video ID to delete |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`](../../doc/models/just-gains-response.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const userId = 'userId0';

const exerciseVideoId = 66;

try {
  const { result, ...httpResponse } = await exercisesExerciseVideosController.deleteAnExerciseVideo(
  exerciseCode,
  userId,
  exerciseVideoId
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
| 404 | Exercise video not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |

