# Exercise Categories

```ts
const exerciseCategoriesController = new ExerciseCategoriesController(client);
```

## Class Name

`ExerciseCategoriesController`

## Methods

* [Get Exercise Categories](../../doc/controllers/exercise-categories.md#get-exercise-categories)
* [Create Exercise Category](../../doc/controllers/exercise-categories.md#create-exercise-category)
* [Get Exercise Category](../../doc/controllers/exercise-categories.md#get-exercise-category)
* [Update an Exercise Category](../../doc/controllers/exercise-categories.md#update-an-exercise-category)
* [Delete an Exercise Category](../../doc/controllers/exercise-categories.md#delete-an-exercise-category)
* [Get Exercise Category Translations](../../doc/controllers/exercise-categories.md#get-exercise-category-translations)
* [Update Exercise Category Translations](../../doc/controllers/exercise-categories.md#update-exercise-category-translations)


# Get Exercise Categories

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseCategories(  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseCategoriesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Query, Optional | The locale for returned category names |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseCategoriesResponse`](../../doc/models/exercise-categories-response.md)

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
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseCategoriesResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ExerciseCategory`](../../doc/models/exercise-category.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseCategoriesResponse1`](../../doc/models/exercise-categories-response-1.md)

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
| 400 | Bad Request | [`ExerciseCategories400Error`](../../doc/models/exercise-categories-400-error.md) |


# Get Exercise Category

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseCategory(  exerciseCategoryCode: string,
  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseCategoriesResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCategoryCode` | `string` | Template, Required | - |
| `localeCode` | `string \| undefined` | Query, Optional | The locale for returned category name |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseCategoriesResponse1`](../../doc/models/exercise-categories-response-1.md)

## Example Usage

```ts
const exerciseCategoryCode = 'exerciseCategoryCode8';

const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseCategoriesController.getExerciseCategory(
  exerciseCategoryCode,
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
| 404 | Exercise Category Not Found | [`ExerciseCategories404Error`](../../doc/models/exercise-categories-404-error.md) |


# Update an Exercise Category

```ts
async updateAnExerciseCategory(  exerciseCategoryCode: string,
  body: ExerciseCategory,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseCategoriesResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCategoryCode` | `string` | Template, Required | - |
| `body` | [`ExerciseCategory`](../../doc/models/exercise-category.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseCategoriesResponse1`](../../doc/models/exercise-categories-response-1.md)

## Example Usage

```ts
const exerciseCategoryCode = 'exerciseCategoryCode8';

const body: ExerciseCategory = {
  exerciseCategoryCode: 'STRENGTH_TRAINING',
  exerciseCategoryName: 'Strength Training',
};

try {
  const { result, ...httpResponse } = await exerciseCategoriesController.updateAnExerciseCategory(
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
| 400 | Bad Request | [`ExerciseCategories400Error`](../../doc/models/exercise-categories-400-error.md) |
| 404 | Category not found | [`ExerciseCategories404Error`](../../doc/models/exercise-categories-404-error.md) |


# Delete an Exercise Category

```ts
async deleteAnExerciseCategory(  exerciseCategoryCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseCategoriesResponse4>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCategoryCode` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseCategoriesResponse4`](../../doc/models/exercise-categories-response-4.md)

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
| 404 | Category not found | [`ExerciseCategories404Error`](../../doc/models/exercise-categories-404-error.md) |


# Get Exercise Category Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseCategoryTranslations(  exerciseCategoryCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseCategoriesTranslationsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCategoryCode` | `string` | Template, Required | The unique code of the exercise category |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseCategoriesTranslationsResponse`](../../doc/models/exercise-categories-translations-response.md)

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
| 400 | Bad request | [`ExerciseCategoriesTranslations400Error`](../../doc/models/exercise-categories-translations-400-error.md) |
| 404 | Exercise category not found | [`ExerciseCategoriesTranslations404Error`](../../doc/models/exercise-categories-translations-404-error.md) |


# Update Exercise Category Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateExerciseCategoryTranslations(  exerciseCategoryCode: string,
  body: ExerciseCategoryTranslation[],
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseCategoriesTranslationsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCategoryCode` | `string` | Template, Required | The unique code of the exercise category |
| `body` | [`ExerciseCategoryTranslation[]`](../../doc/models/exercise-category-translation.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseCategoriesTranslationsResponse1`](../../doc/models/exercise-categories-translations-response-1.md)

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
| 400 | Bad request | [`ExerciseCategoriesTranslations400Error`](../../doc/models/exercise-categories-translations-400-error.md) |
| 404 | Exercise category not found | [`ExerciseCategoriesTranslations404Error`](../../doc/models/exercise-categories-translations-404-error.md) |
| 422 | Validation error | [`ExerciseCategoriesTranslations422Error`](../../doc/models/exercise-categories-translations-422-error.md) |

