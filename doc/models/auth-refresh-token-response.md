
# Auth Refresh Token Response

## Structure

`AuthRefreshTokenResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`AuthData \| undefined`](../../doc/models/auth-data.md) | Optional | Authentication data containing tokens and user information |
| `status` | `unknown \| undefined` | Optional | - |
| `message` | `unknown \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "status": {
    "key1": "val1",
    "key2": "val2"
  },
  "message": {
    "key1": "val1",
    "key2": "val2"
  },
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

