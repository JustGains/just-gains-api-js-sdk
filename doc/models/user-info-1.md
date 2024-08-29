
# User Info 1

The data returned by the operation.

## Structure

`UserInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Unique identifier for the user |
| `email` | `string \| undefined` | Optional | User's email address |
| `userName` | `string \| undefined` | Optional | User's username |
| `firstName` | `string \| undefined` | Optional | The user's first name. |
| `lastName` | `string \| undefined` | Optional | The user's last name. |
| `emailConfirmed` | `boolean \| undefined` | Optional | Indicates if the user's email has been confirmed |
| `roles` | `string[] \| undefined` | Optional | List of roles assigned to the user |
| `lastLoginAt` | `string \| undefined` | Optional | Timestamp of the user's last login |

## Example (as JSON)

```json
{
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
```

