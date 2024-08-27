
# Subgroup

## Structure

`Subgroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentGroupCode` | `string \| undefined` | Optional | Unique identifier for the equipment group. |
| `equipmentGroupName` | `string \| undefined` | Optional | The localized name of the equipment group<br>**Constraints**: *Pattern*: `^[a-zA-Z0-9_]*$` |
| `equipmentGroupType` | [`EquipmentGroupTypeEnum \| undefined`](../../doc/models/equipment-group-type-enum.md) | Optional | - |
| `equipmentGroupParent` | `string \| null \| undefined` | Optional | parent group CODE for hierarchical structuring. |

## Example (as JSON)

```json
{
  "equipmentGroupCode": "DUMBBELLS",
  "equipmentGroupName": "Dumbbells",
  "equipmentGroupParent": "FREE_WEIGHTS",
  "equipmentGroupType": "main_group"
}
```

