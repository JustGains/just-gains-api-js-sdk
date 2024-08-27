
# Muscle Group List

## Structure

`MuscleGroupList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string \| undefined` | Optional | The unique code of the muscle group |
| `muscleGroupName` | `string \| undefined` | Optional | The localized name of the muscle group |
| `muscleGroupType` | [`MuscleGroupTypeEnum \| undefined`](../../doc/models/muscle-group-type-enum.md) | Optional | - |
| `muscleGroupParent` | `string \| null \| undefined` | Optional | The code of the muscle group that is the parent of this group |
| `subgroups` | [`Subgroup1[] \| undefined`](../../doc/models/subgroup-1.md) | Optional | - |
| `muscleGroupMuscles` | `string[] \| undefined` | Optional | An array of muscle codes associated with this muscle group.<br>Each muscle code represents a specific muscle or muscle group targeted in exercises.<br>The codes are used to identify muscles across different languages and provide<br>consistency in muscle targeting for various exercises. |
| `muscleGroupThumbnail` | [`MediaAsset \| undefined`](../../doc/models/media-asset.md) | Optional | - |

## Example (as JSON)

```json
{
  "muscleGroupCode": "CHEST",
  "muscleGroupName": "Chest",
  "muscleGroupType": "sub_group",
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
  "subgroups": [
    {
      "muscleGroupCode": "muscleGroupCode0",
      "muscleGroupName": "muscleGroupName6",
      "muscleGroupType": "sub_group",
      "muscleGroupParent": "muscleGroupParent2",
      "subgroups": [
        {
          "muscleGroupCode": "muscleGroupCode0",
          "muscleGroupName": "muscleGroupName6",
          "muscleGroupType": "sub_group",
          "muscleGroupParent": "muscleGroupParent2",
          "subgroups": [
            {
              "muscleGroupCode": "muscleGroupCode0",
              "muscleGroupName": "muscleGroupName6",
              "muscleGroupType": "sub_group",
              "muscleGroupParent": "muscleGroupParent2",
              "subgroups": [
                {
                  "muscleGroupCode": "muscleGroupCode0",
                  "muscleGroupName": "muscleGroupName6",
                  "muscleGroupType": "main_group"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

