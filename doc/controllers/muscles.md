# Muscles

Information about individual muscles and muscle anatomy.

```ts
const musclesController = new MusclesController(client);
```

## Class Name

`MusclesController`

## Methods

* [Get Muscles](../../doc/controllers/muscles.md#get-muscles)
* [Get Muscle](../../doc/controllers/muscles.md#get-muscle)
* [Get Muscle Translations](../../doc/controllers/muscles.md#get-muscle-translations)
* [Update Muscle Translations](../../doc/controllers/muscles.md#update-muscle-translations)


# Get Muscles

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMuscles(  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MusclesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Query, Optional | Locale code to filter muscles by language |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MusclesResponse`](../../doc/models/muscles-response.md)

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


# Get Muscle

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMuscle(  muscleCode: string,
  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MusclesResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleCode` | `string` | Template, Required | The muscle code to retrieve. |
| `localeCode` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MusclesResponse1`](../../doc/models/muscles-response-1.md)

## Example Usage

```ts
const muscleCode = 'muscleCode0';

const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await musclesController.getMuscle(
  muscleCode,
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
| 400 | Failed to retrieve muscle | [`Muscles400Error`](../../doc/models/muscles-400-error.md) |
| 404 | Muscle not found | [`Muscles404Error`](../../doc/models/muscles-404-error.md) |


# Get Muscle Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMuscleTranslations(  muscleCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MusclesTranslationsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleCode` | `string` | Template, Required | The unique identifier code of the muscle to retrieve translations for |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MusclesTranslationsResponse`](../../doc/models/muscles-translations-response.md)

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
| 400 | Failed to retrieve muscle translations | [`MusclesTranslations400Error`](../../doc/models/muscles-translations-400-error.md) |
| 404 | Muscle not found | [`MusclesTranslations404Error`](../../doc/models/muscles-translations-404-error.md) |


# Update Muscle Translations

```ts
async updateMuscleTranslations(  muscleCode: string,
  body: MuscleTranslation[],
requestOptions?: RequestOptions): Promise<ApiResponse<MusclesTranslationsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleCode` | `string` | Template, Required | The unique identifier code of the muscle to update translations for |
| `body` | [`MuscleTranslation[]`](../../doc/models/muscle-translation.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MusclesTranslationsResponse1`](../../doc/models/muscles-translations-response-1.md)

## Example Usage

```ts
const muscleCode = 'muscleCode0';

const body: MuscleTranslation[] = [
  {
    muscleCode: 'QUAD',
    localeCode: 'en-US',
    muscleName: 'Quadriceps',
  }
];

try {
  const { result, ...httpResponse } = await musclesController.updateMuscleTranslations(
  muscleCode,
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
| 400 | Failed to update muscle translations | [`MusclesTranslations400Error`](../../doc/models/muscles-translations-400-error.md) |
| 401 | Unauthorized | [`MusclesTranslations401Error`](../../doc/models/muscles-translations-401-error.md) |
| 404 | Muscle not found | [`MusclesTranslations404Error`](../../doc/models/muscles-translations-404-error.md) |

