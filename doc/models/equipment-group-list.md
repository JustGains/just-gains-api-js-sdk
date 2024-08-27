
# Equipment Group List

## Structure

`EquipmentGroupList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentGroupCode` | `string \| undefined` | Optional | Unique identifier for the equipment group. |
| `equipmentGroupName` | `string \| undefined` | Optional | The localized name of the equipment group<br>**Constraints**: *Pattern*: `^[a-zA-Z0-9_]*$` |
| `equipmentGroupType` | [`EquipmentGroupTypeEnum \| undefined`](../../doc/models/equipment-group-type-enum.md) | Optional | - |
| `equipmentGroupParent` | `string \| null \| undefined` | Optional | parent group CODE for hierarchical structuring. |
| `subgroups` | [`Subgroup[] \| undefined`](../../doc/models/subgroup.md) | Optional | - |
| `equipmentGroupEquipment` | `string[] \| undefined` | Optional | - |
| `equipmentThumbnail` | [`MediaAsset \| undefined`](../../doc/models/media-asset.md) | Optional | - |
| `sortOrder` | `number \| undefined` | Optional | Used to sort the equipment groups<br>**Default**: `0` |

## Example (as JSON)

```json
{
  "equipmentGroupCode": "DUMBBELLS",
  "equipmentGroupName": "Dumbbells",
  "equipmentGroupParent": "FREE_WEIGHTS",
  "equipmentGroupEquipment": [
    "WEIGHTS",
    "FREE_WEIGHTS"
  ],
  "sortOrder": 0,
  "equipmentGroupType": "exercise_group",
  "subgroups": [
    {
      "equipmentGroupCode": "equipmentGroupCode4",
      "equipmentGroupName": "equipmentGroupName8",
      "equipmentGroupType": "exercise_group",
      "equipmentGroupParent": "equipmentGroupParent6"
    }
  ]
}
```

