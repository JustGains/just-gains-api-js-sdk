
# Users 400 Error

## Structure

`Users400Error`

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
  "message": "Invalid user ID format",
  "errors": [
    "The provided user ID is not a valid UUID"
  ]
}
```

