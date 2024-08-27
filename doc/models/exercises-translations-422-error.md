
# Exercises Translations 422 Error

## Structure

`ExercisesTranslations422Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `errors` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "status": "Unknown Status",
  "message": "Validation error",
  "errors": [
    "Invalid locale code",
    "Translation text is required"
  ]
}
```

