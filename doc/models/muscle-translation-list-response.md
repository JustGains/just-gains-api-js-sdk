
# Muscle Translation List Response

## Structure

`MuscleTranslationListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`MuscleTranslation[]`](../../doc/models/muscle-translation.md) | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "muscleCode": "QUAD",
      "localeCode": "en-US",
      "muscleName": "Quadriceps"
    }
  ]
}
```

