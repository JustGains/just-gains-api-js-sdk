
# Exercise Categories Response 1

## Structure

`ExerciseCategoriesResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`Data38 \| undefined`](../../doc/models/data-38.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "Created",
  "message": "Exercise category created successfully",
  "data": {
    "exerciseCategoryCode": "exerciseCategoryCode8",
    "exerciseCategoryName": "exerciseCategoryName2"
  }
}
```

