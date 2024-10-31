
# Auth Data

Authentication data containing tokens and user information

## Structure

`AuthData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accessToken` | `string \| undefined` | Optional | JWT access token for authenticated requests |
| `refreshToken` | `string \| undefined` | Optional | JWT refresh token for obtaining new access tokens |
| `tokenExpiration` | `string \| undefined` | Optional | Expiration time of the access token |
| `userInfo` | [`User \| undefined`](../../doc/models/user.md) | Optional | Represents a user in the system. |

## Example (as JSON)

```json
{
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
```

