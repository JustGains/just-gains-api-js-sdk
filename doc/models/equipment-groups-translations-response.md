
# Equipment Groups Translations Response

## Structure

`EquipmentGroupsTranslationsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`EquipmentGroupTranslation[] \| undefined`](../../doc/models/equipment-group-translation.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Equipment group translations retrieved successfully",
  "data": [
    {
      "localeCode": "localeCode2",
      "equipmentGroupName": "equipmentGroupName6",
      "equipmentGroupDescription": "equipmentGroupDescription4"
    }
  ]
}
```

