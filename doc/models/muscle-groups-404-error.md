
# Muscle Groups 404 Error

## Structure

`MuscleGroups404Error`

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
  "message": "Muscle group not found",
  "errors": [
    "The requested muscle group could not be found"
  ]
}
```

