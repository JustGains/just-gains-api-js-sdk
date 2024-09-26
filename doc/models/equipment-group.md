
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
| `equipmentGroupThumbnail` | [`MediaAsset \| undefined`](../../doc/models/media-asset.md) | Optional | - |
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
  "equipmentGroupThumbnail": {
    "mediaId": "00000372-0000-0000-0000-000000000000",
    "fileName": "fileName8",
    "filePath": "filePath6",
    "fileUrl": "fileUrl8",
    "fileSize": 182,
    "fileFormat": "fileFormat0",
    "description": "description4"
  }
}
```

