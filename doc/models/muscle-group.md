
# Muscle Group

## Structure

`MuscleGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string \| undefined` | Optional | Unique identifier for the muscle group. |
| `muscleGroupName` | `string \| undefined` | Optional | Name of the muscle group, localized. |
| `muscleGroupTranslations` | [`MuscleGroupTranslation[] \| undefined`](../../doc/models/muscle-group-translation.md) | Optional | Muscle Group Translations |
| `muscleGroupParent` | `string \| null \| undefined` | Optional | parent group CODE for hierarchical structuring. |
| `muscleGroupMuscles` | `string[] \| undefined` | Optional | An array of muscle codes associated with this muscle group.<br>Each muscle code represents a specific muscle or muscle group targeted in exercises.<br>The codes are used to identify muscles across different languages and provide<br>consistency in muscle targeting for various exercises. |
| `muscleGroupType` | [`MuscleGroupType5Enum \| undefined`](../../doc/models/muscle-group-type-5-enum.md) | Optional | - |
| `muscleGroupThumbnail` | [`MuscleGroupThumbnail1 \| undefined`](../../doc/models/muscle-group-thumbnail-1.md) | Optional | Link to the thumbnail image for the muscle group. |

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
  "muscleGroupType": "main_group",
  "muscleGroupTranslations": [
    {
      "localeCode": "localeCode2",
      "muscleGroupName": "muscleGroupName4",
      "muscleGroupDescription": "muscleGroupDescription0"
    }
  ]
}
```

