
# Exercise

## Structure

`Exercise`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string \| undefined` | Optional | A unique identifier for the exercise. |
| `exerciseName` | `string \| undefined` | Optional | Translated Primary Exercise Name |
| `exerciseTranslations` | [`ExerciseTranslation[] \| undefined`](../../doc/models/exercise-translation.md) | Optional | - |
| `exerciseEquipment` | [`ExerciseEquipment \| undefined`](../../doc/models/exercise-equipment.md) | Optional | - |
| `exerciseMuscles` | [`ExerciseMuscle[] \| undefined`](../../doc/models/exercise-muscle.md) | Optional | - |
| `exerciseVideos` | [`ExerciseVideo[] \| undefined`](../../doc/models/exercise-video.md) | Optional | - |
| `exerciseInstructions` | [`ExerciseInstruction[] \| undefined`](../../doc/models/exercise-instruction.md) | Optional | - |
| `exerciseThumbnail` | [`MediaAsset \| undefined`](../../doc/models/media-asset.md) | Optional | - |
| `userId` | `string \| undefined` | Optional | The user ID of the user who created the exercise. |
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
| `adminNotes` | `string \| undefined` | Optional | Admin notes for the exercise |

## Example (as JSON)

```json
{
  "exerciseCode": "BARBELL_SQUAT",
  "exerciseName": "Barbell Squat",
  "userId": "123e4567-e89b-12d3-a456-426614174000",
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
  "exerciseTranslations": [
    {
      "localeCode": "localeCode0",
      "exerciseName": "exerciseName0",
      "isPrimary": false
    },
    {
      "localeCode": "localeCode0",
      "exerciseName": "exerciseName0",
      "isPrimary": false
    },
    {
      "localeCode": "localeCode0",
      "exerciseName": "exerciseName0",
      "isPrimary": false
    }
  ],
  "exerciseEquipment": {
    "required": [
      "required2",
      "required3",
      "required4"
    ],
    "optional": [
      "optional3"
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
    },
    {
      "muscleCode": "muscleCode6",
      "targetPercentage": 202,
      "isPrimary": false
    }
  ]
}
```

