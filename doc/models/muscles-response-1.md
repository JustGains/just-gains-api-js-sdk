
# Muscles Response 1

## Structure

`MusclesResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`Data25 \| undefined`](../../doc/models/data-25.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Muscle retrieved successfully",
  "data": {
    "muscleCode": "muscleCode0",
    "muscleName": "muscleName2",
    "muscleTranslations": [
      {
        "muscleCode": "muscleCode2",
        "localeCode": "localeCode4",
        "muscleName": "muscleName4"
      },
      {
        "muscleCode": "muscleCode2",
        "localeCode": "localeCode4",
        "muscleName": "muscleName4"
      }
    ]
  }
}
```

