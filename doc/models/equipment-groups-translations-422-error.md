
# Equipment Groups Translations 422 Error

## Structure

`EquipmentGroupsTranslations422Error`

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
  "message": "Failed to update equipment group translations",
  "errors": [
    "Invalid locale code"
  ]
}
```

