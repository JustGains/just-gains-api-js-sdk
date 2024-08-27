# Users Creator Profiles

```ts
const usersCreatorProfilesController = new UsersCreatorProfilesController(client);
```

## Class Name

`UsersCreatorProfilesController`

## Methods

* [Get Creator Profiles](../../doc/controllers/users-creator-profiles.md#get-creator-profiles)
* [Create Creator Profile](../../doc/controllers/users-creator-profiles.md#create-creator-profile)
* [Get Creator Profile](../../doc/controllers/users-creator-profiles.md#get-creator-profile)
* [Update Creator Profile](../../doc/controllers/users-creator-profiles.md#update-creator-profile)
* [Delete Creator Profile](../../doc/controllers/users-creator-profiles.md#delete-creator-profile)


# Get Creator Profiles

:information_source: **Note** This endpoint does not require authentication.

```ts
async getCreatorProfiles(  page?: number,
  limit?: number,
requestOptions?: RequestOptions): Promise<ApiResponse<CreatorProfilesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | Page number for pagination |
| `limit` | `number \| undefined` | Query, Optional | Number of items per page |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatorProfilesResponse`](../../doc/models/creator-profiles-response.md)

## Example Usage

```ts
const page = 1;

const limit = 20;

try {
  const { result, ...httpResponse } = await usersCreatorProfilesController.getCreatorProfiles(
  page,
  limit
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
| 400 | Bad request | [`CreatorProfiles400Error`](../../doc/models/creator-profiles-400-error.md) |
| 500 | An unexpected error occurred | [`CreatorProfiles500Error`](../../doc/models/creator-profiles-500-error.md) |


# Create Creator Profile

```ts
async createCreatorProfile(  body: CreatorProfile,
requestOptions?: RequestOptions): Promise<ApiResponse<CreatorProfilesResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreatorProfile`](../../doc/models/creator-profile.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatorProfilesResponse1`](../../doc/models/creator-profiles-response-1.md)

## Example Usage

```ts
const body: CreatorProfile = {
  creatorProfileId: '123e4567-e89b-12d3-a456-426614174000',
  userId: '123e4567-e89b-12d3-a456-426614174000',
  creatorEmail: 'dwayne@therockjohnson.com',
};

try {
  const { result, ...httpResponse } = await usersCreatorProfilesController.createCreatorProfile(body);
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
| 400 | Bad request | [`CreatorProfiles400Error`](../../doc/models/creator-profiles-400-error.md) |
| 401 | Unauthorized | [`CreatorProfiles401Error`](../../doc/models/creator-profiles-401-error.md) |
| 500 | Internal server error | [`CreatorProfiles500Error`](../../doc/models/creator-profiles-500-error.md) |


# Get Creator Profile

:information_source: **Note** This endpoint does not require authentication.

```ts
async getCreatorProfile(  creatorProfileId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<CreatorProfilesResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatorProfilesResponse1`](../../doc/models/creator-profiles-response-1.md)

## Example Usage

```ts
const creatorProfileId = '000008d2-0000-0000-0000-000000000000';

try {
  const { result, ...httpResponse } = await usersCreatorProfilesController.getCreatorProfile(creatorProfileId);
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
| 404 | Creator profile not found | [`CreatorProfiles404Error`](../../doc/models/creator-profiles-404-error.md) |
| 500 | Internal server error | [`CreatorProfiles500Error`](../../doc/models/creator-profiles-500-error.md) |


# Update Creator Profile

```ts
async updateCreatorProfile(  creatorProfileId: string,
  body: CreatorProfile,
requestOptions?: RequestOptions): Promise<ApiResponse<CreatorProfilesResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string` | Template, Required | - |
| `body` | [`CreatorProfile`](../../doc/models/creator-profile.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatorProfilesResponse1`](../../doc/models/creator-profiles-response-1.md)

## Example Usage

```ts
const creatorProfileId = '000008d2-0000-0000-0000-000000000000';

const body: CreatorProfile = {
  creatorProfileId: '123e4567-e89b-12d3-a456-426614174000',
  userId: '123e4567-e89b-12d3-a456-426614174000',
  creatorEmail: 'dwayne@therockjohnson.com',
};

try {
  const { result, ...httpResponse } = await usersCreatorProfilesController.updateCreatorProfile(
  creatorProfileId,
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
| 400 | Bad request | [`CreatorProfiles400Error`](../../doc/models/creator-profiles-400-error.md) |
| 401 | Unauthorized | [`CreatorProfiles401Error`](../../doc/models/creator-profiles-401-error.md) |
| 404 | Creator profile not found | [`CreatorProfiles404Error`](../../doc/models/creator-profiles-404-error.md) |
| 500 | Internal server error | [`CreatorProfiles500Error`](../../doc/models/creator-profiles-500-error.md) |


# Delete Creator Profile

```ts
async deleteCreatorProfile(  creatorProfileId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<CreatorProfilesResponse4>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatorProfilesResponse4`](../../doc/models/creator-profiles-response-4.md)

## Example Usage

```ts
const creatorProfileId = '000008d2-0000-0000-0000-000000000000';

try {
  const { result, ...httpResponse } = await usersCreatorProfilesController.deleteCreatorProfile(creatorProfileId);
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
| 401 | Unauthorized | [`CreatorProfiles401Error`](../../doc/models/creator-profiles-401-error.md) |
| 404 | Creator profile not found | [`CreatorProfiles404Error`](../../doc/models/creator-profiles-404-error.md) |
| 500 | Internal server error | [`CreatorProfiles500Error`](../../doc/models/creator-profiles-500-error.md) |

