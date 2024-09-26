# Exercise Library Exercises Exercise Videos

```ts
const exerciseLibraryExercisesExerciseVideosController = new ExerciseLibraryExercisesExerciseVideosController(client);
```

## Class Name

`ExerciseLibraryExercisesExerciseVideosController`

## Methods

* [Get Exercise Video On](../../doc/controllers/exercise-library-exercises-exercise-videos.md#get-exercise-video-on)
* [Get Exercise Video by User Id](../../doc/controllers/exercise-library-exercises-exercise-videos.md#get-exercise-video-by-user-id)
* [Add New Exercise Videos to the Specified Creator Theme](../../doc/controllers/exercise-library-exercises-exercise-videos.md#add-new-exercise-videos-to-the-specified-creator-theme)
* [Delete an Exercise Video](../../doc/controllers/exercise-library-exercises-exercise-videos.md#delete-an-exercise-video)


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
  const { result, ...httpResponse } = await exerciseLibraryExercisesExerciseVideosController.getExerciseVideoOn(exerciseCode);
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


# Get Exercise Video by User Id

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseVideoByUserId(  exerciseCode: string,
  creatorProfileId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExercisesVideosResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to retrieve videos for |
| `creatorProfileId` | `string` | Template, Required | The creatorProfileId of the creator whose videos we're referencing |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExercisesVideosResponse1`](../../doc/models/exercises-videos-response-1.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const creatorProfileId = 'creatorProfileId8';

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesExerciseVideosController.getExerciseVideoByUserId(
  exerciseCode,
  creatorProfileId
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


# Add New Exercise Videos to the Specified Creator Theme

```ts
async addNewExerciseVideosToTheSpecifiedCreatorTheme(  exerciseCode: string,
  creatorProfileId: string,
  body: MediaAssetAssignment,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseVideoResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to add videos to |
| `creatorProfileId` | `string` | Template, Required | The creatorProfileId of the video creator |
| `body` | [`MediaAssetAssignment`](../../doc/models/media-asset-assignment.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseVideoResponse`](../../doc/models/exercise-video-response.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const creatorProfileId = 'creatorProfileId8';

const body: MediaAssetAssignment = {
  mediaId: '7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b',
};

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesExerciseVideosController.addNewExerciseVideosToTheSpecifiedCreatorTheme(
  exerciseCode,
  creatorProfileId,
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


# Delete an Exercise Video

```ts
async deleteAnExerciseVideo(  exerciseCode: string,
  creatorProfileId: string,
  exerciseVideoId: number,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code |
| `creatorProfileId` | `string` | Template, Required | The creatorProfileId of the video creator |
| `exerciseVideoId` | `number` | Template, Required | The exercise video ID to delete |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`](../../doc/models/just-gains-response.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const creatorProfileId = 'creatorProfileId8';

const exerciseVideoId = 66;

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesExerciseVideosController.deleteAnExerciseVideo(
  exerciseCode,
  creatorProfileId,
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

