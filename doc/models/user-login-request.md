
# User Login Request

Data transfer object for user login

## Structure

`UserLoginRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | User's email address |
| `password` | `string` | Required | User's password |

## Example (as JSON)

```json
{
  "email": "john.doe@example.com",
  "password": "StrongP@ssw0rd!"
}
```

