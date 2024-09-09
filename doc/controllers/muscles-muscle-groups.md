# Muscles Muscle Groups

```ts
const musclesMuscleGroupsController = new MusclesMuscleGroupsController(client);
```

## Class Name

`MusclesMuscleGroupsController`

## Methods

* [Get Muscle Groups](../../doc/controllers/muscles-muscle-groups.md#get-muscle-groups)
* [Create a New Muscle Group](../../doc/controllers/muscles-muscle-groups.md#create-a-new-muscle-group)
* [Update a Muscle Group](../../doc/controllers/muscles-muscle-groups.md#update-a-muscle-group)
* [Delete a Muscle Group](../../doc/controllers/muscles-muscle-groups.md#delete-a-muscle-group)
* [Get Muscle Group Translations](../../doc/controllers/muscles-muscle-groups.md#get-muscle-group-translations)
* [Update Muscle Group Translations](../../doc/controllers/muscles-muscle-groups.md#update-muscle-group-translations)


# Get Muscle Groups

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMuscleGroups(  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MuscleGroupListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Query, Optional | The locale to use for the localized muscle group names.<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MuscleGroupListResponse`](../../doc/models/muscle-group-list-response.md)

## Example Usage

```ts
const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await musclesMuscleGroupsController.getMuscleGroups(localeCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a New Muscle Group

```ts
async createANewMuscleGroup(  body: MuscleGroup,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`MuscleGroup`](../../doc/models/muscle-group.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const body: MuscleGroup = {
  muscleGroupCode: 'CHEST',
  muscleGroupName: 'Chest',
  muscleGroupParent: 'UPPER_BODY',
  muscleGroupMuscles: [
    'PECTORALIS_MAJOR_STERNAL_HEAD',
    'ANTERIOR_DELTOID',
    'TRICEPS_BRACHII',
    'RECTUS_ABDOMINIS',
    'LATISSIMUS_DORSI',
    'BICEPS_BRACHII',
    'QUADRICEPS_FEMORIS',
    'HAMSTRINGS',
    'GASTROCNEMIUS'
  ],
  muscleGroupType: MuscleGroupTypeEnum.MainGroup,
};

try {
  const { result, ...httpResponse } = await musclesMuscleGroupsController.createANewMuscleGroup(body);
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
| 400 | Invalid muscle group data | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 401 | Authentication required | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Update a Muscle Group

```ts
async updateAMuscleGroup(  muscleGroupCode: string,
  body: MuscleGroup,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string` | Template, Required | The muscle group code to update.<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `body` | [`MuscleGroup`](../../doc/models/muscle-group.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const muscleGroupCode = 'muscleGroupCode2';

const body: MuscleGroup = {
  muscleGroupCode: 'CHEST',
  muscleGroupName: 'Chest',
  muscleGroupParent: 'UPPER_BODY',
  muscleGroupMuscles: [
    'PECTORALIS_MAJOR_STERNAL_HEAD',
    'ANTERIOR_DELTOID',
    'TRICEPS_BRACHII',
    'RECTUS_ABDOMINIS',
    'LATISSIMUS_DORSI',
    'BICEPS_BRACHII',
    'QUADRICEPS_FEMORIS',
    'HAMSTRINGS',
    'GASTROCNEMIUS'
  ],
  muscleGroupType: MuscleGroupTypeEnum.MainGroup,
};

try {
  const { result, ...httpResponse } = await musclesMuscleGroupsController.updateAMuscleGroup(
  muscleGroupCode,
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
| 400 | Invalid muscle group data | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 401 | Authentication required | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Muscle group not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Delete a Muscle Group

```ts
async deleteAMuscleGroup(  muscleGroupCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string` | Template, Required | The muscle group code to delete.<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const muscleGroupCode = 'muscleGroupCode2';

try {
  const { result, ...httpResponse } = await musclesMuscleGroupsController.deleteAMuscleGroup(muscleGroupCode);
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
| 404 | Muscle group not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Get Muscle Group Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMuscleGroupTranslations(  muscleGroupCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MuscleGroupTranslationListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string` | Template, Required | The unique code of the muscle group<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MuscleGroupTranslationListResponse`](../../doc/models/muscle-group-translation-list-response.md)

## Example Usage

```ts
const muscleGroupCode = 'muscleGroupCode2';

try {
  const { result, ...httpResponse } = await musclesMuscleGroupsController.getMuscleGroupTranslations(muscleGroupCode);
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
| 400 | Failed to retrieve muscle group translations | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Muscle group not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Update Muscle Group Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateMuscleGroupTranslations(  muscleGroupCode: string,
  body: MuscleGroupTranslation[],
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string` | Template, Required | The unique code of the muscle group<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `body` | [`MuscleGroupTranslation[]`](../../doc/models/muscle-group-translation.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const muscleGroupCode = 'muscleGroupCode2';

const body: MuscleGroupTranslation[] = [
  {
    localeCode: 'en-US',
    muscleGroupName: 'Quadriceps',
    muscleGroupDescription: 'The quadriceps femoris is a large muscle group located on the front of the thigh.',
  }
];

try {
  const { result, ...httpResponse } = await musclesMuscleGroupsController.updateMuscleGroupTranslations(
  muscleGroupCode,
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
| 400 | Failed to update muscle group translations | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Muscle group not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 422 | Validation error | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |

