
# Exercise Categories 404 Error

## Structure

`ExerciseCategories404Error`

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
  "message": "Exercise category not found",
  "errors": [
    "Exercise category with the specified code does not exist"
  ]
}
```

