
# Auth Resend Confirmation Email 400 Error

## Structure

`AuthResendConfirmationEmail400Error`

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
  "message": "Failed to send confirmation email",
  "errors": [
    "Invalid email address"
  ]
}
```

