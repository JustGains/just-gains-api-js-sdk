
# Data 3

## Structure

`Data3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accessToken` | `string \| undefined` | Optional | The access token received from the OAuth provider |
| `refreshToken` | `string \| undefined` | Optional | The refresh token received from the OAuth provider |
| `user` | [`UserInfo \| undefined`](../../doc/models/user-info.md) | Optional | User information object |

## Example (as JSON)

```json
{
  "accessToken": "accessToken6",
  "refreshToken": "refreshToken6",
  "user": {
    "id": "0000143c-0000-0000-0000-000000000000",
    "email": "email6",
    "userName": "userName2",
    "firstName": "firstName4",
    "lastName": "lastName4"
  }
}
```

