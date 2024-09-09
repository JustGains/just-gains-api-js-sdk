# Users Role Management

```ts
const usersRoleManagementController = new UsersRoleManagementController(client);
```

## Class Name

`UsersRoleManagementController`

## Methods

* [Assign a Role to a User](../../doc/controllers/users-role-management.md#assign-a-role-to-a-user)
* [Get User Roles](../../doc/controllers/users-role-management.md#get-user-roles)
* [Remove a Role From a User](../../doc/controllers/users-role-management.md#remove-a-role-from-a-user)
* [Get All Roles](../../doc/controllers/users-role-management.md#get-all-roles)
* [Create a New Role](../../doc/controllers/users-role-management.md#create-a-new-role)
* [Update a Role](../../doc/controllers/users-role-management.md#update-a-role)
* [Delete a Role](../../doc/controllers/users-role-management.md#delete-a-role)


# Assign a Role to a User

:information_source: **Note** This endpoint does not require authentication.

```ts
async assignARoleToAUser(  userId: string,
  body: RoleAssignmentRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<UsersRolesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `body` | [`RoleAssignmentRequest`](../../doc/models/role-assignment-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UsersRolesResponse`](../../doc/models/users-roles-response.md)

## Example Usage

```ts
const userId = '000013ec-0000-0000-0000-000000000000';

const body: RoleAssignmentRequest = {
  roleId: 192,
};

try {
  const { result, ...httpResponse } = await usersRoleManagementController.assignARoleToAUser(
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


# Get User Roles

:information_source: **Note** This endpoint does not require authentication.

```ts
async getUserRoles(  userId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<UsersRolesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UsersRolesResponse`](../../doc/models/users-roles-response.md)

## Example Usage

```ts
const userId = '000013ec-0000-0000-0000-000000000000';

try {
  const { result, ...httpResponse } = await usersRoleManagementController.getUserRoles(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Remove a Role From a User

:information_source: **Note** This endpoint does not require authentication.

```ts
async removeARoleFromAUser(  userId: string,
  roleName: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `roleName` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`](../../doc/models/just-gains-response.md)

## Example Usage

```ts
const userId = '000013ec-0000-0000-0000-000000000000';

const roleName = 'roleName6';

try {
  const { result, ...httpResponse } = await usersRoleManagementController.removeARoleFromAUser(
  userId,
  roleName
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


# Get All Roles

:information_source: **Note** This endpoint does not require authentication.

```ts
async getAllRoles(requestOptions?: RequestOptions): Promise<ApiResponse<RolesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RolesResponse`](../../doc/models/roles-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await usersRoleManagementController.getAllRoles();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a New Role

:information_source: **Note** This endpoint does not require authentication.

```ts
async createANewRole(  body: RoleCreateRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<RolesResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RoleCreateRequest`](../../doc/models/role-create-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RolesResponse1`](../../doc/models/roles-response-1.md)

## Example Usage

```ts
const body: RoleCreateRequest = {
  roleName: 'roleName0',
};

try {
  const { result, ...httpResponse } = await usersRoleManagementController.createANewRole(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update a Role

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateARole(  roleName: string,
  body: RoleUpdateRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<RolesResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `roleName` | `string` | Template, Required | - |
| `body` | [`RoleUpdateRequest`](../../doc/models/role-update-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RolesResponse1`](../../doc/models/roles-response-1.md)

## Example Usage

```ts
const roleName = 'roleName6';

const body: RoleUpdateRequest = {};

try {
  const { result, ...httpResponse } = await usersRoleManagementController.updateARole(
  roleName,
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


# Delete a Role

:information_source: **Note** This endpoint does not require authentication.

```ts
async deleteARole(  roleName: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `roleName` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`](../../doc/models/just-gains-response.md)

## Example Usage

```ts
const roleName = 'roleName6';

try {
  const { result, ...httpResponse } = await usersRoleManagementController.deleteARole(roleName);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

