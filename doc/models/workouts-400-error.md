
# Workouts 400 Error

## Structure

`Workouts400Error`

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
  "message": "Invalid pagination parameters",
  "errors": [
    "Invalid page number",
    "Invalid page size"
  ]
}
```

