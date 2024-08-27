
# Equipment Translations Response

## Structure

`EquipmentTranslationsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`Data46 \| undefined`](../../doc/models/data-46.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Equipment translations retrieved successfully",
  "data": {
    "localeCode": "localeCode2",
    "equipmentName": "equipmentName0"
  }
}
```

