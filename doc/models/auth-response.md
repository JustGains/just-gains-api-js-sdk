
# Auth Response

Response object for authentication operations

## Structure

`AuthResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accessToken` | `string \| undefined` | Optional | JWT access token for authenticated requests |
| `refreshToken` | `string \| undefined` | Optional | JWT refresh token for obtaining new access tokens |
| `tokenExpiration` | `string \| undefined` | Optional | Expiration time of the access token |
| `userInfo` | [`UserInfo1 \| undefined`](../../doc/models/user-info-1.md) | Optional | User information |

## Example (as JSON)

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "tokenExpiration": "06/15/2023 14:30:00",
  "userInfo": {
    "id": "00000bce-0000-0000-0000-000000000000",
    "email": "email4",
    "userName": "userName4",
    "firstName": "firstName2",
    "lastName": "lastName6"
  }
}
```

