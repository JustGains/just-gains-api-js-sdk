
# Program Review Response

## Structure

`ProgramReviewResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ProgramReview`](../../doc/models/program-review.md) | Required | Represents a user's review of a program. |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "reviewId": 20001,
    "programId": 1001,
    "userId": "123e4567-e89b-12d3-a456-426614174000",
    "rating": 5,
    "reviewText": "This program significantly improved my strength. Highly recommended for intermediate lifters!",
    "createdAt": "07/28/2023 18:45:00"
  }
}
```

