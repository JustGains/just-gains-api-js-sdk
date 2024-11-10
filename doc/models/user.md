
# User

Represents a user in the system.

## Structure

`User`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string \| undefined` | Optional | Unique identifier for the user. |
| `userName` | `string \| undefined` | Optional | The user's chosen username for the platform. |
| `emailConfirmed` | `boolean \| undefined` | Optional | Indicates if the user's email has been confirmed |
| `email` | `string \| undefined` | Optional | The user's email address. |
| `password` | `string \| undefined` | Optional | The user's hashed password. This should never be exposed in API responses. |
| `oAuthProvider` | `string \| undefined` | Optional | The name of the OAuth provider if the user signed up using OAuth. |
| `roles` | `string[] \| undefined` | Optional | The user's role in the system, determining their permissions. |
| `lastSignInAt` | `string \| undefined` | Optional | Timestamp of the user's last login |
| `creatorProfile` | [`CreatorProfile1 \| undefined`](../../doc/models/creator-profile-1.md) | Optional | - |

## Example (as JSON)

```json
{
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "userName": "fitness_enthusiast_42",
  "emailConfirmed": true,
  "email": "jane.doe@example.com",
  "password": "$2a$10$Ks6Qr5Yl.Y5iY5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5",
  "oAuthProvider": "Google",
  "roles": [
    "user"
  ],
  "LastSignInAt": "06/14/2023 09:30:00"
}
```

