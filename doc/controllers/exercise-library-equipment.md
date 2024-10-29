# Exercise Library Equipment

```ts
const exerciseLibraryEquipmentController = new ExerciseLibraryEquipmentController(client);
```

## Class Name

`ExerciseLibraryEquipmentController`

## Methods

* [Get Equipments](../../doc/controllers/exercise-library-equipment.md#get-equipments)
* [Create Equipment](../../doc/controllers/exercise-library-equipment.md#create-equipment)
* [Get Equipment](../../doc/controllers/exercise-library-equipment.md#get-equipment)
* [Update Equipment](../../doc/controllers/exercise-library-equipment.md#update-equipment)
* [Delete Equipment](../../doc/controllers/exercise-library-equipment.md#delete-equipment)
* [Get Equipment Translations](../../doc/controllers/exercise-library-equipment.md#get-equipment-translations)
* [Update Equipment Translations](../../doc/controllers/exercise-library-equipment.md#update-equipment-translations)


# Get Equipments

:information_source: **Note** This endpoint does not require authentication.

```ts
async getEquipments(  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<EquipmentListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Query, Optional | The locale to use for the localized equipment names.<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EquipmentListResponse`](../../doc/models/equipment-list-response.md)

## Example Usage

```ts
const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentController.getEquipments(localeCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Equipment

```ts
async createEquipment(  body: Equipment,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Equipment`](../../doc/models/equipment.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const body: Equipment = {
  equipmentCode: 'BARBELL',
  equipmentEquipmentGroups: [
    'WEIGHTS',
    'FREE_WEIGHTS'
  ],
};

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentController.createEquipment(body);
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
| 400 | Invalid request data. | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Get Equipment

:information_source: **Note** This endpoint does not require authentication.

```ts
async getEquipment(  equipmentCode: string,
  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<EquipmentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Template, Required | The unique code identifying the equipment. |
| `localeCode` | `string \| undefined` | Query, Optional | The locale to use for the localized equipment names.<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EquipmentResponse`](../../doc/models/equipment-response.md)

## Example Usage

```ts
const equipmentCode = 'equipmentCode6';

const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentController.getEquipment(
  equipmentCode,
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
| 404 | Equipment not found with the given code. | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Update Equipment

```ts
async updateEquipment(  equipmentCode: string,
  body: Equipment,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Template, Required | The unique code identifying the equipment to update. |
| `body` | [`Equipment`](../../doc/models/equipment.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const equipmentCode = 'equipmentCode6';

const body: Equipment = {
  equipmentCode: 'BARBELL',
  equipmentEquipmentGroups: [
    'WEIGHTS',
    'FREE_WEIGHTS'
  ],
};

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentController.updateEquipment(
  equipmentCode,
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
| 400 | Bad request. Invalid input data. | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Equipment not found with the given code. | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 409 | Conflict. The equipment code already exists for a different equipment. | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Delete Equipment

```ts
async deleteEquipment(  equipmentCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Template, Required | The unique code identifying the equipment to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const equipmentCode = 'equipmentCode6';

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentController.deleteEquipment(equipmentCode);
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
| 400 | Failed to delete the equipment or equipment does not exist. | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Get Equipment Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async getEquipmentTranslations(  equipmentCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<EquipmentTranslationListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Template, Required | The unique code of the equipment |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EquipmentTranslationListResponse`](../../doc/models/equipment-translation-list-response.md)

## Example Usage

```ts
const equipmentCode = 'equipmentCode6';

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentController.getEquipmentTranslations(equipmentCode);
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
| 404 | Equipment not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Update Equipment Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateEquipmentTranslations(  equipmentCode: string,
  body: EquipmentTranslation,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Template, Required | The unique code of the equipment |
| `body` | [`EquipmentTranslation`](../../doc/models/equipment-translation.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const equipmentCode = 'equipmentCode6';

const body: EquipmentTranslation = {
  equipmentName: 'Barbell',
  localeCode: 'en-US',
};

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentController.updateEquipmentTranslations(
  equipmentCode,
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
| 404 | Equipment not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |

