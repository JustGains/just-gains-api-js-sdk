
# Auth Signin 400 Error

## Structure

`AuthSignin400Error`

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
  "message": "Sign in failed",
  "errors": [
    "Invalid email or password"
  ]
}
```

