
# Equipment Response 1

## Structure

`EquipmentResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`Data43 \| undefined`](../../doc/models/data-43.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "Created",
  "message": "Equipment created successfully",
  "data": {
    "equipmentCode": "equipmentCode4",
    "equipmentName": "equipmentName0",
    "equipmentThumbnail": "equipmentThumbnail0",
    "equipmentEquipmentGroups": [
      "equipmentEquipmentGroups5",
      "equipmentEquipmentGroups4"
    ]
  }
}
```

