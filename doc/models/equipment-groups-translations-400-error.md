
# Equipment Groups Translations 400 Error

## Structure

`EquipmentGroupsTranslations400Error`

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
  "message": "Failed to retrieve equipment group translations",
  "errors": [
    "Invalid equipment group code"
  ]
}
```

