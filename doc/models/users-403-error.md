
# Users 403 Error

## Structure

`Users403Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `errors` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "status": "Forbidden",
  "message": "Access denied",
  "errors": [
    "User does not have the required role to access this resource"
  ]
}
```

