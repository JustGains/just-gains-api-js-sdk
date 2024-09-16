# Exercise Categories

```ts
const exerciseCategoriesController = new ExerciseCategoriesController(client);
```

## Class Name

`ExerciseCategoriesController`

## Methods

* [Get Exercise Categories](../../doc/controllers/exercise-categories.md#get-exercise-categories)
* [Create Exercise Category](../../doc/controllers/exercise-categories.md#create-exercise-category)
* [Update Exercise Category](../../doc/controllers/exercise-categories.md#update-exercise-category)
* [Delete an Exercise Category](../../doc/controllers/exercise-categories.md#delete-an-exercise-category)
* [Get Exercise Category Translations](../../doc/controllers/exercise-categories.md#get-exercise-category-translations)
* [Update Exercise Category Translations](../../doc/controllers/exercise-categories.md#update-exercise-category-translations)


# Get Exercise Categories

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseCategories(  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseCategoryListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Query, Optional | The locale for returned category names<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseCategoryListResponse`](../../doc/models/exercise-category-list-response.md)

## Example Usage

```ts
const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseCategoriesController.getExerciseCategories(localeCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Exercise Category

```ts
async createExerciseCategory(  body: ExerciseCategory,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ExerciseCategory`](../../doc/models/exercise-category.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const body: ExerciseCategory = {
  exerciseCategoryCode: 'STRENGTH_TRAINING',
  exerciseCategoryName: 'Strength Training',
};

try {
  const { result, ...httpResponse } = await exerciseCategoriesController.createExerciseCategory(body);
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
| 400 | Bad Request | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Update Exercise Category

```ts
async updateExerciseCategory(  exerciseCategoryCode: string,
  body: ExerciseCategory,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCategoryCode` | `string` | Template, Required | - |
| `body` | [`ExerciseCategory`](../../doc/models/exercise-category.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const exerciseCategoryCode = 'exerciseCategoryCode8';

const body: ExerciseCategory = {
  exerciseCategoryCode: 'STRENGTH_TRAINING',
  exerciseCategoryName: 'Strength Training',
};

try {
  const { result, ...httpResponse } = await exerciseCategoriesController.updateExerciseCategory(
  exerciseCategoryCode,
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
| 400 | Bad Request | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Category not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Delete an Exercise Category

```ts
async deleteAnExerciseCategory(  exerciseCategoryCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCategoryCode` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`](../../doc/models/just-gains-response.md)

## Example Usage

```ts
const exerciseCategoryCode = 'exerciseCategoryCode8';

try {
  const { result, ...httpResponse } = await exerciseCategoriesController.deleteAnExerciseCategory(exerciseCategoryCode);
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
| 404 | Category not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Get Exercise Category Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseCategoryTranslations(  exerciseCategoryCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseCategoryTranslationListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCategoryCode` | `string` | Template, Required | The unique code of the exercise category |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseCategoryTranslationListResponse`](../../doc/models/exercise-category-translation-list-response.md)

## Example Usage

```ts
const exerciseCategoryCode = 'exerciseCategoryCode8';

try {
  const { result, ...httpResponse } = await exerciseCategoriesController.getExerciseCategoryTranslations(exerciseCategoryCode);
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
| 404 | Exercise category not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Update Exercise Category Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateExerciseCategoryTranslations(  exerciseCategoryCode: string,
  body: ExerciseCategoryTranslation[],
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCategoryCode` | `string` | Template, Required | The unique code of the exercise category |
| `body` | [`ExerciseCategoryTranslation[]`](../../doc/models/exercise-category-translation.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const exerciseCategoryCode = 'exerciseCategoryCode8';

const body: ExerciseCategoryTranslation[] = [
  {
    localeCode: 'en-US',
    exerciseCategoryName: 'Strength Training',
  }
];

try {
  const { result, ...httpResponse } = await exerciseCategoriesController.updateExerciseCategoryTranslations(
  exerciseCategoryCode,
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
| 404 | Exercise category not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 422 | Validation error | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |

