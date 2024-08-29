
# Muscle Group

## Structure

`MuscleGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string \| undefined` | Optional | Unique identifier for the muscle group. |
| `muscleGroupName` | `string \| undefined` | Optional | Name of the muscle group, localized. |
| `muscleGroupParent` | `string \| null \| undefined` | Optional | parent group CODE for hierarchical structuring. |
| `muscleGroupMuscles` | `string[] \| undefined` | Optional | An array of muscle codes associated with this muscle group.<br>Each muscle code represents a specific muscle or muscle group targeted in exercises.<br>The codes are used to identify muscles across different languages and provide<br>consistency in muscle targeting for various exercises. |
| `muscleGroupType` | [`MuscleGroupTypeEnum \| undefined`](../../doc/models/muscle-group-type-enum.md) | Optional | - |
| `muscleGroupThumbnail` | [`MediaAsset \| undefined`](../../doc/models/media-asset.md) | Optional | - |

## Example (as JSON)

```json
{
  "muscleGroupCode": "CHEST",
  "muscleGroupName": "Chest",
  "muscleGroupParent": "UPPER_BODY",
  "muscleGroupMuscles": [
    "PECTORALIS_MAJOR_STERNAL_HEAD",
    "ANTERIOR_DELTOID",
    "TRICEPS_BRACHII",
    "RECTUS_ABDOMINIS",
    "LATISSIMUS_DORSI",
    "BICEPS_BRACHII",
    "QUADRICEPS_FEMORIS",
    "HAMSTRINGS",
    "GASTROCNEMIUS"
  ],
  "muscleGroupType": "main_group"
}
```

