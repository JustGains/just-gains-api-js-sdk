
# Exercise Update Request

## Structure

`ExerciseUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string \| undefined` | Optional | A unique identifier for the exercise. |
| `exerciseName` | `string \| undefined` | Optional | Translated Primary Exercise Name |
| `exerciseEquipment` | [`ExerciseEquipment \| undefined`](../../doc/models/exercise-equipment.md) | Optional | - |
| `exerciseMuscles` | [`ExerciseMuscle[] \| undefined`](../../doc/models/exercise-muscle.md) | Optional | - |
| `exerciseCategories` | `string[] \| undefined` | Optional | Array of category codes associated with this exercise |
| `relatedExercises` | [`RelatedExerciseListItem[] \| undefined`](../../doc/models/related-exercise-list-item.md) | Optional | - |
| `exerciseTypeCode` | `string \| undefined` | Optional | The exerciseTypeCode of the exercise |
| `publishStatusCode` | [`PublishStatusCodeEnum \| undefined`](../../doc/models/publish-status-code-enum.md) | Optional | The publish status of the exercise |
| `difficulty` | `number \| undefined` | Optional | Difficulty level of the exercise |
| `metabolicEquivalent` | `number \| undefined` | Optional | Metabolic equivalent of the exercise |
| `isPlateloaded` | `boolean \| undefined` | Optional | Indicates if the exercise is plateloaded |
| `isCardio` | `boolean \| undefined` | Optional | Indicates if the exercise is cardio |
| `olympicRating` | `number \| undefined` | Optional | Olympic rating of the exercise<br>**Default**: `0`<br>**Constraints**: `>= 0`, `<= 5` |
| `powerLifterRating` | `number \| undefined` | Optional | Power lifter rating of the exercise<br>**Default**: `0`<br>**Constraints**: `>= 0`, `<= 5` |
| `calisthenicRating` | `number \| undefined` | Optional | Calisthenic rating of the exercise<br>**Default**: `0`<br>**Constraints**: `>= 0`, `<= 5` |
| `popularityRating` | `number \| undefined` | Optional | Popularity rating of the exercise<br>**Default**: `0`<br>**Constraints**: `>= 0`, `<= 5` |
| `isPlyometric` | `boolean \| undefined` | Optional | Indicates if the exercise is plyometric |
| `isIsometric` | `boolean \| undefined` | Optional | Indicates if the exercise is isometric |
| `isCalisthenic` | `boolean \| undefined` | Optional | Indicates if the exercise is calisthenic |
| `isWeighted` | `boolean \| undefined` | Optional | Indicates if the exercise is weighted |
| `isUnilateral` | `boolean \| undefined` | Optional | Indicates if the exercise is unilateral |
| `isBodyweight` | `boolean \| undefined` | Optional | Indicates if the exercise is bodyweight |
| `isVariant` | `boolean \| undefined` | Optional | Indicates if the exercise is a variant. When true, the exercise won't show up without being searched. |
| `adminNotes` | `string \| undefined` | Optional | Admin notes for the exercise |

## Example (as JSON)

```json
{
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
  "isVariant": false,
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
    },
    {
      "muscleCode": "muscleCode6",
      "targetPercentage": 202,
      "isPrimary": false
    }
  ]
}
```

