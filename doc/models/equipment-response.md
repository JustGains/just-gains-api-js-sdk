
# Equipment Response

## Structure

`EquipmentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`Equipment[] \| undefined`](../../doc/models/equipment.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Equipment list retrieved successfully",
  "data": [
    {
      "equipmentCode": "equipmentCode4",
      "equipmentName": "equipmentName0",
      "equipmentThumbnail": "equipmentThumbnail0",
      "equipmentEquipmentGroups": [
        "equipmentEquipmentGroups5",
        "equipmentEquipmentGroups4"
      ]
    }
  ]
}
```

