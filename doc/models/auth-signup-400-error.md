
# Auth Signup 400 Error

## Structure

`AuthSignup400Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `errors` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "status": "Bad Request",
  "message": "Registration failed",
  "errors": [
    "Invalid email format",
    "Password too weak"
  ]
}
```

