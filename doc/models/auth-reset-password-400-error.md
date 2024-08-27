
# Auth Reset Password 400 Error

## Structure

`AuthResetPassword400Error`

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
  "message": "Failed to reset password",
  "errors": [
    "Invalid or expired reset token"
  ]
}
```

