
# Auth Callback Response

## Structure

`AuthCallbackResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`Data`](../../doc/models/data.md) | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "accessToken": "accessToken8",
    "refreshToken": "refreshToken8",
    "tokenExpiration": "tokenExpiration4",
    "userInfo": {
      "userId": "0000084a-0000-0000-0000-000000000000",
      "userName": "userName4",
      "emailConfirmed": false,
      "email": "email4",
      "password": "password6"
    }
  }
}
```

