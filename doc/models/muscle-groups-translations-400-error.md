
# Muscle Groups Translations 400 Error

## Structure

`MuscleGroupsTranslations400Error`

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
  "message": "Failed to retrieve muscle group translations",
  "errors": [
    "Invalid muscle group code"
  ]
}
```

