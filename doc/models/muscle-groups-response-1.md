
# Muscle Groups Response 1

## Structure

`MuscleGroupsResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`MuscleGroup \| undefined`](../../doc/models/muscle-group.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "Created",
  "message": "Muscle group created successfully",
  "data": {
    "muscleGroupCode": "muscleGroupCode2",
    "muscleGroupName": "muscleGroupName4",
    "muscleGroupTranslations": [
      {
        "localeCode": "localeCode2",
        "muscleGroupName": "muscleGroupName4",
        "muscleGroupDescription": "muscleGroupDescription0"
      },
      {
        "localeCode": "localeCode2",
        "muscleGroupName": "muscleGroupName4",
        "muscleGroupDescription": "muscleGroupDescription0"
      }
    ],
    "muscleGroupParent": "muscleGroupParent0",
    "muscleGroupMuscles": [
      "muscleGroupMuscles7",
      "muscleGroupMuscles8",
      "muscleGroupMuscles9"
    ]
  }
}
```

