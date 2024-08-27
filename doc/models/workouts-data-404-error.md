
# Workouts Data 404 Error

## Structure

`WorkoutsData404Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `errors` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "status": "Not Found",
  "message": "Workout not found",
  "errors": [
    "The requested workout could not be found"
  ]
}
```

