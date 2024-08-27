
# Muscles Translations 400 Error

## Structure

`MusclesTranslations400Error`

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
  "message": "Failed to retrieve muscle translations",
  "errors": [
    "Invalid muscle code"
  ]
}
```

