
# Muscle Groups 400 Error

## Structure

`MuscleGroups400Error`

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
  "message": "Invalid muscle group data",
  "errors": [
    "Invalid muscle group code format"
  ]
}
```

