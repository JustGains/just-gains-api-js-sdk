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
async getAListOfAllUsers(requestOptions?: RequestOptions): Promise<ApiResponse<UsersResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UsersResponse[]`](../../doc/models/users-response.md)

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
| 401 | Authentication required | [`Users401Error`](../../doc/models/users-401-error.md) |
| 403 | Access denied | [`Users403Error`](../../doc/models/users-403-error.md) |


# Get a User by ID

```ts
async getAUserByID(  userId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<UsersResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UsersResponse1`](../../doc/models/users-response-1.md)

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
| 400 | Invalid user ID format | [`Users400Error`](../../doc/models/users-400-error.md) |
| 401 | Authentication required | [`Users401Error`](../../doc/models/users-401-error.md) |
| 403 | Access denied | [`Users403Error`](../../doc/models/users-403-error.md) |
| 404 | User not found | [`Users404Error`](../../doc/models/users-404-error.md) |


# Update a User

```ts
async updateAUser(  userId: string,
  body: UserWithoutCreatorProfile,
requestOptions?: RequestOptions): Promise<ApiResponse<UsersResponse2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `body` | [`UserWithoutCreatorProfile`](../../doc/models/user-without-creator-profile.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UsersResponse2`](../../doc/models/users-response-2.md)

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
  role: 'user',
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
| 400 | Invalid user data | [`Users400Error`](../../doc/models/users-400-error.md) |
| 404 | User not found | [`Users404Error`](../../doc/models/users-404-error.md) |


# Delete a User

```ts
async deleteAUser(  userId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<UsersResponse3>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UsersResponse3`](../../doc/models/users-response-3.md)

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
| 404 | User not found | [`Users404Error`](../../doc/models/users-404-error.md) |

