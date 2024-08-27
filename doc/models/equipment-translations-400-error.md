
# Equipment Translations 400 Error

## Structure

`EquipmentTranslations400Error`

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
  "message": "Failed to retrieve equipment translations",
  "errors": [
    "Invalid equipment code"
  ]
}
```

