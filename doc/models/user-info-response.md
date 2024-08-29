
# User Info Response

## Structure

`UserInfoResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`UserInfo1`](../../doc/models/user-info-1.md) | Required | The data returned by the operation. |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "email": "john.doe@example.com",
    "userName": "johndoe123",
    "firstName": "Jane",
    "lastName": "Doe",
    "emailConfirmed": true,
    "roles": [
      "user",
      "admin"
    ],
    "lastLoginAt": "06/14/2023 09:30:00"
  }
}
```
