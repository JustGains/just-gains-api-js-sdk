
# Workouts Data 400 Error

## Structure

`WorkoutsData400Error`

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
  "message": "Invalid exercise data",
  "errors": [
    "Invalid exercise data provided"
  ]
}
```

