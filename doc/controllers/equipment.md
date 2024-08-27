# Equipment

Manage exercise equipment.

```ts
const equipmentController = new EquipmentController(client);
```

## Class Name

`EquipmentController`

## Methods

* [Get Equipments](../../doc/controllers/equipment.md#get-equipments)
* [Create Equipment](../../doc/controllers/equipment.md#create-equipment)
* [Get Equipment](../../doc/controllers/equipment.md#get-equipment)
* [Update Equipment](../../doc/controllers/equipment.md#update-equipment)
* [Delete Equipment](../../doc/controllers/equipment.md#delete-equipment)
* [Get Equipment Translations](../../doc/controllers/equipment.md#get-equipment-translations)
* [Update Equipment Translations](../../doc/controllers/equipment.md#update-equipment-translations)


# Get Equipments

:information_source: **Note** This endpoint does not require authentication.

```ts
async getEquipments(  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<EquipmentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Query, Optional | The locale to use for the localized equipment names. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EquipmentResponse`](../../doc/models/equipment-response.md)

## Example Usage

```ts
const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await equipmentController.getEquipments(localeCode);
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
requestOptions?: RequestOptions): Promise<ApiResponse<EquipmentResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Equipment`](../../doc/models/equipment.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EquipmentResponse1`](../../doc/models/equipment-response-1.md)

## Example Usage

```ts
const body: Equipment = {
  equipmentCode: 'BARBELL',
  equipmentName: 'Barbell',
  equipmentEquipmentGroups: [
    'WEIGHTS',
    'FREE_WEIGHTS'
  ],
};

try {
  const { result, ...httpResponse } = await equipmentController.createEquipment(body);
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
| 400 | Invalid request data. | [`Equipment400Error`](../../doc/models/equipment-400-error.md) |


# Get Equipment

:information_source: **Note** This endpoint does not require authentication.

```ts
async getEquipment(  equipmentCode: string,
  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<EquipmentResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Template, Required | The unique code identifying the equipment. |
| `localeCode` | `string \| undefined` | Query, Optional | The locale to use for the localized equipment names. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EquipmentResponse1`](../../doc/models/equipment-response-1.md)

## Example Usage

```ts
const equipmentCode = 'equipmentCode6';

const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await equipmentController.getEquipment(
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
| 404 | Equipment not found with the given code. | [`Equipment404Error`](../../doc/models/equipment-404-error.md) |


# Update Equipment

```ts
async updateEquipment(  equipmentCode: string,
  body: Equipment,
requestOptions?: RequestOptions): Promise<ApiResponse<EquipmentResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Template, Required | The unique code identifying the equipment to update. |
| `body` | [`Equipment`](../../doc/models/equipment.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EquipmentResponse1`](../../doc/models/equipment-response-1.md)

## Example Usage

```ts
const equipmentCode = 'equipmentCode6';

const body: Equipment = {
  equipmentCode: 'BARBELL',
  equipmentName: 'Barbell',
  equipmentEquipmentGroups: [
    'WEIGHTS',
    'FREE_WEIGHTS'
  ],
};

try {
  const { result, ...httpResponse } = await equipmentController.updateEquipment(
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
| 400 | Bad request. Invalid input data. | [`Equipment400Error`](../../doc/models/equipment-400-error.md) |
| 404 | Equipment not found with the given code. | [`Equipment404Error`](../../doc/models/equipment-404-error.md) |
| 409 | Conflict. The equipment code already exists for a different equipment. | [`Equipment409Error`](../../doc/models/equipment-409-error.md) |


# Delete Equipment

```ts
async deleteEquipment(  equipmentCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<EquipmentResponse4>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Template, Required | The unique code identifying the equipment to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EquipmentResponse4`](../../doc/models/equipment-response-4.md)

## Example Usage

```ts
const equipmentCode = 'equipmentCode6';

try {
  const { result, ...httpResponse } = await equipmentController.deleteEquipment(equipmentCode);
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
| 400 | Failed to delete the equipment or equipment does not exist. | [`Equipment400Error`](../../doc/models/equipment-400-error.md) |


# Get Equipment Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async getEquipmentTranslations(  equipmentCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<EquipmentTranslationsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Template, Required | The unique code of the equipment |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EquipmentTranslationsResponse`](../../doc/models/equipment-translations-response.md)

## Example Usage

```ts
const equipmentCode = 'equipmentCode6';

try {
  const { result, ...httpResponse } = await equipmentController.getEquipmentTranslations(equipmentCode);
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
| 400 | Bad request | [`EquipmentTranslations400Error`](../../doc/models/equipment-translations-400-error.md) |
| 404 | Equipment not found | [`EquipmentTranslations404Error`](../../doc/models/equipment-translations-404-error.md) |


# Update Equipment Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateEquipmentTranslations(  equipmentCode: string,
  body: EquipmentTranslation,
requestOptions?: RequestOptions): Promise<ApiResponse<EquipmentTranslationsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Template, Required | The unique code of the equipment |
| `body` | [`EquipmentTranslation`](../../doc/models/equipment-translation.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EquipmentTranslationsResponse1`](../../doc/models/equipment-translations-response-1.md)

## Example Usage

```ts
const equipmentCode = 'equipmentCode6';

const body: EquipmentTranslation = {
  equipmentName: 'equipmentName6',
};

try {
  const { result, ...httpResponse } = await equipmentController.updateEquipmentTranslations(
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
| 400 | Bad request | [`EquipmentTranslations400Error`](../../doc/models/equipment-translations-400-error.md) |
| 404 | Equipment not found | [`EquipmentTranslations404Error`](../../doc/models/equipment-translations-404-error.md) |

