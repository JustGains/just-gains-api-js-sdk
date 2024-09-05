# Exercises

Core exercise management functionality.

```ts
const exercisesController = new ExercisesController(client);
```

## Class Name

`ExercisesController`

## Methods

* [Get Exercises](../../doc/controllers/exercises.md#get-exercises)
* [Create a New Exercise](../../doc/controllers/exercises.md#create-a-new-exercise)
* [Get Exercise](../../doc/controllers/exercises.md#get-exercise)
* [Update an Exercise](../../doc/controllers/exercises.md#update-an-exercise)
* [Delete an Exercise](../../doc/controllers/exercises.md#delete-an-exercise)
* [Get Exercise Translations](../../doc/controllers/exercises.md#get-exercise-translations)
* [Update Exercise Translations](../../doc/controllers/exercises.md#update-exercise-translations)
* [Get Exercise Muscle Group](../../doc/controllers/exercises.md#get-exercise-muscle-group)


# Get Exercises

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExercises(  nameSearch?: string,
  exerciseCategoryCodes?: string[],
  exerciseTypeCodes?: string[],
  exerciseEquipmentCodes?: string[],
  exerciseMuscleCodes?: string[],
  exerciseMetricCodes?: string[],
  publishedStatusCodes?: string[],
  localeCode?: string,
  pageIndex?: number,
  pageSize?: number,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `nameSearch` | `string \| undefined` | Query, Optional | List of exercise names to filter by |
| `exerciseCategoryCodes` | `string[] \| undefined` | Query, Optional | List of exercise category codes to filter by |
| `exerciseTypeCodes` | `string[] \| undefined` | Query, Optional | List of exercise types to filter by |
| `exerciseEquipmentCodes` | `string[] \| undefined` | Query, Optional | List of exercise equipment to filter by |
| `exerciseMuscleCodes` | `string[] \| undefined` | Query, Optional | - |
| `exerciseMetricCodes` | `string[] \| undefined` | Query, Optional | List of exercise metrics to filter by |
| `publishedStatusCodes` | `string[] \| undefined` | Query, Optional | List of publish statuses to filter by |
| `localeCode` | `string \| undefined` | Query, Optional | Locale to filter by |
| `pageIndex` | `number \| undefined` | Query, Optional | Page index for pagination |
| `pageSize` | `number \| undefined` | Query, Optional | Page size for pagination |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseListResponse`](../../doc/models/exercise-list-response.md)

## Example Usage

```ts
const nameSearch = 'Bench Press';

const exerciseCategoryCodes: string[] = [
  'STRENGTH',
  'CARDIO'
];

const localeCode = 'en-US';

const pageIndex = 1;

const pageSize = 100;

try {
  const { result, ...httpResponse } = await exercisesController.getExercises(
  nameSearch,
  exerciseCategoryCodes,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  localeCode,
  pageIndex,
  pageSize
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


# Create a New Exercise

```ts
async createANewExercise(  body: Exercise,
  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Exercise`](../../doc/models/exercise.md) | Body, Required | - |
| `localeCode` | `string \| undefined` | Query, Optional | Locale code to specify the language to return the newly created exercise in. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseResponse`](../../doc/models/exercise-response.md)

## Example Usage

```ts
const body: Exercise = {
  exerciseCode: 'BARBELL_SQUAT',
  exerciseName: 'Barbell Squat',
  userId: '123e4567-e89b-12d3-a456-426614174000',
  exerciseTypeCode: 'STRENGTH',
  publishStatusCode: PublishStatusCodeEnum.UNREVIEWED,
  difficulty: 7,
  metabolicEquivalent: 8.5,
  isPlateloaded: true,
  isCardio: false,
  olympicRating: 5,
  powerLifterRating: 5,
  calisthenicRating: 5,
  popularityRating: 5,
  isPlyometric: true,
  isIsometric: false,
  isCalisthenic: true,
  isWeighted: false,
  isUnilateral: true,
  isBodyweight: true,
  adminNotes: 'This exercise requires supervision.',
};

const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exercisesController.createANewExercise(
  body,
  localeCode
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
| 400 | Invalid exercise data | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Get Exercise

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExercise(  exerciseCode: string,
  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | - |
| `localeCode` | `string \| undefined` | Query, Optional | Locale code to specify the language for exercise details |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseResponse`](../../doc/models/exercise-response.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exercisesController.getExercise(
  exerciseCode,
  localeCode
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
| 404 | Exercise not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Update an Exercise

```ts
async updateAnExercise(  exerciseCode: string,
  body: Exercise,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | - |
| `body` | [`Exercise`](../../doc/models/exercise.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const body: Exercise = {
  exerciseCode: 'BARBELL_SQUAT',
  exerciseName: 'Barbell Squat',
  userId: '123e4567-e89b-12d3-a456-426614174000',
  exerciseTypeCode: 'STRENGTH',
  publishStatusCode: PublishStatusCodeEnum.UNREVIEWED,
  difficulty: 7,
  metabolicEquivalent: 8.5,
  isPlateloaded: true,
  isCardio: false,
  olympicRating: 5,
  powerLifterRating: 5,
  calisthenicRating: 5,
  popularityRating: 5,
  isPlyometric: true,
  isIsometric: false,
  isCalisthenic: true,
  isWeighted: false,
  isUnilateral: true,
  isBodyweight: true,
  adminNotes: 'This exercise requires supervision.',
};

try {
  const { result, ...httpResponse } = await exercisesController.updateAnExercise(
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
| 400 | Invalid exercise data | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Delete an Exercise

```ts
async deleteAnExercise(  exerciseCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

try {
  const { result, ...httpResponse } = await exercisesController.deleteAnExercise(exerciseCode);
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
| 401 | Unauthorized | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Exercise not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Get Exercise Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseTranslations(  exerciseCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseTranslationListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The unique code of the exercise |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseTranslationListResponse`](../../doc/models/exercise-translation-list-response.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

try {
  const { result, ...httpResponse } = await exercisesController.getExerciseTranslations(exerciseCode);
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
| 404 | Exercise translations not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Update Exercise Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateExerciseTranslations(  exerciseCode: string,
  body: ExerciseTranslation[],
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The unique code of the exercise |
| `body` | [`ExerciseTranslation[]`](../../doc/models/exercise-translation.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const body: ExerciseTranslation[] = [
  {
    localeCode: 'en-US',
  }
];

try {
  const { result, ...httpResponse } = await exercisesController.updateExerciseTranslations(
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
| 400 | Bad request | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Exercise not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 422 | Validation error | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Get Exercise Muscle Group

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseMuscleGroup(  exerciseCode: string,
  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MuscleGroupDtoResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The unique code of the exercise |
| `localeCode` | `string \| undefined` | Query, Optional | The locale code for the muscle group names (e.g., 'en-US', 'es-ES') |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MuscleGroupDtoResponse`](../../doc/models/muscle-group-dto-response.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exercisesController.getExerciseMuscleGroup(
  exerciseCode,
  localeCode
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
| 404 | Exercise not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |

