
# Exercises Muscle Groups Response

## Structure

`ExercisesMuscleGroupsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`MuscleGroupDto[] \| undefined`](../../doc/models/muscle-group-dto.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Muscle groups retrieved successfully",
  "data": [
    {
      "muscleGroupCode": "muscleGroupCode2",
      "muscleGroupName": "muscleGroupName4"
    },
    {
      "muscleGroupCode": "muscleGroupCode2",
      "muscleGroupName": "muscleGroupName4"
    }
  ]
}
```

