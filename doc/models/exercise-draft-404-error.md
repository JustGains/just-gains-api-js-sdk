
# Exercise Draft 404 Error

## Structure

`ExerciseDraft404Error`

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
  "message": "Exercise not found",
  "errors": [
    "Exercise with the specified code does not exist"
  ]
}
```

