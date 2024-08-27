
# Update User Request

Request object for updating user information

## Structure

`UpdateUserRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `user` | [`User1`](../../doc/models/user-1.md) | Required | Updated user information |

## Example (as JSON)

```json
{
  "user": {
    "userId": "123e4567-e89b-12d3-a456-426614174000",
    "userName": "fitness_enthusiast_42",
    "email": "jane.doe@example.com",
    "password": "$2a$10$Ks6Qr5Yl.Y5iY5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5",
    "firstName": "Jane",
    "lastName": "Doe",
    "fullName": "Jane Doe",
    "oAuthProvider": "Google",
    "role": "user"
  }
}
```

