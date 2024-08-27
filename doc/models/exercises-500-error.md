
# Exercises 500 Error

## Structure

`Exercises500Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `errors` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "status": "Internal Server Error",
  "message": "Failed to update exercise",
  "errors": [
    "Internal server error"
  ]
}
```

