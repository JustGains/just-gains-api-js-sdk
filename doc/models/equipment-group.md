
# Equipment Group

## Structure

`EquipmentGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentGroupCode` | `string \| undefined` | Optional | Unique identifier for the equipment group. |
| `equipmentGroupName` | `string \| undefined` | Optional | Name of the equipment group, localized. |
| `equipmentGroupParent` | `string \| null \| undefined` | Optional | parent group CODE for hierarchical structuring. |
| `equipmentGroupEquipment` | `string[] \| undefined` | Optional | - |
| `equipmentThumbnail` | [`EquipmentThumbnail1 \| undefined`](../../doc/models/equipment-thumbnail-1.md) | Optional | Link to the thumbnail image for the equipment group. |
| `sortOrder` | `number \| undefined` | Optional | Used to sort the equipment groups<br>**Default**: `0` |

## Example (as JSON)

```json
{
  "equipmentGroupCode": "DUMBBELLS",
  "equipmentGroupName": "Dumbbells",
  "equipmentGroupParent": "FREE_WEIGHTS",
  "sortOrder": 0,
  "equipmentGroupEquipment": [
    "equipmentGroupEquipment9"
  ],
  "equipmentThumbnail": {
    "mediaId": "0000103e-0000-0000-0000-000000000000",
    "fileName": "fileName4",
    "filePath": "filePath0",
    "fileUrl": "fileUrl4",
    "fileSize": 162,
    "fileFormat": "fileFormat6",
    "description": "description0"
  }
}
```

