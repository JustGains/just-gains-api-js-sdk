
# Exercises Translations 404 Error

## Structure

`ExercisesTranslations404Error`

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
  "message": "Exercise translations not found",
  "errors": [
    "No translations found for the specified exercise code"
  ]
}
```

