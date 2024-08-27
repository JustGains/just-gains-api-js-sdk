# Authentication New

```ts
const authenticationNewController = new AuthenticationNewController(client);
```

## Class Name

`AuthenticationNewController`

## Methods

* [Register a New User](../../doc/controllers/authentication-new.md#register-a-new-user)
* [Sign in a User](../../doc/controllers/authentication-new.md#sign-in-a-user)
* [Resend Confirmation Email](../../doc/controllers/authentication-new.md#resend-confirmation-email)
* [Initiate Forgot Password Process](../../doc/controllers/authentication-new.md#initiate-forgot-password-process)
* [Reset User Password](../../doc/controllers/authentication-new.md#reset-user-password)
* [Refresh Authentication Token](../../doc/controllers/authentication-new.md#refresh-authentication-token)
* [Sign Out the Current User](../../doc/controllers/authentication-new.md#sign-out-the-current-user)


# Register a New User

:information_source: **Note** This endpoint does not require authentication.

```ts
async registerANewUser(  body: UserRegisterRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<AuthSignupResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UserRegisterRequest`](../../doc/models/user-register-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthSignupResponse`](../../doc/models/auth-signup-response.md)

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
  const { result, ...httpResponse } = await authenticationNewController.registerANewUser(body);
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
| 400 | Invalid parameters | [`AuthSignup400Error`](../../doc/models/auth-signup-400-error.md) |


# Sign in a User

:information_source: **Note** This endpoint does not require authentication.

```ts
async signInAUser(  body: UserLoginRequest,
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
  const { result, ...httpResponse } = await authenticationNewController.signInAUser(body);
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
| 400 | Invalid credentials | [`AuthSignin400Error`](../../doc/models/auth-signin-400-error.md) |


# Resend Confirmation Email

:information_source: **Note** This endpoint does not require authentication.

```ts
async resendConfirmationEmail(  body: ConfirmEmailRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<AuthResendConfirmationEmailResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ConfirmEmailRequest`](../../doc/models/confirm-email-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthResendConfirmationEmailResponse`](../../doc/models/auth-resend-confirmation-email-response.md)

## Example Usage

```ts
const body: ConfirmEmailRequest = {
  email: 'john.doe@example.com',
};

try {
  const { result, ...httpResponse } = await authenticationNewController.resendConfirmationEmail(body);
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
| 400 | Failed to send confirmation email | [`AuthResendConfirmationEmail400Error`](../../doc/models/auth-resend-confirmation-email-400-error.md) |


# Initiate Forgot Password Process

:information_source: **Note** This endpoint does not require authentication.

```ts
async initiateForgotPasswordProcess(  body: ForgotPasswordRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<AuthForgotPasswordResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ForgotPasswordRequest`](../../doc/models/forgot-password-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthForgotPasswordResponse`](../../doc/models/auth-forgot-password-response.md)

## Example Usage

```ts
const body: ForgotPasswordRequest = {
  email: 'john.doe@example.com',
};

try {
  const { result, ...httpResponse } = await authenticationNewController.initiateForgotPasswordProcess(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Reset User Password

:information_source: **Note** This endpoint does not require authentication.

```ts
async resetUserPassword(  body: ResetPasswordRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<AuthResetPasswordResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ResetPasswordRequest`](../../doc/models/reset-password-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthResetPasswordResponse`](../../doc/models/auth-reset-password-response.md)

## Example Usage

```ts
const body: ResetPasswordRequest = {
  newPassword: 'NewStrongP@ssw0rd!',
};

try {
  const { result, ...httpResponse } = await authenticationNewController.resetUserPassword(body);
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
| 400 | Failed to reset password | [`AuthResetPassword400Error`](../../doc/models/auth-reset-password-400-error.md) |


# Refresh Authentication Token

:information_source: **Note** This endpoint does not require authentication.

```ts
async refreshAuthenticationToken(requestOptions?: RequestOptions): Promise<ApiResponse<AuthRefreshTokenResponse>>
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
  const { result, ...httpResponse } = await authenticationNewController.refreshAuthenticationToken();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Sign Out the Current User

:information_source: **Note** This endpoint does not require authentication.

```ts
async signOutTheCurrentUser(requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsDefaultResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsDefaultResponse`](../../doc/models/just-gains-default-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await authenticationNewController.signOutTheCurrentUser();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "status": "OK",
  "message": "User was successfully signed out!"
}
```

