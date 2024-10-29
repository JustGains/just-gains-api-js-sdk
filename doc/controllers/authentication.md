# Authentication

Endpoints for user authentication, including registration, login, logout, and token refresh.

```ts
const authenticationController = new AuthenticationController(client);
```

## Class Name

`AuthenticationController`

## Methods

* [Get User Info](../../doc/controllers/authentication.md#get-user-info)
* [Update User Info](../../doc/controllers/authentication.md#update-user-info)
* [Register User](../../doc/controllers/authentication.md#register-user)
* [Login User](../../doc/controllers/authentication.md#login-user)
* [Resend Confirmation Email](../../doc/controllers/authentication.md#resend-confirmation-email)
* [Forgot Password](../../doc/controllers/authentication.md#forgot-password)
* [Reset Password](../../doc/controllers/authentication.md#reset-password)
* [Refresh Token](../../doc/controllers/authentication.md#refresh-token)
* [Signout](../../doc/controllers/authentication.md#signout)
* [Initiate Auth](../../doc/controllers/authentication.md#initiate-auth)
* [Handle Callback](../../doc/controllers/authentication.md#handle-callback)
* [Get Settings](../../doc/controllers/authentication.md#get-settings)


# Get User Info

```ts
async getUserInfo(requestOptions?: RequestOptions): Promise<ApiResponse<UserInfoResponse>>
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
  const { result, ...httpResponse } = await authenticationController.getUserInfo();
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


# Update User Info

```ts
async updateUserInfo(  body: UpdateUserRequest,
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
  userId: '123e4567-e89b-12d3-a456-426614174000',
  email: 'jane.doe@example.com',
  firstName: 'Jane',
  lastName: 'Doe',
  fullName: 'Jane Doe',
};

try {
  const { result, ...httpResponse } = await authenticationController.updateUserInfo(body);
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


# Register User

:information_source: **Note** This endpoint does not require authentication.

```ts
async registerUser(  body: UserRegisterRequest,
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
  const { result, ...httpResponse } = await authenticationController.registerUser(body);
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


# Login User

:information_source: **Note** This endpoint does not require authentication.

```ts
async loginUser(  body: UserLoginRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<AuthSigninResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UserLoginRequest`](../../doc/models/user-login-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthSigninResponse`](../../doc/models/auth-signin-response.md)

## Example Usage

```ts
const body: UserLoginRequest = {
  email: 'john.doe@example.com',
  password: 'StrongP@ssw0rd!',
};

try {
  const { result, ...httpResponse } = await authenticationController.loginUser(body);
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


# Forgot Password

:information_source: **Note** This endpoint does not require authentication.

```ts
async forgotPassword(  body: ForgotPasswordRequest,
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
  const { result, ...httpResponse } = await authenticationController.forgotPassword(body);
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


# Reset Password

:information_source: **Note** This endpoint does not require authentication.

```ts
async resetPassword(  body: ResetPasswordRequest,
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
  const { result, ...httpResponse } = await authenticationController.resetPassword(body);
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


# Refresh Token

:information_source: **Note** This endpoint does not require authentication.

```ts
async refreshToken(requestOptions?: RequestOptions): Promise<ApiResponse<AuthRefreshTokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthRefreshTokenResponse`](../../doc/models/auth-refresh-token-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await authenticationController.refreshToken();
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


# Signout

```ts
async signout(requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
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
  const { result, ...httpResponse } = await authenticationController.signout();
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


# Initiate Auth

:information_source: **Note** This endpoint does not require authentication.

```ts
async initiateAuth(  provider: string,
  body: InitiateAuthRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<AuthInitiateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `provider` | `string` | Template, Required | OAuth provider name (e.g., 'google', 'facebook') |
| `body` | [`InitiateAuthRequest`](../../doc/models/initiate-auth-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthInitiateResponse`](../../doc/models/auth-initiate-response.md)

## Example Usage

```ts
const provider = 'google';

const body: InitiateAuthRequest = {
  redirectUrl: 'https://example.com/callback',
};

try {
  const { result, ...httpResponse } = await authenticationController.initiateAuth(
  provider,
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
| 400 | Failed to initiate OAuth flow | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Handle Callback

:information_source: **Note** This endpoint does not require authentication.

```ts
async handleCallback(  provider: string,
  code: string,
  error?: string,
  errorDescription?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<AuthCallbackResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `provider` | `string` | Template, Required | OAuth provider name (e.g., 'google', 'facebook') |
| `code` | `string` | Query, Required | Authorization code from OAuth provider |
| `error` | `string \| undefined` | Query, Optional | Error code from OAuth provider |
| `errorDescription` | `string \| undefined` | Query, Optional | Detailed error description from OAuth provider |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthCallbackResponse`](../../doc/models/auth-callback-response.md)

## Example Usage

```ts
const provider = 'google';

const code = 'code8';

try {
  const { result, ...httpResponse } = await authenticationController.handleCallback(
  provider,
  code
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
| 400 | Failed to handle OAuth callback | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Get Settings

:information_source: **Note** This endpoint does not require authentication.

```ts
async getSettings(  provider: string,
requestOptions?: RequestOptions): Promise<ApiResponse<AuthSettingsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `provider` | `string` | Template, Required | OAuth provider name (e.g., 'google', 'facebook') |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthSettingsResponse`](../../doc/models/auth-settings-response.md)

## Example Usage

```ts
const provider = 'google';

try {
  const { result, ...httpResponse } = await authenticationController.getSettings(provider);
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
| 400 | Failed to retrieve OAuth provider settings | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |

