
# Auth Refresh Token Response

## Structure

`AuthRefreshTokenResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`Data13 \| undefined`](../../doc/models/data-13.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Token refreshed successfully",
  "data": {
    "accessToken": "accessToken8",
    "refreshToken": "refreshToken8",
    "tokenExpiration": "2016-03-13T12:52:32.123Z",
    "userInfo": {
      "id": "00000bce-0000-0000-0000-000000000000",
      "email": "email4",
      "userName": "userName4",
      "firstName": "firstName2",
      "lastName": "lastName6"
    }
  }
}
```

