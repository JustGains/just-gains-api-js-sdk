
# User Without Creator Profile Response

## Structure

`UserWithoutCreatorProfileResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`UserWithoutCreatorProfile`](../../doc/models/user-without-creator-profile.md) | Required | Represents a user in the system without creator profile. |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "userId": "123e4567-e89b-12d3-a456-426614174000",
    "userName": "fitness_enthusiast_42",
    "email": "jane.doe@example.com",
    "password": "$2a$10$Ks6Qr5Yl.Y5iY5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5",
    "firstName": "Jane",
    "lastName": "Doe",
    "fullName": "Jane Doe",
    "oAuthProvider": "Google",
    "roles": [
      "user"
    ]
  }
}
```

