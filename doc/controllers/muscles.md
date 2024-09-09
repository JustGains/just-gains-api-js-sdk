# Muscles

Information about individual muscles and muscle anatomy.

```ts
const musclesController = new MusclesController(client);
```

## Class Name

`MusclesController`

## Methods

* [Get Muscles](../../doc/controllers/muscles.md#get-muscles)
* [Get Muscle Translations](../../doc/controllers/muscles.md#get-muscle-translations)
* [Update Muscle Translations](../../doc/controllers/muscles.md#update-muscle-translations)


# Get Muscles

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMuscles(  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MuscleListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Query, Optional | Locale code to filter muscles by language<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MuscleListResponse`](../../doc/models/muscle-list-response.md)

## Example Usage

```ts
const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await musclesController.getMuscles(localeCode);
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
| 400 | Failed to retrieve muscles | [`Muscles400Error`](../../doc/models/muscles-400-error.md) |


# Get Muscle Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMuscleTranslations(  muscleCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MuscleTranslationListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleCode` | `string` | Template, Required | The unique identifier code of the muscle to retrieve translations for |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MuscleTranslationListResponse`](../../doc/models/muscle-translation-list-response.md)

## Example Usage

```ts
const muscleCode = 'muscleCode0';

try {
  const { result, ...httpResponse } = await musclesController.getMuscleTranslations(muscleCode);
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
| 400 | Failed to retrieve muscle translations | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Muscle not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Update Muscle Translations

```ts
async updateMuscleTranslations(  body: MuscleTranslation[],
  muscleCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MusclesTranslationsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`MuscleTranslation[]`](../../doc/models/muscle-translation.md) | Body, Required | - |
| `muscleCode` | `string` | Template, Required | The unique identifier code of the muscle to update translations for |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MusclesTranslationsResponse1`](../../doc/models/muscles-translations-response-1.md)

## Example Usage

```ts
const body: MuscleTranslation[] = [
  {
    muscleCode: 'QUAD',
    localeCode: 'en-US',
    muscleName: 'Quadriceps',
  }
];

const muscleCode = 'muscleCode0';

try {
  const { result, ...httpResponse } = await musclesController.updateMuscleTranslations(
  body,
  muscleCode
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
| 400 | Failed to update muscle translations | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 401 | Unauthorized | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Muscle not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |

