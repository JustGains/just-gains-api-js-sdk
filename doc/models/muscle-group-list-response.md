
# Muscle Group List Response

## Structure

`MuscleGroupListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`MuscleGroup[]`](../../doc/models/muscle-group.md) | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
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
  ]
}
```

