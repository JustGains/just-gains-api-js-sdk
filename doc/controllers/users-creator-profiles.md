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
  mvpAssetsOnly?: boolean,
  limit?: number,
  search?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<CreatorProfileListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | Page number for pagination<br>**Default**: `1`<br>**Constraints**: `>= 1` |
| `mvpAssetsOnly` | `boolean \| undefined` | Query, Optional | Filter creator profiles with MVP assets only |
| `limit` | `number \| undefined` | Query, Optional | Number of items per page<br>**Default**: `20`<br>**Constraints**: `>= 1`, `<= 100` |
| `search` | `string \| undefined` | Query, Optional | Optional search term to filter creator profiles. The search is case-insensitive and matches against:<br><br>- Creator's username<br>- Creator's social media account usernames<br>- Creator's full name (first name + last name)<br><br>Examples:<br><br>- search=john (matches usernames, social media accounts, or names containing "john")<br>- search=@twitter (matches social media accounts containing "@twitter")<br>- search="John Doe" (matches full names containing "John Doe")<br><br>Leave empty to retrieve all profiles without filtering. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatorProfileListResponse`](../../doc/models/creator-profile-list-response.md)

## Example Usage

```ts
const page = 1;

const limit = 20;

try {
  const { result, ...httpResponse } = await usersCreatorProfilesController.getCreatorProfiles(
  page,
  undefined,
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
| 400 | Bad request | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Create Creator Profile

```ts
async createCreatorProfile(  body: CreatorProfile,
requestOptions?: RequestOptions): Promise<ApiResponse<CreatorProfileResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreatorProfile`](../../doc/models/creator-profile.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatorProfileResponse`](../../doc/models/creator-profile-response.md)

## Example Usage

```ts
const body: CreatorProfile = {
  firstName: 'Dwayne',
  lastName: 'Johnson',
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
| 400 | Bad request | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 401 | Unauthorized | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Get Creator Profile

:information_source: **Note** This endpoint does not require authentication.

```ts
async getCreatorProfile(  creatorProfileId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<CreatorProfileResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatorProfileResponse`](../../doc/models/creator-profile-response.md)

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
| 404 | Creator profile not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Update Creator Profile

```ts
async updateCreatorProfile(  creatorProfileId: string,
  body: CreatorProfile,
requestOptions?: RequestOptions): Promise<ApiResponse<CreatorProfileResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string` | Template, Required | - |
| `body` | [`CreatorProfile`](../../doc/models/creator-profile.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatorProfileResponse`](../../doc/models/creator-profile-response.md)

## Example Usage

```ts
const creatorProfileId = '000008d2-0000-0000-0000-000000000000';

const body: CreatorProfile = {
  firstName: 'Dwayne',
  lastName: 'Johnson',
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
| 400 | Bad request | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 401 | Unauthorized | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Creator profile not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Delete Creator Profile

```ts
async deleteCreatorProfile(  creatorProfileId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

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
| 401 | Unauthorized | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Creator profile not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |

