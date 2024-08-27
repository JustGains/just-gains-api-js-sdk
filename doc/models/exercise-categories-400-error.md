
# Exercise Categories 400 Error

## Structure

`ExerciseCategories400Error`

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
  "message": "Invalid exercise category data",
  "errors": [
    "Category code is required"
  ]
}
```

