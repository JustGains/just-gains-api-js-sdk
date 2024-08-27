
# Exercise Draft Response

## Structure

`ExerciseDraftResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`ExerciseDraftDTO \| undefined`](../../doc/models/exercise-draft-dto.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Exercise updated successfully",
  "data": {
    "id": 138,
    "file_name": "file_name2",
    "exercise_code": "exercise_code0",
    "exercise_name": "exercise_name2",
    "alternate_names": [
      "alternate_names7",
      "alternate_names8"
    ]
  }
}
```

