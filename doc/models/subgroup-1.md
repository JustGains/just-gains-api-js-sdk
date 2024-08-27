
# Subgroup 1

## Structure

`Subgroup1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string \| undefined` | Optional | The unique code of the muscle subgroup |
| `muscleGroupName` | `string \| undefined` | Optional | The localized name of the muscle subgroup |
| `muscleGroupType` | [`MuscleGroupTypeEnum \| undefined`](../../doc/models/muscle-group-type-enum.md) | Optional | - |
| `muscleGroupParent` | `string \| undefined` | Optional | The code of the parent muscle group |
| `subgroups` | [`Subgroup2[] \| undefined`](../../doc/models/subgroup-2.md) | Optional | - |

## Example (as JSON)

```json
{
  "muscleGroupCode": "UPPER_PECTORALS",
  "muscleGroupName": "Upper Pectorals",
  "muscleGroupType": "exercise_group",
  "muscleGroupParent": "CHEST",
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
    },
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
```

