
# Exercise Categories Translations 400 Error

## Structure

`ExerciseCategoriesTranslations400Error`

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
  "message": "Failed to retrieve exercise category translations",
  "errors": [
    "Invalid exercise category code"
  ]
}
```

