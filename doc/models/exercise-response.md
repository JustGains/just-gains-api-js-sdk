
# Exercise Response

## Structure

`ExerciseResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseUpdateRequest`](../../doc/models/exercise-update-request.md) | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "exerciseCode": "BARBELL_SQUAT",
    "exerciseName": "Barbell Squat",
    "exerciseCategories": [
      "STRENGTH",
      "CARDIO"
    ],
    "exerciseTypeCode": "STRENGTH",
    "publishStatusCode": "UNREVIEWED",
    "difficulty": 7,
    "metabolicEquivalent": 8.5,
    "isPlateloaded": true,
    "isCardio": false,
    "olympicRating": 5,
    "powerLifterRating": 5,
    "calisthenicRating": 5,
    "popularityRating": 5,
    "isPlyometric": true,
    "isIsometric": false,
    "isCalisthenic": true,
    "isWeighted": false,
    "isUnilateral": true,
    "isBodyweight": true,
    "adminNotes": "This exercise requires supervision.",
    "exerciseEquipment": {
      "required": [
        [
          "required2",
          "required3",
          "required4"
        ],
        [
          "required2",
          "required3",
          "required4"
        ],
        [
          "required2",
          "required3",
          "required4"
        ]
      ],
      "optional": [
        [
          "optional3"
        ]
      ]
    },
    "exerciseMuscles": [
      {
        "muscleCode": "muscleCode6",
        "targetPercentage": 202,
        "isPrimary": false
      }
    ]
  }
}
```

