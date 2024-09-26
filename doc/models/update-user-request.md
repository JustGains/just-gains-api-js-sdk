
# Update User Request

## Structure

`UpdateUserRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string \| undefined` | Optional | Unique identifier for the user. |
| `email` | `string \| undefined` | Optional | The user's email address. |
| `firstName` | `string \| undefined` | Optional | The user's first name. |
| `lastName` | `string \| undefined` | Optional | The user's last name. |
| `fullName` | `string \| undefined` | Optional | The user's full name, typically a combination of first and last name. |

## Example (as JSON)

```json
{
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "email": "jane.doe@example.com",
  "firstName": "Jane",
  "lastName": "Doe",
  "fullName": "Jane Doe"
}
```

