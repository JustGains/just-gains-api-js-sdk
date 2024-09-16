# Exercise Types

```ts
const exerciseTypesController = new ExerciseTypesController(client);
```

## Class Name

`ExerciseTypesController`

## Methods

* [Get Exercise Types](../../doc/controllers/exercise-types.md#get-exercise-types)
* [Create a New Exercise Type](../../doc/controllers/exercise-types.md#create-a-new-exercise-type)
* [Update an Exercise Type](../../doc/controllers/exercise-types.md#update-an-exercise-type)
* [Delete an Exercise Type](../../doc/controllers/exercise-types.md#delete-an-exercise-type)


# Get Exercise Types

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseTypes(requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseTypeListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseTypeListResponse`](../../doc/models/exercise-type-list-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await exerciseTypesController.getExerciseTypes();
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


# Create a New Exercise Type

```ts
async createANewExerciseType(  body: ExerciseType,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ExerciseType`](../../doc/models/exercise-type.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`](../../doc/models/just-gains-response.md)

## Example Usage

```ts
const body: ExerciseType = {
  exerciseTypeCode: 'WEIGHT_REPS',
  exerciseTypeName: 'Weight and Repetitions',
  exerciseTypeExerciseMetrics: [
    'WEIGHT',
    'REPS'
  ],
};

try {
  const { result, ...httpResponse } = await exerciseTypesController.createANewExerciseType(body);
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


# Update an Exercise Type

```ts
async updateAnExerciseType(  exerciseTypeCode: string,
  body: ExerciseType,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseTypeCode` | `string` | Template, Required | - |
| `body` | [`ExerciseType`](../../doc/models/exercise-type.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`](../../doc/models/just-gains-response.md)

## Example Usage

```ts
const exerciseTypeCode = 'exerciseTypeCode8';

const body: ExerciseType = {
  exerciseTypeCode: 'WEIGHT_REPS',
  exerciseTypeName: 'Weight and Repetitions',
  exerciseTypeExerciseMetrics: [
    'WEIGHT',
    'REPS'
  ],
};

try {
  const { result, ...httpResponse } = await exerciseTypesController.updateAnExerciseType(
  exerciseTypeCode,
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
| 400 | Bad request | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Exercise type not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Delete an Exercise Type

```ts
async deleteAnExerciseType(  exerciseTypeCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseTypeCode` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`](../../doc/models/just-gains-response.md)

## Example Usage

```ts
const exerciseTypeCode = 'exerciseTypeCode8';

try {
  const { result, ...httpResponse } = await exerciseTypesController.deleteAnExerciseType(exerciseTypeCode);
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
| 404 | Exercise type not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |

