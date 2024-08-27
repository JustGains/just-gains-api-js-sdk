
# Exercise Metrics 404 Error

## Structure

`ExerciseMetrics404Error`

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
  "message": "Exercise metric not found",
  "errors": [
    "Exercise metric with the specified code does not exist"
  ]
}
```

