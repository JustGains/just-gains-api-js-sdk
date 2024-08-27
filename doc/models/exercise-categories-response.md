
# Exercise Categories Response

## Structure

`ExerciseCategoriesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`ExerciseCategory[] \| undefined`](../../doc/models/exercise-category.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Exercise categories retrieved successfully",
  "data": [
    {
      "exerciseCategoryCode": "exerciseCategoryCode8",
      "exerciseCategoryName": "exerciseCategoryName2"
    }
  ]
}
```

