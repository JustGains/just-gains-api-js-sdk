# Users Social Media Accounts

```ts
const usersSocialMediaAccountsController = new UsersSocialMediaAccountsController(client);
```

## Class Name

`UsersSocialMediaAccountsController`

## Methods

* [List Users Social Media Accounts](../../doc/controllers/users-social-media-accounts.md#list-users-social-media-accounts)
* [Create Social Media Platform](../../doc/controllers/users-social-media-accounts.md#create-social-media-platform)
* [Get Social Media Platform](../../doc/controllers/users-social-media-accounts.md#get-social-media-platform)
* [Update Social Media Platform](../../doc/controllers/users-social-media-accounts.md#update-social-media-platform)
* [Delete Social Media Platform](../../doc/controllers/users-social-media-accounts.md#delete-social-media-platform)
* [Validate Social Media Username](../../doc/controllers/users-social-media-accounts.md#validate-social-media-username)


# List Users Social Media Accounts

Retrieve a list of Users|Social Media Accounts with optional name filter

:information_source: **Note** This endpoint does not require authentication.

```ts
async listUsersSocialMediaAccounts(  name?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<SocialMediaPlatformListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Query, Optional | Filter platforms by name |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SocialMediaPlatformListResponse`](../../doc/models/social-media-platform-list-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await usersSocialMediaAccountsController.listUsersSocialMediaAccounts();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Social Media Platform

Create a new social media platform

:information_source: **Note** This endpoint does not require authentication.

```ts
async createSocialMediaPlatform(  body: SocialMediaPlatformCreate,
requestOptions?: RequestOptions): Promise<ApiResponse<SocialMediaPlatformResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SocialMediaPlatformCreate`](../../doc/models/social-media-platform-create.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SocialMediaPlatformResponse`](../../doc/models/social-media-platform-response.md)

## Example Usage

```ts
const body: SocialMediaPlatformCreate = {
  socialMediaPlatformCode: 'INSTAGRAM',
  socialMediaPlatformName: 'Instagram',
  socialMediaPlatformUrlFormat: 'https://www.instagram.com/{username}',
  socialMediaPlatformIcon: '123e4567-e89b-12d3-a456-426614174000',
};

try {
  const { result, ...httpResponse } = await usersSocialMediaAccountsController.createSocialMediaPlatform(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Social Media Platform

Retrieve details of a specific social media platform

:information_source: **Note** This endpoint does not require authentication.

```ts
async getSocialMediaPlatform(  socialMediaPlatformCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<SocialMediaPlatformResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialMediaPlatformCode` | `string` | Template, Required | The unique code of the social media platform |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SocialMediaPlatformResponse`](../../doc/models/social-media-platform-response.md)

## Example Usage

```ts
const socialMediaPlatformCode = 'socialMediaPlatformCode4';

try {
  const { result, ...httpResponse } = await usersSocialMediaAccountsController.getSocialMediaPlatform(socialMediaPlatformCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Social Media Platform

Update an existing social media platform

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateSocialMediaPlatform(  socialMediaPlatformCode: string,
  body: SocialMediaPlatformUpdate,
requestOptions?: RequestOptions): Promise<ApiResponse<SocialMediaPlatformResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialMediaPlatformCode` | `string` | Template, Required | The unique code of the social media platform |
| `body` | [`SocialMediaPlatformUpdate`](../../doc/models/social-media-platform-update.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SocialMediaPlatformResponse`](../../doc/models/social-media-platform-response.md)

## Example Usage

```ts
const socialMediaPlatformCode = 'socialMediaPlatformCode4';

const body: SocialMediaPlatformUpdate = {
  socialMediaPlatformName: 'Instagram',
  socialMediaPlatformUrlFormat: 'https://www.instagram.com/{username}',
  socialMediaPlatformIcon: '123e4567-e89b-12d3-a456-426614174000',
};

try {
  const { result, ...httpResponse } = await usersSocialMediaAccountsController.updateSocialMediaPlatform(
  socialMediaPlatformCode,
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


# Delete Social Media Platform

Delete a social media platform

:information_source: **Note** This endpoint does not require authentication.

```ts
async deleteSocialMediaPlatform(  socialMediaPlatformCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialMediaPlatformCode` | `string` | Template, Required | The unique code of the social media platform |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const socialMediaPlatformCode = 'socialMediaPlatformCode4';

try {
  const { result, ...httpResponse } = await usersSocialMediaAccountsController.deleteSocialMediaPlatform(socialMediaPlatformCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Validate Social Media Username

:information_source: **Note** This endpoint does not require authentication.

```ts
async validateSocialMediaUsername(  socialMediaPlatformCode: string,
  username: string,
requestOptions?: RequestOptions): Promise<ApiResponse<SocialMediaPlatformsValidateUsernameResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialMediaPlatformCode` | `string` | Template, Required | The code of the social media platform to check against<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `username` | `string` | Template, Required | The username to validate |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SocialMediaPlatformsValidateUsernameResponse`](../../doc/models/social-media-platforms-validate-username-response.md)

## Example Usage

```ts
const socialMediaPlatformCode = 'INSTAGRAM';

const username = 'fitness_guru';

try {
  const { result, ...httpResponse } = await usersSocialMediaAccountsController.validateSocialMediaUsername(
  socialMediaPlatformCode,
  username
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

