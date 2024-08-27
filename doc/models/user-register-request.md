
# User Register Request

Data transfer object for user registration

## Structure

`UserRegisterRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | User's email address |
| `password` | `string` | Required | User's password (should meet security requirements) |
| `firstName` | `string \| undefined` | Optional | User's first name |
| `lastName` | `string \| undefined` | Optional | User's last name |
| `username` | `string` | Required | User's chosen username |
| `redirectUrl` | `string \| undefined` | Optional | URL to redirect after successful registration |

## Example (as JSON)

```json
{
  "email": "john.doe@example.com",
  "password": "StrongP@ssw0rd!",
  "firstName": "John",
  "lastName": "Doe",
  "username": "johndoe123",
  "redirectUrl": "https://example.com/welcome"
}
```

