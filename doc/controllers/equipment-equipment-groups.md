# Equipment Equipment Groups

```ts
const equipmentEquipmentGroupsController = new EquipmentEquipmentGroupsController(client);
```

## Class Name

`EquipmentEquipmentGroupsController`

## Methods

* [Get Equipment Groups](../../doc/controllers/equipment-equipment-groups.md#get-equipment-groups)
* [Add Equipment Group](../../doc/controllers/equipment-equipment-groups.md#add-equipment-group)
* [Update an Existing Equipment Group](../../doc/controllers/equipment-equipment-groups.md#update-an-existing-equipment-group)
* [Delete an Equipment Group](../../doc/controllers/equipment-equipment-groups.md#delete-an-equipment-group)
* [Get Equipment Group Translations](../../doc/controllers/equipment-equipment-groups.md#get-equipment-group-translations)
* [Update Equipment Group Translations](../../doc/controllers/equipment-equipment-groups.md#update-equipment-group-translations)


# Get Equipment Groups

:information_source: **Note** This endpoint does not require authentication.

```ts
async getEquipmentGroups(  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<EquipmentGroupListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Query, Optional | The locale to use for the localized equipment group names.<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EquipmentGroupListResponse`](../../doc/models/equipment-group-list-response.md)

## Example Usage

```ts
const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await equipmentEquipmentGroupsController.getEquipmentGroups(localeCode);
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


# Add Equipment Group

```ts
async addEquipmentGroup(  body: EquipmentGroup,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`EquipmentGroup`](../../doc/models/equipment-group.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const body: EquipmentGroup = {
  equipmentGroupCode: 'DUMBBELLS',
  equipmentGroupName: 'Dumbbells',
  equipmentGroupParent: 'FREE_WEIGHTS',
  sortOrder: 0,
};

try {
  const { result, ...httpResponse } = await equipmentEquipmentGroupsController.addEquipmentGroup(body);
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


# Update an Existing Equipment Group

```ts
async updateAnExistingEquipmentGroup(  equipmentGroupCode: string,
  body: EquipmentGroup,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentGroupCode` | `string` | Template, Required | The equipment group code to update. |
| `body` | [`EquipmentGroup`](../../doc/models/equipment-group.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const equipmentGroupCode = 'equipmentGroupCode8';

const body: EquipmentGroup = {
  equipmentGroupCode: 'DUMBBELLS',
  equipmentGroupName: 'Dumbbells',
  equipmentGroupParent: 'FREE_WEIGHTS',
  sortOrder: 0,
};

try {
  const { result, ...httpResponse } = await equipmentEquipmentGroupsController.updateAnExistingEquipmentGroup(
  equipmentGroupCode,
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


# Delete an Equipment Group

```ts
async deleteAnEquipmentGroup(  equipmentGroupCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentGroupCode` | `string` | Template, Required | The equipment group code to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`](../../doc/models/just-gains-response.md)

## Example Usage

```ts
const equipmentGroupCode = 'equipmentGroupCode8';

try {
  const { result, ...httpResponse } = await equipmentEquipmentGroupsController.deleteAnEquipmentGroup(equipmentGroupCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Equipment Group Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async getEquipmentGroupTranslations(  equipmentGroupCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<EquipmentGroupTranslationListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentGroupCode` | `string` | Template, Required | The unique code of the equipment group |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EquipmentGroupTranslationListResponse`](../../doc/models/equipment-group-translation-list-response.md)

## Example Usage

```ts
const equipmentGroupCode = 'equipmentGroupCode8';

try {
  const { result, ...httpResponse } = await equipmentEquipmentGroupsController.getEquipmentGroupTranslations(equipmentGroupCode);
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
| 404 | Equipment group not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Update Equipment Group Translations

Updates the translations for a specific equipment group identified by its code.

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateEquipmentGroupTranslations(  equipmentGroupCode: string,
  body: EquipmentGroupTranslation[],
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentGroupCode` | `string` | Template, Required | The unique code of the equipment group |
| `body` | [`EquipmentGroupTranslation[]`](../../doc/models/equipment-group-translation.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`](../../doc/models/just-gains-response.md)

## Example Usage

```ts
const equipmentGroupCode = 'EQP-001';

const body: EquipmentGroupTranslation[] = [
  {
    localeCode: 'en-US',
    equipmentGroupName: 'Weightlifting Equipment',
    equipmentGroupDescription: 'Equipment used for weightlifting exercises',
  }
];

try {
  const { result, ...httpResponse } = await equipmentEquipmentGroupsController.updateEquipmentGroupTranslations(
  equipmentGroupCode,
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
| 404 | Equipment group not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 422 | Validation error | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |

