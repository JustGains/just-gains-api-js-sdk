
# Exercise Category List Response

## Structure

`ExerciseCategoryListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseCategory[]`](../../doc/models/exercise-category.md) | Required | The data returned by the operation. |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "exerciseCategoryCode": "STRENGTH_TRAINING",
      "exerciseCategoryName": "Strength Training"
    }
  ]
}
```

