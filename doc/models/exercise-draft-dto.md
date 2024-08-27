
# Exercise Draft DTO

## Structure

`ExerciseDraftDTO`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `fileName` | `string \| undefined` | Optional | - |
| `exerciseCode` | `string \| undefined` | Optional | - |
| `exerciseName` | `string \| undefined` | Optional | - |
| `alternateNames` | `string[] \| undefined` | Optional | - |
| `publishStatus` | [`PublishStatusEnum \| undefined`](../../doc/models/publish-status-enum.md) | Optional | - |
| `models` | [`ExerciseModelDTO[] \| undefined`](../../doc/models/exercise-model-dto.md) | Optional | - |
| `exerciseType` | `string[] \| undefined` | Optional | - |
| `exerciseMetrics` | `string[] \| undefined` | Optional | - |
| `exerciseDifficulty` | `number \| undefined` | Optional | **Constraints**: `>= 1`, `<= 5` |
| `metabolicEquivalent` | `number \| undefined` | Optional | - |
| `equipmentRequired` | [`EquipmentRequired \| undefined`](../../doc/models/equipment-required.md) | Optional | - |
| `primaryMuscleGroups` | [`TargetMuscleDTO[] \| undefined`](../../doc/models/target-muscle-dto.md) | Optional | - |
| `secondaryMuscleGroups` | [`TargetMuscleDTO[] \| undefined`](../../doc/models/target-muscle-dto.md) | Optional | - |
| `isPlateloaded` | `boolean \| undefined` | Optional | - |
| `isCardio` | `boolean \| undefined` | Optional | - |
| `olympicRating` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 5` |
| `powerlifterRating` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 5` |
| `calisthenicRating` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 5` |
| `popularityRating` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 5` |
| `exerciseTechnicalComplexity` | `number \| null \| undefined` | Optional | - |
| `isPlyometric` | `boolean \| undefined` | Optional | - |
| `isIsometric` | `boolean \| undefined` | Optional | - |
| `isCalisthenic` | `boolean \| undefined` | Optional | - |
| `isWeighted` | `boolean \| undefined` | Optional | - |
| `isUnilateral` | `boolean \| undefined` | Optional | - |
| `isBodyweight` | `boolean \| undefined` | Optional | - |
| `aiNotes` | `string \| undefined` | Optional | - |
| `exerciseInstructions` | [`ExerciseInstruction \| undefined`](../../doc/models/exercise-instruction.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": 236,
  "file_name": "file_name4",
  "exercise_code": "exercise_code6",
  "exercise_name": "exercise_name6",
  "alternate_names": [
    "alternate_names1"
  ]
}
```

