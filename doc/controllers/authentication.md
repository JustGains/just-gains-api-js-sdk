# Authentication

Updated endpoints for user authentication, including registration, login, logout, and token refresh.

```ts
const authenticationController = new AuthenticationController(client);
```

## Class Name

`AuthenticationController`

## Methods

* [Get Current User Information](../../doc/controllers/authentication.md#get-current-user-information)
* [Update User Information](../../doc/controllers/authentication.md#update-user-information)
* [Register a New User](../../doc/controllers/authentication.md#register-a-new-user)
* [Sign in a User](../../doc/controllers/authentication.md#sign-in-a-user)
* [Resend Confirmation Email](../../doc/controllers/authentication.md#resend-confirmation-email)
* [Initiate Forgot Password Process](../../doc/controllers/authentication.md#initiate-forgot-password-process)
* [Reset User Password](../../doc/controllers/authentication.md#reset-user-password)
* [Refresh Authentication Token](../../doc/controllers/authentication.md#refresh-authentication-token)
* [Sign Out the Current User](../../doc/controllers/authentication.md#sign-out-the-current-user)


# Get Current User Information

:information_source: **Note** This endpoint does not require authentication.

```ts
async getCurrentUserInformation(requestOptions?: RequestOptions): Promise<ApiResponse<UserInfoResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserInfoResponse`](../../doc/models/user-info-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await authenticationController.getCurrentUserInformation();
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
| 401 | Failed to retrieve user information | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Update User Information

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateUserInformation(  body: UpdateUserRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpdateUserRequest`](../../doc/models/update-user-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`](../../doc/models/just-gains-response.md)

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
    roles: [
      'user'
    ],
  },
};

try {
  const { result, ...httpResponse } = await authenticationController.updateUserInformation(body);
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
| 400 | Failed to update user information | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Register a New User

:information_source: **Note** This endpoint does not require authentication.

```ts
async registerANewUser(  body: UserRegisterRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<UserInfoResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UserRegisterRequest`](../../doc/models/user-register-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserInfoResponse`](../../doc/models/user-info-response.md)

## Example Usage

```ts
const body: UserRegisterRequest = {
  email: 'john.doe@example.com',
  password: 'StrongP@ssw0rd!',
  username: 'johndoe123',
  firstName: 'John',
  lastName: 'Doe',
  redirectUrl: 'https://example.com/welcome',
};

try {
  const { result, ...httpResponse } = await authenticationController.registerANewUser(body);
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
| 400 | Invalid parameters | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Sign in a User

:information_source: **Note** This endpoint does not require authentication.

```ts
async signInAUser(  body: UserLoginRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<AuthResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UserLoginRequest`](../../doc/models/user-login-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthResponse`](../../doc/models/auth-response.md)

## Example Usage

```ts
const body: UserLoginRequest = {
  email: 'john.doe@example.com',
  password: 'StrongP@ssw0rd!',
};

try {
  const { result, ...httpResponse } = await authenticationController.signInAUser(body);
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
| 400 | Invalid credentials | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Resend Confirmation Email

:information_source: **Note** This endpoint does not require authentication.

```ts
async resendConfirmationEmail(  body: ConfirmEmailRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ConfirmEmailRequest`](../../doc/models/confirm-email-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const body: ConfirmEmailRequest = {
  email: 'john.doe@example.com',
};

try {
  const { result, ...httpResponse } = await authenticationController.resendConfirmationEmail(body);
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
| 400 | Failed to send confirmation email | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Initiate Forgot Password Process

:information_source: **Note** This endpoint does not require authentication.

```ts
async initiateForgotPasswordProcess(  body: ForgotPasswordRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ForgotPasswordRequest`](../../doc/models/forgot-password-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`](../../doc/models/just-gains-response.md)

## Example Usage

```ts
const body: ForgotPasswordRequest = {
  email: 'john.doe@example.com',
};

try {
  const { result, ...httpResponse } = await authenticationController.initiateForgotPasswordProcess(body);
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
| 404 | Failed to send password reset email | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Reset User Password

:information_source: **Note** This endpoint does not require authentication.

```ts
async resetUserPassword(  body: ResetPasswordRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ResetPasswordRequest`](../../doc/models/reset-password-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const body: ResetPasswordRequest = {
  newPassword: 'NewStrongP@ssw0rd!',
};

try {
  const { result, ...httpResponse } = await authenticationController.resetUserPassword(body);
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
| 400 | Failed to reset password | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Refresh Authentication Token

:information_source: **Note** This endpoint does not require authentication.

```ts
async refreshAuthenticationToken(requestOptions?: RequestOptions): Promise<ApiResponse<AuthResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthResponse`](../../doc/models/auth-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await authenticationController.refreshAuthenticationToken();
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
| 400 | Failed to refresh token | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Sign Out the Current User

:information_source: **Note** This endpoint does not require authentication.

```ts
async signOutTheCurrentUser(requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await authenticationController.signOutTheCurrentUser();
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
| 400 | Failed to sign out user | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |

