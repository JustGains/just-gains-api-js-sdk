# Users

User account management operations.

```ts
const usersController = new UsersController(client);
```

## Class Name

`UsersController`

## Methods

* [Get a List of All Users](../../doc/controllers/users.md#get-a-list-of-all-users)
* [Get a User by ID](../../doc/controllers/users.md#get-a-user-by-id)
* [Update a User](../../doc/controllers/users.md#update-a-user)
* [Delete a User](../../doc/controllers/users.md#delete-a-user)


# Get a List of All Users

```ts
async getAListOfAllUsers(requestOptions?: RequestOptions): Promise<ApiResponse<UserInfoListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserInfoListResponse`](../../doc/models/user-info-list-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await usersController.getAListOfAllUsers();
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
| 403 | Access denied | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Get a User by ID

```ts
async getAUserByID(  userId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<UserResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | **Constraints**: *Pattern*: `^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserResponse`](../../doc/models/user-response.md)

## Example Usage

```ts
const userId = '123e4567-e89b-12d3-a456-426614174000';

try {
  const { result, ...httpResponse } = await usersController.getAUserByID(userId);
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
| 400 | Invalid user ID format | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 401 | Authentication required | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 403 | Access denied | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | User not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Update a User

```ts
async updateAUser(  userId: string,
  body: UserWithoutCreatorProfile,
requestOptions?: RequestOptions): Promise<ApiResponse<UserWithoutCreatorProfileResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `body` | [`UserWithoutCreatorProfile`](../../doc/models/user-without-creator-profile.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserWithoutCreatorProfileResponse`](../../doc/models/user-without-creator-profile-response.md)

## Example Usage

```ts
const userId = 'userId0';

const body: UserWithoutCreatorProfile = {
  userId: '123e4567-e89b-12d3-a456-426614174000',
  userName: 'fitness_enthusiast_42',
  email: 'jane.doe@example.com',
  password: '$2a$10$Ks6Qr5Yl.Y5iY5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5',
  firstName: 'Jane',
  lastName: 'Doe',
  fullName: 'Jane Doe',
  oAuthProvider: 'Google',
  roles: [
    'user'
  ],
};

try {
  const { result, ...httpResponse } = await usersController.updateAUser(
  userId,
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
| 400 | Invalid user data | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | User not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Delete a User

```ts
async deleteAUser(  userId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const userId = 'userId0';

try {
  const { result, ...httpResponse } = await usersController.deleteAUser(userId);
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
| 404 | User not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |

