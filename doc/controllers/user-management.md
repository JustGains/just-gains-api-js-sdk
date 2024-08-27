# User Management

```ts
const userManagementController = new UserManagementController(client);
```

## Class Name

`UserManagementController`

## Methods

* [Get Current User Information](../../doc/controllers/user-management.md#get-current-user-information)
* [Update User Information](../../doc/controllers/user-management.md#update-user-information)


# Get Current User Information

:information_source: **Note** This endpoint does not require authentication.

```ts
async getCurrentUserInformation(requestOptions?: RequestOptions): Promise<ApiResponse<AuthUserResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthUserResponse`](../../doc/models/auth-user-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userManagementController.getCurrentUserInformation();
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
| 400 | Failed to retrieve user information | [`AuthUser400Error`](../../doc/models/auth-user-400-error.md) |


# Update User Information

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateUserInformation(  body: UpdateUserRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<AuthUserResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpdateUserRequest`](../../doc/models/update-user-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthUserResponse1`](../../doc/models/auth-user-response-1.md)

## Example Usage

```ts
const body: UpdateUserRequest = {
  user: {
    userId: '123e4567-e89b-12d3-a456-426614174000',
    userName: 'fitness_enthusiast_42',
    email: 'jane.doe@example.com',
    password: '$2a$10$Ks6Qr5Yl.Y5iY5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5',
    firstName: 'Jane',
    lastName: 'Doe',
    fullName: 'Jane Doe',
    oAuthProvider: 'Google',
    role: 'user',
  },
};

try {
  const { result, ...httpResponse } = await userManagementController.updateUserInformation(body);
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
| 400 | Failed to update user information | [`AuthUser400Error`](../../doc/models/auth-user-400-error.md) |

