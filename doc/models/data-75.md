
# Data 75

## Structure

`Data75`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reviewId` | `number \| undefined` | Optional | Unique identifier for this review. |
| `programId` | `number \| undefined` | Optional | Identifier of the reviewed program. |
| `userId` | `string \| undefined` | Optional | Identifier of the user who wrote the review. |
| `rating` | `number \| undefined` | Optional | Numeric rating given by the user (1 to 5).<br>**Constraints**: `>= 1`, `<= 5` |
| `reviewText` | `string \| undefined` | Optional | Text content of the review. |
| `createdAt` | `string \| undefined` | Optional | Timestamp of when the review was created. |

## Example (as JSON)

```json
{
  "reviewId": 20001,
  "programId": 1001,
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "rating": 5,
  "reviewText": "This program significantly improved my strength. Highly recommended for intermediate lifters!",
  "createdAt": "07/28/2023 18:45:00"
}
```

