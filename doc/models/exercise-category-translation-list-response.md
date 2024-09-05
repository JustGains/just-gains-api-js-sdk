
# Exercise Category Translation List Response

## Structure

`ExerciseCategoryTranslationListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseCategoryTranslation[]`](../../doc/models/exercise-category-translation.md) | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "localeCode": "en-US",
      "exerciseCategoryName": "Strength Training"
    }
  ]
}
```

