
# User Without Creator Profile

Represents a user in the system without creator profile.

## Structure

`UserWithoutCreatorProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string \| undefined` | Optional | Unique identifier for the user. |
| `userName` | `string \| undefined` | Optional | The user's chosen username for the platform. |
| `email` | `string \| undefined` | Optional | The user's email address. |
| `password` | `string \| undefined` | Optional | The user's hashed password. This should never be exposed in API responses. |
| `firstName` | `string \| undefined` | Optional | The user's first name. |
| `lastName` | `string \| undefined` | Optional | The user's last name. |
| `fullName` | `string \| undefined` | Optional | The user's full name, typically a combination of first and last name. |
| `oAuthProvider` | `string \| undefined` | Optional | The name of the OAuth provider if the user signed up using OAuth. |
| `roles` | `string[] \| undefined` | Optional | The user's role in the system, determining their permissions. |
| `refreshToken` | `string \| undefined` | Optional | refreshToken value to get next accesstoken |

## Example (as JSON)

```json
{
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
```

